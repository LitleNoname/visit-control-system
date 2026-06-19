import { useState } from 'react'
// Подключаем SCSS-модуль (импорт как объект со всеми классами)
import styles from './login.module.scss'

export const Login = () => {
  const [] = useState(0)

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

        {/* Поле ввода логина */}
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Логин</label>
          <input type="text" className={styles.inputField} />
        </div>

        {/* Поле ввода пароля */}
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Пароль</label>
          <input type="password" className={styles.inputField} />
        </div>

        {/* Кнопка "Войти" */}
        <button className={styles.loginButton}>Войти</button>
      </div>
    </div>
  )
}

export default Login