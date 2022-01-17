import React, { useEffect, useRef, useState } from "react";
import styles from "./Carousel.module.css";
import DATA from "./bannerData";
import CarouselItem from "./CarouselItem/CarouselItem";
import ArrowIcon from "../ArrowIcon/ArrowIcon";

function Carousel() {
  const [count, setCount] = useState(0);
  const [isTranstioning, setIsTranstioning] = useState(false);
  const [fakeCount, setFakeCount] = useState(false);

  const [active, setActive] = useState(false);

  // ref
  const slideContainer = useRef();

  // DATA
  const bannerList = DATA;
  const slideLength = bannerList.length;
  const firstBanner = bannerList[0];
  const lastBanner = bannerList[bannerList.length - 1];

  const windowWidth = window.innerWidth || document.body.clientWidth;
  const rightMargin = 24;
  const bannerInnerWidth = 1060;
  const bannerWidth = bannerInnerWidth + rightMargin;

  const width = (slideLength + 2) * bannerWidth;
  const leftMargin = (windowWidth - bannerWidth) / 2;
  const offset = bannerWidth * (count + 1) - leftMargin;

  const nextArrow = () => {
    // transtioning이 지속되고 있다면
    if (!isTranstioning) {
      setCount((old) => old + 1);
      setIsTranstioning(true);
    }

    setFakeCount(false);
  };

  const prevArrow = () => {
    if (!isTranstioning) {
      setCount((old) => old + -1);
      setIsTranstioning(true);
    }

    setFakeCount(false);
  };

  useEffect(() => {
    const handler = () => {
      // transitioning
      setIsTranstioning(false);

      if (count >= slideLength) {
        setFakeCount(true);
        setCount(0);
      }

      if (count <= -1) {
        setFakeCount(true);
        setCount(slideLength - 1);
      }
    };
    slideContainer.current.addEventListener("transitionend", handler);

    return () => {
      slideContainer.current.removeEventListener("transitionend", handler);
    };
  }, [count]);

  const mouseDownHandler = (downEvent) => {
    downEvent.preventDefault();
    const startX = downEvent.clientX;

    const mouseMoveHandler = (event) => {
      const dx = startX - event.clientX;
      slideContainer.current.style.transform = `translateX(${-(
        offset + dx
      )}px)`;
    };

    const mouseUpHandler = (event) => {
      const dx = startX - event.clientX;
      if (Math.abs(dx) > 300) {
        if (dx > 0) {
          nextArrow();
        } else {
          prevArrow();
        }
      } else {
        slideContainer.current.style.transform = `translateX(${-offset}px)`;
      }

      slideContainer.current.removeEventListener("mousemove", mouseMoveHandler);
      slideContainer.current.removeEventListener("mouseup", mouseUpHandler);
    };

    slideContainer.current.addEventListener("mousemove", mouseMoveHandler);
    slideContainer.current.addEventListener("mouseup", mouseUpHandler);
  };

  return (
    <section className={styles.main}>
      <div className={styles.bannerWarp}>
        <div className={`${styles.slickSlider} ${styles.initialized}`}>
          <div className={styles.slickList}>
            <div
              className={styles.slickTrack}
              style={{
                width: `${width}px`,
                transform: `translateX(${-offset}px)`,
                transition: `${
                  fakeCount ? "none" : "transform 350ms ease-in-out"
                }`,
              }}
              ref={slideContainer}
              onMouseDown={mouseDownHandler}
            >
              <div className={styles.slickSlide}>
                <CarouselItem info={lastBanner} key="lastCopy" />
              </div>
              {bannerList.map((info) => (
                <div className={styles.slickSlide}>
                  <CarouselItem info={info} key={info.id} />
                </div>
              ))}
              <div className={styles.slickSlide}>
                <CarouselItem info={firstBanner} key="firstCopy" />
              </div>
            </div>
          </div>
        </div>

        <ArrowIcon direction="next" handleClick={nextArrow} />
        <ArrowIcon direction="prev" handleClick={prevArrow} />
      </div>
    </section>
  );
}

export default Carousel;
