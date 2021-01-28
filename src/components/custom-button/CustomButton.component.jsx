import React from 'react'
import {
    CustomButtonContainer,
    CustomIconButtonContainer,
    TextContainer,
    IconButtonContent
} from './CustomButton.styles'

export const Button = ({children, ...props}) => {
    return ( 
        <CustomButtonContainer>
            {children}
        </CustomButtonContainer>
     );
}

export const IconButtonWithText = ({children, label, ...props}) => {
    return (
        <CustomIconButtonContainer {...props}>
            <IconButtonContent>
                <TextContainer>
                    {label}             
                </TextContainer>
                {children}    
            </IconButtonContent>            
        </CustomIconButtonContainer>
    )
}
 
