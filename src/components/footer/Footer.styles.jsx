import styled from 'styled-components'

export const FooterContainer = styled.footer`
    width: 100%;
    margin-top: 150px;
    /* margin-bottom: 10px; */
`

export const CreditWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: var(--clr-grey-2);
`

export const TwitterLink = styled.a`
    color: var(--twitter-link);
    transition: var(--transition);
    &:hover {
        color: var(--twitter-link-hover);
    }
`