import React from 'react'

import {BadgeContainer, PHImage} from './PHBadge.styles'

export const PHBadge = () => {
    return ( 
        <BadgeContainer>
            <a href= "https://www.producthunt.com/posts/parrotxt?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-parrotxt" target="_blank" rel="noopener noreferrer">
                <PHImage src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=282870&theme=dark" alt='Parrotxt - Generate REAL text instead of the boring "lorem ipsum" | Product Hunt' />
            </a>
        </BadgeContainer>        
     );
}
 