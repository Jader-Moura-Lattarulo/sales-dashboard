export type InputProps = React.InputHTMLAttributes<HTMLInputElement>
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export type MessageProps = {
    message: string
    type: 'success' | 'error'
}

export interface FormComponentProps {
    inputs: InputProps[]
    buttons: ButtonProps[]
    message?: MessageProps
}
