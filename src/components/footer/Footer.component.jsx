import React from 'react'
import GitHubButton from 'react-github-btn'

import {
    FooterContainer,
    CreditWrapper,
    TwitterLink,
} from './Footer.styles'

const QualityBadge = () => {

    return ( 
        <div className="quality" style={{marginTop: "10px"}}>Made with <span role="img" aria-label="heart">💖</span> by  <TwitterLink href="https://twitter.com/eihab_khan" target="_blank" rel="noopener noreferrer" >Eihab Khan</TwitterLink></div>
     );
}

const Footer = () => {
    return ( 
        <FooterContainer>
            <CreditWrapper>
                <div className="copyright">{"\u00a9"} 2021 Parrotxt.</div>
                <div>                
                    <GitHubButton href="https://github.com/eihabkhan" aria-label="Follow @eihabkhan on GitHub" data-size="large">Follow @eihabkhan</GitHubButton>
                </div>                                
            </CreditWrapper>
            <QualityBadge />
        </FooterContainer>
     );
}
 

export default Footer