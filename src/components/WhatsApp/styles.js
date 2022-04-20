import styled from 'styled-components'
import theme from '../../styles/theme'

export const IconWhatsapp = styled.div`
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    cursor: pointer;

    svg {
        font-size: 3rem;
        color: #26d366;
    }

    &:hover {
        opacity: 0.8;
    }
`