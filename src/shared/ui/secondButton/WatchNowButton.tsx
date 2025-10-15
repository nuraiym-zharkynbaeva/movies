import styles from './styles.module.css'

type Props = {
  label?: string;
  size?: 'small' | 'large';
  onClick?: () => void;
  disabled?: boolean;
}

const WatchNowButton = ({
  label = "Watch Now",
  size,
  onClick,
  disabled = false
}: Props) => {
  return (
    <button 
      className={`${styles.btn} ${size === 'small' ? styles.small : size === 'large' ? styles.large :  ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  )
}

export default WatchNowButton
