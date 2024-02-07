import styles from '@/styles/button.module.css'

type Props = {
    type: "submit" | "reset" | "button" | undefined
    text: string;
    theme: "default" | "danger";
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    loading?: boolean;
}

const Button = ({type, text, theme, onClick, loading}: Props) => {
    return <button type={type} 
        id={styles.button}
        disabled={loading} 
        onClick={onClick}
        style={{
            border: theme === "default" ? '1px solid #85858555' : '1px solid tomato',
            color: theme === "default" ? '#858585' : 'tomato'
        }}>
            {loading ? 'Loading ...' : text}
        </button>
}

export default Button;