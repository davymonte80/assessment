import { CardContainer, Container, HeroBody, HeroFlex, HeroGrid,HeaderContainer, ImageContainer, Wrapper } from '@/styles/LandingStyles/HeroSecton';
import Image from 'next/image';
import React,{useState,useEffect} from 'react';

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
  const [characters, setCharacters] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        );
        const data: { results: Post[] } = await response.json();

        // Set the characters in the state
        setCharacters(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once, similar to componentDidMount

  return (
    <Container>
      <Wrapper>
        {characters.length > 0 &&
          characters.map((character) => (
            <CardContainer key={character.id}>
              <ImageContainer>
                <Image
                  src={character.image}
                  alt="picture"
                  width={300}
                  height={100}
                  priority
                />
              </ImageContainer>
              <HeroBody>
                <HeroFlex>
                  <HeroGrid>
                    <p>{character.name}</p>
                    <span></span>
                    <HeaderContainer>
                      <span> {character.species}</span>
                      <br />
                      <p>Last known locatin:</p>

                    </HeaderContainer>
                    {/* Add other details as needed */}
                  </HeroGrid>
                </HeroFlex>
              </HeroBody>
            </CardContainer>
          ))}
      </Wrapper>
    </Container>
  );
};

export default Hero;
