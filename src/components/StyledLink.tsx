import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.appColor};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.appColor};
    text-decoration: none;
  }
`
