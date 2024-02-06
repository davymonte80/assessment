import { CardContainer, Container, HeroBody, ImageContainer, Wrapper } from "@/styles/serviceStyles";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";

interface UnsplashPhoto {
  id: string;
  urls: {
    regular: string;
  };
  alt_description: string;
}

const accessKey = "MYTdMtOyXJkb-dLnXm63ViakMhJQITm4cqzVy-_kqpg"; // Replace 'YOUR_ACCESS_KEY' with your actual Unsplash access key

const UnsplashPhotos: React.FC = () => {
  const [photos, setPhotos] = useState<UnsplashPhoto[]>([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/photos/random?count=10&client_id=${accessKey}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch photos");
        }

        const data: UnsplashPhoto[] = await response.json();
        setPhotos(data);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };

    fetchPhotos();
  }, []);

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
        {photos.map((photo) => (
          <CardContainer key={photo.id}>
            <ImageContainer>
              <img src={photo.urls.regular} alt={photo.alt_description} />
            </ImageContainer>
            <HeroBody>
              <p className="text-white">{photo.alt_description}</p>
            </HeroBody>
          </CardContainer>
        ))}
      </Wrapper>
    </Container>
  );
};

export default UnsplashPhotos;
