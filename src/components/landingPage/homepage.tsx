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
           It provides a simple interface built with Next.js and React.</HomePageText>
           </Wrapper>
      </Container>
    </Layout>
  );
};

export default Homepage;
