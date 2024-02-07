import React from "react";
import Layout from "./layout";
import { Container, HomePageText, Wrapper } from "@/styles/serviceStyles";

const Homepage = () => {
  return (
    <Layout>
      <Container>
        <Wrapper>
        <HomePageText>This application demonstrates how to use the 
           Unsplash and Rick & Morty APIs to fetch and display photos. <br/>
           It provides a simple interface built with Typescript,   Next and React.
           The Unsplash Photos API provides a vast collection of high-quality, freely usable images.<br/>
            Developers can seamlessly integrate these photos into their applications, enhancing the visual <br/>
            appeal and user experience.

           The Ricky & Morty API allows developers to access character information from the popular animated series.<br/>
          It&#39;s a valuable resource for creating fun applications, games, or simply exploring the vast universe of the show.<br/>

          All my code is version-controlled using Git. Feel free to explore my repositories.<br/>
</HomePageText>
           </Wrapper>
      </Container>
    </Layout>
  );
};

export default Homepage;
