// src/services/authService.ts

// Импортируем типы, которые описывают структуру данных в db.json
import type { DbStudent, DbTeacher, User } from '../types/user.ts';

// Базовый URL для API. Мы используем '/api', потому что в vite.config.ts настроен прокси.
// Все запросы с '/api' будут перенаправлены на http://localhost:4000.
const API_URL = '/api';

/**
 * Поиск преподавателя по логину и паролю.
 * Возвращает объект пользователя (без пароля) или null, если не найден.
 */
const findTeacher = async (
  login: string,
  password: string,
): Promise<User | null> => {
  // Формируем параметры запроса: ?login=...&password=...
  // URLSearchParams преобразует объект в строку вида key=value&key2=value2
  const params = new URLSearchParams({ login, password });

  // Отправляем GET-запрос на /api/teachers?login=...&password=...
  // json-server воспринимает такие параметры как фильтры.
  const response = await fetch(`${API_URL}/teachers?${params}`);

  // Если ответ не успешный (например, 404 или 500), выбрасываем ошибку
  if (!response.ok) {
    throw new Error('Ошибка соединения с сервером');
  }

  // Преобразуем ответ в массив преподавателей (json-server всегда возвращает массив)
  const teachers: DbTeacher[] = await response.json();

  // Берём первого найденного (по логину и паролю может быть только один)
  const teacher = teachers[0];

  // Если преподаватель не найден, возвращаем null
  if (!teacher) {
    return null;
  }

  // Убираем поле password из объекта, чтобы не хранить его в сессии.
  // Деструктуризация: берём поле password в переменную _ (чтобы проигнорировать),
  // а все остальные поля собираем в объект profile.
  const { password: _, ...profile } = teacher;

  // Возвращаем профиль с добавленным полем role = 'teacher'
  // Поле role не хранится в db.json, мы его добавляем сами, потому что знаем, откуда пришли данные.
  return { ...profile, role: 'teacher' };
};

/**
 * Поиск студента — аналогично, но с коллекцией students.
 * Обратите внимание: у студента есть дополнительное поле groupId.
 */
const findStudent = async (
  login: string,
  password: string,
): Promise<User | null> => {
  const params = new URLSearchParams({ login, password });
  const response = await fetch(`${API_URL}/students?${params}`);

  if (!response.ok) {
    throw new Error('Ошибка соединения с сервером');
  }

  const students: DbStudent[] = await response.json();
  const student = students[0];

  if (!student) {
    return null;
  }

  // Игнорируем password, остальное (включая groupId) сохраняем
  const { password: _, ...profile } = student;

  // Добавляем role = 'student'
  return { ...profile, role: 'student' };
};

/**
 * Основная функция для входа.
 * Сначала ищет среди преподавателей, потом среди студентов.
 * Если никто не найден, возвращает null.
 */
export const authenticateUser = async (
  login: string,
  password: string,
): Promise<User | null> => {
  // Пробуем найти преподавателя
  const teacher = await findTeacher(login, password);
  if (teacher) {
    return teacher;
  }

  // Если не преподаватель, ищем студента
  return findStudent(login, password);
};

/**
 * Генерация уникального токена (идентификатора сессии).
 * Используем встроенную функцию crypto.randomUUID() – она создаёт строку вида
 * "f47ac10b-58cc-4372-a567-0e02b2c3d479".
 * Этот токен не проверяется сервером, но для учебного проекта достаточно.
 */
export const generateToken = (): string => crypto.randomUUID();