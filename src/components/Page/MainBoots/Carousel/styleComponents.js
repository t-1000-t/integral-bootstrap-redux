import styled from "styled-components";

export const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  transition: ${props => (props.sliding ? "none" : "transform 0.4s ease")};
  transform: ${props => {
    if (!props.sliding) return "translateX(calc(-100% - 0px))";
    if (props.dir === "PREV") return "translateX(calc(2 * (-100% - 0px)))";
    return "translateX(0%)";
  }};
`;


export const CarouselSlot = styled.div`
  flex: 0 0 100%;
  flex-basis: 100%;
  margin-right: 0px;
  order: ${props => props.order};
`;

export const SlideButton = styled.button`
  color: #ffffff;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 100;
  padding: 10px;
  background-color: #f66f3e;
  border: 1px solid white;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  margin-top: 20px;
  text-decoration: none;
  float: ${props => props.float};

  &:active {
    position: relative;
    top: 1px;
  }
  &:focus {
    outline: 0;
  }
`;
