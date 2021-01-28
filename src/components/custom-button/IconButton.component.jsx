import React from 'react'

import {
    CustomButtonContainer,
    CustomIconButtonContainer,
    TextContainer,
    IconButtonContent
} from './CustomButton.styles'

const IconButtonWithText = ({children, label}) => {
    return (
        <CustomIconButtonContainer>
            <IconButtonContent>
                <TextContainer>
                    {label}             
                </TextContainer>
                {children}    
            </IconButtonContent>            
        </CustomIconButtonContainer>
    )
}
export default IconButtonWithText