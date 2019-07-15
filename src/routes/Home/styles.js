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
  font-size: 1.5em;
`;

export const CountdownContainer = css`
  position: absolute;
  width: 100%;
  bottom: 10%;
  display: block;
  float: left;
  z-index: 9999;
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
  font-size: 20px;
  margin: 0 0.8%;
  line-height: 15px;
  text-shadow: none;
  float: left;
  font-weight: 300;
  text-transform: capitalize;
  background: url(${heartImage}) no-repeat center center;
  background-size: 100% 100%;
`;

export const CountdownAmount = css`
  display: block;
  width: 100%;
  height: 105px;
  font-size: 40px;
  line-height: 90px;
  color: #ffffff;
  text-align: center;
`;
