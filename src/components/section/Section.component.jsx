import React from 'react'
import {SectionContainer} from './Section.styles'

export const Section = ({children}) => {
    return ( 
        <SectionContainer>
            {children}
        </SectionContainer>
     );
}
