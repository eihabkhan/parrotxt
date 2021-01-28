import styled  from 'styled-components'

export const CustomButtonContainer = styled.button`
    text-transform: uppercase;
    background: var(--clr-primary-1);
    color: var(--clr-white);
    padding: 0.375rem 0.75rem;
    letter-spacing: 1px;
    display: inline-block;
    transition: var(--transition);
    font-size: 0.875rem;
    border: 2px solid var(--clr-primary-1);
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: var(--radius);

    &:hover {
        background: var(--clr-primary-2);
        border-color: var(--clr-primary-2);
    }
`

export const CustomIconButtonContainer = styled(CustomButtonContainer)`
    position: absolute;
    font-size: 12px;
    text-align: center;
    top: 20px;
    right: 20px;
    color: var(--clr-grey-4);
`

export const TextContainer = styled.div`
    margin-right: 8px;
`

export const IconButtonContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`