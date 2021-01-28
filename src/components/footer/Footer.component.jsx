import React from 'react'
import {
    FooterContainer,
    CreditWrapper,
    TwitterLink,
} from './Footer.styles'

const Footer = () => {
    return ( 
        <FooterContainer>
            <CreditWrapper>
                <div className="copyright">{"\u00a9"} 2021 Parrotxt.</div>
                <div className="quality">Made with <span role="img" aria-label="heart">💖</span> by  <TwitterLink href="https://twitter.com/eihab_khan" target="_blank" rel="noopener noreferrer" >Eihab Khan</TwitterLink></div>
            </CreditWrapper>
        </FooterContainer>
     );
}
 
export default Footer;