import { CardContainer, Container, HeroBody, HeroFlex, HeroGrid, ImageContainer, Wrapper } from '@/styles/LandingStyles/HeroSecton'
import React from 'react'

const Hero = () => {
  return (
    <Container>
      <Wrapper> 
        <CardContainer>
          <ImageContainer>
          </ImageContainer>
            <HeroBody>
            {/* heroflex */}
            {/* herogrid */}
            <HeroFlex>
              <HeroGrid>

              </HeroGrid>
            </HeroFlex>
            </HeroBody>
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Hero