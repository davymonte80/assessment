import { CardContainer, Container, HeroBody, HeroFlex, HeroGrid, ImageContainer, Wrapper } from '@/styles/LandingStyles/HeroSecton';
import Image from 'next/image';
import React from 'react';

interface Post {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

const Hero: React.FC = () => {
  const fetchData = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data: { results: Post[] } = await response.json();

      // Use the data directly
      renderCharacters(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const renderCharacters = (characters: Post[]) => {
    console.log("miujiza", characters)
    return (
      <Wrapper>
        <p>hello morty</p>
        {characters.map((character) => (

      <CardContainer key={character.id}>
          
            <ImageContainer>
              {/* Render your image here */}
              <Image  src={character.image}
                alt="picture"
                width={300}
                height={191}
                priority />
            </ImageContainer>
            <HeroBody>
              <HeroFlex>
                <HeroGrid>
                  
                  {/* Render other details here */}
                  <h2>{character.name}</h2>
                  <p>{character.species}</p>
                  {/* Add other details as needed */}
                </HeroGrid>
              </HeroFlex>
            </HeroBody>
          
      </CardContainer>
        ))}
       </Wrapper>
    );
  };

  // Call the fetchData function
  fetchData();

  return (
    <Container>
      
        {/* Render the characters here */}
        {renderCharacters([])}
      
    </Container>
  );
};

export default Hero;
