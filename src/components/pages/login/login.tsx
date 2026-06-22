import { useState } from 'react'
// Подключаем SCSS-модуль (импорт как объект со всеми классами)
import styles from './login.module.scss'
import Input from '../../ui/input/input.tsx'
import Button from '../../ui/button/button'
import { useNavigate } from 'react-router-dom'



export const Login = () => {
  const [] = useState(0)
  const [login, setLogin] = useState('')       // текст в поле "Логин"
  const [password, setPassword] = useState('') // текст в поле "Пароль"
  const navigate = useNavigate()

  // Функция входа с захардкоженными данными
  const handleLogin = () => {
    // Проверка: логин "1" и пароль "1" → студент
    if (login === '1' && password === '1') {
      localStorage.setItem('token', 'student-token')      // сохраняем признак авторизации
      localStorage.setItem('role', 'student')             // сохраняем роль
      navigate('/student')                                // перенаправляем на страницу студента
      return                                              // выходим из функции
    }

    // Проверка: логин "2" и пароль "2" → лектор
    if (login === '2' && password === '2') {
      localStorage.setItem('token', 'teacher-token')
      localStorage.setItem('role', 'teacher')
      navigate('/teacher')
      return
    }

    // Если логин/пароль не совпали — показываем ошибку
    alert('Неверный логин или пароль')
  }


  
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
      <div className={styles.loginForm}>
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
        <Button onClick={handleLogin}>
          Войти
        </Button>

      </div>
    </div>
  )
}

export default Login