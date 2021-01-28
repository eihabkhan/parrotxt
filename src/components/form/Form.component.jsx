import React from 'react'
import {
    FormContainer,
    FormLabel,
    FormInput
} from './Form.styles'
import {Button} from '../custom-button/CustomButton.component'

export const Form = props => {
    const {count} = props
    return ( 
        <FormContainer onSubmit={props.onSubmit}>
            <FormLabel htmlFor="amount">Paragraphs: </FormLabel>
            <FormInput 
                type="number" 
                min="0" 
                placeholder="0" 
                id="amount" 
                value={count}
                onChange={props.onChange}
            />
            <Button type="submit">Generate</Button>
        </FormContainer>
     );
}
 