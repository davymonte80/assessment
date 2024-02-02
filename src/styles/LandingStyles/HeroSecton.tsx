import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 5% 0;
  gap: 38px;
`;
export const Wrapper = styled.div`
  width: 85%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 25px;
  @media screen and (max-width: 1000px) {
    width: 100%;
    gap: 20px;
    flex-direction: column;
  }
`;

export const CardContainer = styled.div`
  min-width: 350px;
  height: 407px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  border-radius: 20px;
  background: rgb(60, 62, 68);
  /* flex-basis: calc(33% - 20px); */
  gap: 20px;
  @media screen and (max-width: 768px) {
    min-width: 350px;
    height: 400px;
  }
  @media screen and (max-width: 300px) {
    min-width: 280px;
  }
`;
export const ImageContainer = styled.div`
  width: 100%;
  min-height: 100px;
  overflow: hidden;
  mix-blend-mode: normal;
  img {
    transition: transform 0.3s ease-in-out;
    border-radius: 20px 20px 0px 0px;
    object-position: center;
    width: 100%;
    height: auto;
    position: relative;
  }
`;
export const HeroBody = styled.div`
  width: 100%;
  padding: 10px;
  height: 226px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  /* @media screen and (max-width: 768px) {
    padding: 15px 10px 20px 10px;
  } */
`;
export const HeroFlex = styled.div`
  min-width: 300px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  gap: 24px;
  @media screen and (max-width: 768px) {
    width: 90%;
    min-width: 270px;
  }
`;
export const HeroGrid = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 5px;
  span {
    width: 100%;
    color: #1ea9a4;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 26.3px;
    letter-spacing: -0.8px;
  }
  p {
    width: max-content;
    color: rgb(158, 158, 158);
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 26.3px;
    letter-spacing: -0.8px;
  }
`;
export const HeaderContainer = styled.div`
  span {
    width: max-content;
    color: #fff;
    font-family: inter;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 26.3px;
    letter-spacing: -0.8px;
  }

  p {
    font-family: Inter;
  }
`;
export const EventContent = styled.span`
  display: flex;
  width: 74%;
  color: #fff;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26.8px;
  letter-spacing: -0.8px;
  @media screen and (max-width: 768px) {
    width: 280px;
  }
`;

export const Alive = styled.div`
  width: 10px;
  height: 10px;
  background-color: rgb(85, 204, 68);
  border-radius: 50%;
  display: inline-block;
`;

export const Dead = styled.div`
  width: 10px;
  height: 10px;
  background-color: rgb(214, 61, 46);
  border-radius: 50%;
  display: inline-block;
`;
