import styled from 'styled-components'

export const FormContainer = styled.form`
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    margin-top: 2rem;
    margin-bottom: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FormLabel = styled.label`
    font-size: 1.25rem;
`

export const FormInput = styled.input`
    padding: 0.25rem 0.5rem;
    width: 4rem;
    border-radius: var(--radius);
    border: none;
    margin: 0 0.5rem;
    font-size: 1.25rem;
`