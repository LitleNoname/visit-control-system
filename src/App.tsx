import { useState } from 'react'
import './App.css'

function App() {
  const [] = useState(0)

  return (
    <div className="page">

      {/* Левая декоративная панель */}
      <div className="decor-panel left-panel">
        <div className="stripe thick left"></div>
        <div className="stripe thin left"></div>
        <div className="images-container">
          <img src="/assets/decor1.png" alt="decor" />
          <img src="/assets/decor2.png" alt="decor" />
          <img src="/assets/decor3.png" alt="decor" />
        </div>
      </div>

      {/* Правая декоративная панель (зеркальная) */}
      <div className="decor-panel right-panel">
        <div className="stripe thin right"></div>
        <div className="stripe thick right"></div>
        <div className="images-container">
          <img src="/assets/decor1.png" alt="decor" />
          <img src="/assets/decor2.png" alt="decor" />
          <img src="/assets/decor3.png" alt="decor" />
        </div>
      </div>

      {/* Логотип */}
      <img
        src="/assets/logo.png"
        alt="Логотип"
        className="logo"
      />

      {/* Заголовок — переносим слово "посещения" на новую строку */}
      <div className="title-box">
        <h1 className="main-title">Контроль<br/>посещения</h1>
      </div>

      {/* Форма авторизации */}
      <div className="login-form">
        {/* Подзаголовок — переносим после слова "отметки" */}
        <p className="form-subtitle">
          Войдите в систему для отметки<br/>или просмотра табелей
        </p>

        {/* Поле ввода логина */}
        <div className="input-group">
          <label className="input-label">Логин</label>
          <input type="text" className="input-field" />
        </div>

        {/* Поле ввода пароля */}
        <div className="input-group">
          <label className="input-label">Пароль</label>
          <input type="password" className="input-field" />
        </div>

        {/* Кнопка "Войти" */}
        <button className="login-button">Войти</button>
      </div>
    </div>
  )
}

export default App