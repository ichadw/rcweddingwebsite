import React, { memo } from "react";
import { PreloaderContainer, PreloaderInitial } from "./styles";

const Loader = () => {
  return (
    <PreloaderContainer>
      <div className="status">
        <div className="bowlG">
          <div className="bowl_ringG">
            <div className="ball_holderG">
              <div className="ballG">
                <div className="heart" />
              </div>
            </div>
            <span className={PreloaderInitial}>RC</span>
          </div>
        </div>
      </div>
    </PreloaderContainer>
  );
};

export default memo(Loader);
