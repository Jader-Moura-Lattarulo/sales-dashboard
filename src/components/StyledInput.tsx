import styled from "styled-components"
import { InputProps } from "@/types"
import { pxToRem } from "@/utils/pxToRem"

export const StyledInput = styled.input<InputProps>`
    background-color: ${(props) => props.theme.textInput.active};
    color: ${(props) => props.theme.textInput.activeColor};
    border: ${pxToRem(1)} solid ${(props) => props.theme.textInput.borderColor};    
    border-radius: ${pxToRem(8)};
    box-sizing: border-box;
    padding: ${pxToRem(8)} ${pxToRem(16)};
    font-size: ${pxToRem(14)};
    font-weight: 500;
    height: ${pxToRem(40)};
    transition: all 0.3s ease;
    width: 100%;
    cursor: pointer;

    &:disabled {
        background-color: ${(props) => props.theme.textInput.disabled};
        border: ${pxToRem(1)} solid ${(props) => props.theme.textInput.disabledBorderColor};
        color: ${(props) => props.theme.textInput.disabledColor};
        cursor: not-allowed;
    }

    &::placeholder {
        color: ${(props) => props.theme.textInput.placeholderColor};
    }
`