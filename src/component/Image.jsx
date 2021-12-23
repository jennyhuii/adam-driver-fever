import React from 'react';
import styled from 'styled-components'

const StyledImage = styled.img`
    height: 30rem;
`

const importAll = (r) => {
    return r.keys().map(r);
  }
  
const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

const Image = () => {
    const randomNumber = Math.floor(Math.random() * images.length);

    return (
        <StyledImage src={images[randomNumber]} />
    )
}

export default Image;