import styled from "@emotion/styled";
import { css } from "emotion";

export const PreloaderContainer = styled.div`
  overflow: hidden;
  overflow-x: hidden;
  overflow-y: hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #db4766;
  z-index: 9999999999;

  .status {
    z-index: 999997;
    position: absolute;
    top: 30%;
    width: 280px;
    height: 280px;
    background-repeat: no-repeat;
    background-position: center;
    padding-left: calc((100% - 280px) / 2);

    .bowlG {
      z-index: 999998;
      position: relative;
      width: 100%;
      height: 100%;

      .bowl_ringG {
        position: absolute;
        width: 240px;
        height: 240px;
        border: 20px solid #fefefe;
        -moz-border-radius: 50%;
        -webkit-border-radius: 50%;
        -ms-border-radius: 50%;
        -o-border-radius: 50%;
        border-radius: 50%;
      }
    }

    .ball_holderG {
      position: absolute;
      width: 50px;
      height: 240px;
      left: 95px;
      top: 0;
      -moz-animation-name: ball_moveG;
      -moz-animation-duration: 2s;
      -moz-animation-iteration-count: infinite;
      -moz-animation-timing-function: linear;
      -webkit-animation-name: ball_moveG;
      -webkit-animation-duration: 2s;
      -webkit-animation-iteration-count: infinite;
      -webkit-animation-timing-function: linear;
      -ms-animation-name: ball_moveG;
      -ms-animation-duration: 2s;
      -ms-animation-iteration-count: infinite;
      -ms-animation-timing-function: linear;
      -o-animation-name: ball_moveG;
      -o-animation-duration: 2s;
      -o-animation-iteration-count: infinite;
      -o-animation-timing-function: linear;
      animation-name: ball_moveG;
      animation-duration: 2s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;

      .ballG {
        position: absolute;
        left: 0;
        top: -47px;
        width: 75px;
        height: 75px;

        -moz-border-radius: 67px;
        -webkit-border-radius: 67px;
        -ms-border-radius: 67px;
        -o-border-radius: 67px;
        border-radius: 67px;
      }
    }
  }

  .heart {
    position: relative;
    width: 100px;
    height: 90px;

    &:before,
    &:after {
      position: absolute;
      content: "";
      left: 50px;
      top: 0;
      width: 50px;
      height: 80px;
      background: #fe859f;
      -moz-border-radius: 50px 50px 0 0;
      border-radius: 50px 50px 0 0;
      -webkit-transform: rotate(-45deg);
      -moz-transform: rotate(-45deg);
      -ms-transform: rotate(-45deg);
      -o-transform: rotate(-45deg);
      transform: rotate(-45deg);
      -webkit-transform-origin: 0 100%;
      -moz-transform-origin: 0 100%;
      -ms-transform-origin: 0 100%;
      -o-transform-origin: 0 100%;
      transform-origin: 0 100%;
    }

    &:after {
      left: 0;
      -webkit-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      -o-transform: rotate(45deg);
      transform: rotate(45deg);
      -webkit-transform-origin: 100% 100%;
      -moz-transform-origin: 100% 100%;
      -ms-transform-origin: 100% 100%;
      -o-transform-origin: 100% 100%;
      transform-origin: 100% 100%;
    }
  }

  @-moz-keyframes ball_moveG {
    0% {
      -moz-transform: rotate(0deg);
    }
    100% {
      -moz-transform: rotate(360deg);
    }
  }

  @-webkit-keyframes ball_moveG {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @-ms-keyframes ball_moveG {
    0% {
      -ms-transform: rotate(0deg);
    }
    100% {
      -ms-transform: rotate(360deg);
    }
  }

  @-o-keyframes ball_moveG {
    0% {
      -o-transform: rotate(0deg);
    }
    100% {
      -o-transform: rotate(360deg);
    }
  }

  @keyframes ball_moveG {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const PreloaderInitial = css`
  font-family: "Great Vibes", cursive;
  color: #fff;
  display: block;
  font-size: 6rem;
  text-align: center;
  line-height: 260px;
  margin-left: -10px;
`;
