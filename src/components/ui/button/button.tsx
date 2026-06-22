import styles from './button.module.scss'

/**
 * Типизация пропсов компонента Button.
 * Позволяет настраивать кнопку снаружи.
 */
interface ButtonProps {
  // children — текст или элементы внутри кнопки (например, "Войти", "Сохранить")
  children: React.ReactNode
  // onClick — функция, которая вызывается при клике
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  // type — тип кнопки: "button" (обычная), "submit" (отправка формы), "reset" (сброс)
  type?: 'button' | 'submit' | 'reset'
  // disabled — заблокирована ли кнопка
  disabled?: boolean
  // className — дополнительные классы для кастомизации извне
  className?: string
}

/**
 * Переиспользуемый компонент кнопки.
 * Содержит три состояния: default, hover, pressed.
 * Можно вставлять в любую форму или на любую страницу.
 */
const Button = ({
  children,
  onClick,
  type = 'button',          // по умолчанию обычная кнопка (не отправляет форму)
  disabled = false,         // по умолчанию активна
  className = '',
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${className}`}  // объединяем класс модуля и внешний класс
      onClick={onClick}
      disabled={disabled}
    >
      {children}            {/* текст кнопки, переданный между <Button> и </Button> */}
    </button>
  )
}

export default Button