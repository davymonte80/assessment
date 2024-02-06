import {
  Alive,
  CardContainer,
  Container,
  Dead,
  HeaderContainer,
  HeroBody,
  HeroFlex,
  HeroGrid,
  ImageContainer,
  Wrapper
} from "@/styles/serviceStyles";
import Image from "next/image";
import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";

import React, { useEffect, useState } from "react";

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
interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

const Hero: React.FC = () => {
  const [characters, setCharacters] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch character data
        const characterResponse = await fetch(
          "https://rickandmortyapi.com/api/character"
        );
        const characterData: { results: Post[] } =
          await characterResponse.json();

        // Set the characters in the state
        setCharacters(characterData.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    // Call the fetchData function
    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once, similar to componentDidMount
  return (
    <Container>
      <div className="w-full  ml-20px flex items-start justify-items-start text-black hover:underline">
        <Link href="/">
          <span className="ml-10 flex items-center gap-1">
            
            <IoMdArrowBack />
            Back
          </span>
        </Link>
      </div>

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
                    <span>{character.name}</span>
                    <HeaderContainer>
                      <p>
                        {/* <Alive /> <Dead />
                        {character.status} - {character.species} */}
                        <p>
                          {character.status === "Alive" ? <Alive /> : <Dead />}
                          &nbsp;
                          {character.status} - {character.species}
                        </p>
                      </p>

                      <br />
                      <h5>Last known location &#58;</h5>
                      <p>{character.location.name}</p>
                      <br />
                    </HeaderContainer>
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
