import { css } from "emotion";
import heartImage from "./assets/time_hrt.png";

export const MainSectionContainer = css``;

export const MainSectionWrapper = css`
  position: relative;
  overflow: hidden;
`;

export const MainSectionOverlay = css`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const MainSectionImage = css`
  width: 100%;
`;

export const MainSectionText = css`
  position: absolute;
  top: 20px;
  text-align: center;
  display: block;
  color: #fff;
  font-weight: 600;
  width: 100%;
  font-size: 1.5rem;
  font-family: "Great Vibes", cursive;
  @media only screen and (max-width: 1024px) {
    font-size: 1rem;
  }
`;

export const CountdownContainer = css`
  position: absolute;
  width: 100%;
  top: 25%;
  display: block;
  float: left;
  z-index: 9999;
  @media only screen and (max-width: 1024px) {
    top: 30%;
  }
`;

export const CountdownWrapper = css`
  bottom: 30px;
  left: 50%;
  margin: 0 auto;
  width: 50%;
  z-index: 100;
  color: #fff;
  text-align: center;
`;

export const CountdownHeart = css`
  display: block;
  width: 18.4%;
  height: 105px;
  font-size: 1rem;
  margin: 0 0.8%;
  line-height: 15px;
  text-shadow: none;
  float: left;
  font-weight: 600;
  text-transform: capitalize;
  background: url(${heartImage}) no-repeat center center;
  background-size: 80% 90%;
  @media only screen and (max-width: 1024px) {
    height: 75px;
    background-size: 70% 50%;
  }
`;

export const CountdownAmount = css`
  display: block;
  width: 100%;
  height: 105px;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 90px;
  color: #ffffff;
  text-align: center;
  @media only screen and (max-width: 1024px) {
    font-size: 1rem;
    line-height: 70px;
    height: 70px;
  }
`;
