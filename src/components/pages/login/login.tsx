import { useState } from 'react'
// Подключаем SCSS-модуль (импорт как объект со всеми классами)
import styles from './login.module.scss'
import Input from '../../ui/input/input.tsx'
import Button from '../../ui/button/button'
import { useNavigate } from 'react-router-dom'
import { authenticateUser, generateToken } from '../../../services/authService.ts';
import { setAuth } from '../../../utils/auth.ts';



export const Login = () => {
  const [login, setLogin] = useState('')       // текст в поле "Логин"
  const [password, setPassword] = useState('') // текст в поле "Пароль"
  const navigate = useNavigate()

  // Функция входа с захардкоженными данными
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // чтобы форма не перезагружала страницу
  
    try {
      const user = await authenticateUser(login, password);
      if (!user) {
        alert('Неверный логин или пароль');
        return;
      }
  
      const token = generateToken();
      setAuth(user, token);
  
      navigate(user.role === 'student' ? '/student' : '/teacher');
    } catch {
      alert('Не удалось подключиться к серверу. Запустите npm run dev');
    }
  };


  
  return (
    // Главный контейнер страницы
    <div className={styles.page}>

      {/* ----- ЛЕВАЯ ДЕКОРАТИВНАЯ ПАНЕЛЬ ----- */}
      <div className={`${styles.decorPanel} ${styles.leftPanel}`}>
        {/* Полосы */}
        <div className={`${styles.stripe} ${styles.thick} ${styles.left}`}></div>
        <div className={`${styles.stripe} ${styles.thin} ${styles.left}`}></div>

        {/* Три декоративных изображения */}
        <div className={styles.imagesContainer}>
          <img src="/assets/decor1.png" alt="decor" />
          <img src="/assets/decor2.png" alt="decor" />
          <img src="/assets/decor3.png" alt="decor" />
        </div>
      </div>

      {/* ----- ПРАВАЯ ДЕКОРАТИВНАЯ ПАНЕЛЬ (зеркальная) ----- */}
      <div className={`${styles.decorPanel} ${styles.rightPanel}`}>
        {/* Полосы в зеркальном порядке */}
        <div className={`${styles.stripe} ${styles.thin} ${styles.right}`}></div>
        <div className={`${styles.stripe} ${styles.thick} ${styles.right}`}></div>

        <div className={styles.imagesContainer}>
          <img src="/assets/decor1.png" alt="decor" />
          <img src="/assets/decor2.png" alt="decor" />
          <img src="/assets/decor3.png" alt="decor" />
        </div>
      </div>

      {/* ----- ЛОГОТИП ----- */}
      <img
        src="/assets/logo.png"
        alt="Логотип"
        className={styles.logo}
      />

      {/* ----- ЗАГОЛОВОК С ПЕРЕНОСОМ ----- */}
      <div className={styles.titleBox}>
        <h1 className={styles.mainTitle}>
          Контроль<br/>посещения
        </h1>
      </div>

      {/* ----- ФОРМА АВТОРИЗАЦИИ ----- */}
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        {/* Подзаголовок с переносом */}
        <p className={styles.formSubtitle}>
          Войдите в систему для отметки<br/>или просмотра табелей
        </p>

        {/* ПОЛЕ ЛОГИНА — теперь компонент Input */}
        <Input
          label="Логин"
          type="text"
          value={login}
          onChange={(event) => setLogin(event.target.value)}
          placeholder="Введите логин"
          name="login"
        />

        {/* ПОЛЕ ПАРОЛЯ — теперь компонент Input */}
        <Input
          label="Пароль"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Введите пароль"
          name="password"
        />

        {/* Кнопка "Войти" — теперь компонент Button */}
        <Button type="submit">Войти</Button>

      </form>
    </div>
  )
}

export default Login