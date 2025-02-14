import styled from "styled-components";
import { StyledButton, StyledInput } from "@/components";
import { FormComponentProps } from "@/types";
import { pxToRem } from "@/utils/pxToRem";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    row-gap: ${pxToRem(16)};
`

function FormComponent(props: FormComponentProps) {
    const { inputs, buttons, message } = props;    
    
    return (
        <StyledForm>
            {inputs.map((inputProps, index) => (
                <StyledInput key={index} {...inputProps}/>
            ))}
            {buttons.map((buttonProps, index) => (
                <StyledButton key={index} {...buttonProps}/>
            ))}
            {message && (
                <div style={{ color: message.type === 'success' ? 'green' : 'red' }}>{message.message}</div>
            )}
        </StyledForm>
    );
}

export default FormComponent