import { ButtonContainer } from './styled'

type Props = {
    type: "button" | "submit" | "reset" | undefined
    label: string
    onClick?: () => void
    disabled?: boolean
}

const Button = ({ type, label, onClick, disabled }: Props) => {
    return (
        <ButtonContainer
            type={type}
            disabled={disabled}
            onClick={onClick}
        >
            {label}
        </ButtonContainer>
    )
}

export default Button