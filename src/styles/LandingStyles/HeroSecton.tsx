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
  width: 80%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow-x: auto;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
  gap: 38px;
  @media screen and (max-width: 1000px) {
    width: 95%;
    gap: 20px;
    flex-direction:column;
  }
`;

export const CardContainer = styled.div`
  min-width: 383px;
  height: 407px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  border-radius: 20px;
  background: rgb(60, 62, 68);
  flex-basis: calc(33% - 20px);
  gap: 20px;
  @media screen and (max-width: 768px) {
    min-width: 300px;
    height: 457px;
  }
  @media screen and (max-width: 300px) {
    min-width: 280px;
  }
`;
export const ImageContainer = styled.div`
  width: 100%;
  min-height: 191px;
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
  padding: 15px 10px 38px 30px;
  height: 226px;
  gap: 20px;
  background:black;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    padding: 15px 10px 20px 10px;
  }
`;
export const HeroFlex = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  gap: 24px;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;
export const HeroGrid = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 5px;
  span {
    max-width: 104px;
    color: #1ea9a4;
        font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 26.3px;
    letter-spacing: -0.8px;
  }
  p {
    max-width: 104px;
    color: #fff;
    font-family: Inter
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 26.3px;
    letter-spacing: -0.8px;
  }
`;
export const EventHeaderContainer = styled.div`
  span {
    width: max-content;
    color: #fff;
    font-family:inter
    font-size: 16px;
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

