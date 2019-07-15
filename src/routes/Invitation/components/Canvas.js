import React, { useRef, useLayoutEffect } from "react";
import { string } from "prop-types";
import BGImage from "../assets/rnc.png";

const Canvas = ({ name }) => {
  const canvas = useRef(null);

  useLayoutEffect(() => {
    const ctx = canvas.current.getContext("2d");

    const image = new Image();
    image.src = BGImage;
    const rectWidth = 529;
    image.onload = () => {
      ctx.drawImage(image, 0, 0);
      ctx.font = "bold 18px Georgia";
      ctx.fillStyle = "#6a3433";
      ctx.textAlign = "center";
      ctx.fillText(`Hi, ${name}`, rectWidth / 2, 135);
      ctx.textBaseline = "middle";
    };
  });

  return <canvas ref={canvas} width={529} height={529} />
};

Canvas.propTypes = {
  name: string
};

export default Canvas;
