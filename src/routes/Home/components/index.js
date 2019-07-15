import React, { memo, useState, useEffect } from "react";
import {
  MainSectionContainer,
  MainSectionWrapper,
  MainSectionOverlay,
  MainSectionImage,
  MainSectionText,
  CountdownContainer,
  CountdownWrapper,
  CountdownHeart,
  CountdownAmount
} from "../styles";
import MainImage from "../assets/home1.jpg";

const Home = () => {
  const intervalTime = 1000;
  const [timeLeft, setTimeLeft] = useState(() => {
    return new Date("Sep 29, 2019 12:00:00").getTime() - new Date().getTime();
  });
  const [countdown, setCountDown] = useState({
    months: "0",
    days: "0",
    hours: "0",
    mins: "0",
    secs: "0"
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(current => {
        let seconds = current;
        const h = 60 * 60 * 1000,
          d = h * 24,
          mth = d * 30;
        let months = Math.floor(seconds / mth);
        let days = Math.floor(
          (seconds % mth) / d
        );
        let hours = Math.floor(
          (seconds % d) / h
        );
        let mins = Math.floor((seconds % h) / (1000 * 60));
        let secs = Math.floor((seconds % (1000 * 60)) / 1000);

        setCountDown({ months, days, hours, mins, secs });

        if (current <= 0) {
          clearInterval(interval);

          return 0;
        }

        return current - intervalTime;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [intervalTime]);

  return (
    <>
      <section className={MainSectionContainer}>
        <div className={MainSectionWrapper}>
          <div className={MainSectionOverlay} />
          <img src={MainImage} className={MainSectionImage} alt="main" />
          <div className={MainSectionText}>
            <h2>Robin & Clarissa</h2>
            <p>are getting married on 29 September 2019, Jakarta</p>
          </div>
          <div className={CountdownContainer}>
            <div className={CountdownWrapper}>
              <span className={CountdownHeart}>
                <span className={CountdownAmount}>{countdown.months}</span>
                <br />
                Months
              </span>
              <span className={CountdownHeart}>
                <span className={CountdownAmount}>{countdown.days}</span>
                <br />
                Days
              </span>
              <span className={CountdownHeart}>
                <span className={CountdownAmount}>{countdown.hours}</span>
                <br />
                Hours
              </span>
              <span className={CountdownHeart}>
                <span className={CountdownAmount}>{countdown.mins}</span>
                <br />
                Minutes
              </span>
              <span className={CountdownHeart}>
                <span className={CountdownAmount}>{countdown.secs}</span>
                <br />
                Seconds
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(Home);
