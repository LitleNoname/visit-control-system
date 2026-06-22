// Импорт стилей как объекта (CSS-модуль)
import styles from './input.module.scss'

/**
 * Типизация пропсов компонента.
 * Описывает, какие параметры можно передать в Input при вызове.
 */
interface InputProps {
  // label — текст надписи над полем (например, "Логин" или "Пароль")
  label: string
  // type — тип поля: "text" для логина, "password" для пароля
  type: 'text' | 'password'
  // value — текущее значение (то, что ввёл пользователь)
  value: string
  // onChange — функция, которая вызывается при каждом изменении текста
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  // placeholder — необязательная подсказка внутри поля
  placeholder?: string
  // name — необязательный атрибут name для формы
  name?: string
}

/**
 * Переиспользуемый компонент поля ввода.
 * Содержит надпись (label) и само поле (input).
 * Используется на странице логина, а позже — в любых формах.
 */
const Input = ({
  label,
  type,
  value,
  onChange,
  placeholder = '',
  name = '',
}: InputProps) => {
  return (
    // Контейнер группы (надпись + поле)
    <div className={styles.inputGroup}>
      {/* Надпись над полем */}
      <label className={styles.inputLabel}>{label}</label>

      {/* Само поле ввода */}
      <input
        type={type}                 // "text" или "password"
        className={styles.inputField}
        value={value}               // текущий текст внутри поля
        onChange={onChange}         // обработчик ввода
        placeholder={placeholder}   // серая подсказка
        name={name}                 // имя для отправки формы
      />
    </div>
  )
}

export default Input