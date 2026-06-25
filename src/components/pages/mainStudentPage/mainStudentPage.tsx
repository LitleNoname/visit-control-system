/*import { useEffect, useState } from 'react';
import { getUser } from '../../../utils/auth.ts';

export const MainStudent = () => {
  const user = getUser();
  const [groupName, setGroupName] = useState('');

  useEffect(() => {
    if (user?.role === 'student' && user.groupId) {
      fetch(`/api/groups/${user.groupId}`)
        .then(res => res.json())
        .then(data => setGroupName(data.name))
        .catch(console.error);
    }
  }, [user]);

  return (
    <div>
      <h1>Привет, {user?.fullName}</h1>
      <p>Группа: {groupName || 'Загрузка...'}</p>
    </div>
  );
};*/


import './mainStudentPage.scss';
// Импорт логотипа из папки assets. Убедитесь, что путь правильный.
import logo from '../../../assets/react.svg';
import React, { useEffect, useState } from 'react';
import { getUser } from '../../../utils/auth.ts';

/**
 * Главная страница студента.
 * Принимает необязательный параметр blocked (false = активная форма, true = заблокированная).
 */
export const MainStudent = ({ blocked = false }: { blocked?: boolean }) => {
  // Локальное состояние, можно переключать внутри компонента (но не используется).
  const [isBlocked] = useState(blocked);
  const user = getUser();
  const [groupName, setGroupName] = useState('');

  useEffect(() => {
    if (user?.role === 'student' && user.groupId) {
      fetch(`/api/groups/${user.groupId}`)
        .then(res => res.json())
        .then(data => setGroupName(data.name))
        .catch(console.error);
    }
  }, [user]);

  return (
    // Основной контейнер страницы. Все размеры и позиции заданы в SCSS.
    <div className="main-student-page">

      {/* Логотип в левом верхнем углу с отступами 6px */}
      <img src={logo} alt="Логотип" className="logo" />

      {/* Группа: заголовок и хлебные крошки */}
      <div className="title-section">
        {/* Поле с заголовком "Контроль посещения" */}
        <div className="title-field">
          <span className="title-text">Контроль посещения</span>
        </div>
        {/* Хлебные крошки (навигационная цепочка) */}
        <div className="breadcrumbs">Главная &gt; Контроль посещения</div>
      </div>

      {/* Кнопка "Выйти" справа */}
      <button className="logout-button">
        Выйти
      </button>

      {/* Форма отметки */}
      <div className="form-container">
      <div className="form-content active">
            <div className="form-subtitle">Входящий опрос</div>
            {/* Недоступные для редактирования поля (только placeholder) */}
            <div className="form-field readonly"><span className="placeholder">ФИО</span></div>
            <div className="form-field readonly"><span className="placeholder">Группа</span></div>
            <div className="form-field readonly"><span className="placeholder">Дата</span></div>
            <div className="form-field readonly"><span className="placeholder">Дисциплина</span></div>
            <button className="form-button">Отметиться</button>
          </div>
      </div>

      {/* Декоративная вертикальная панель слева */}
      <div className="decorative-bar">
        <div className="stripe thick"></div>
        <div className="stripe thin"></div>
      </div>

      {/* Кнопка "Посмотреть посещаемость" справа внизу */}
      <button className="attendance-button">
        Посмотреть посещаемость
      </button>

    </div>
  );
};

export default MainStudent;