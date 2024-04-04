import styles from './Button.module.scss'

export default function Button({
  children,
  color,
  loading,
  loadingColor,
  circle,
  ...restProps
}: {
  children: React.ReactNode
  color?: string
  loading?: boolean
  loadingColor?: string
  circle?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`${styles.btn} 
      ${color ? styles[`btn-${color}`] : ''}
      ${circle ? styles.circle : ''} 
      `}
      {...restProps}>
      {loading ? <p>loading</p> : children}
    </button>
  )
}

//상호작용이 들어가는 부분은  client 컴포넌트로!
