import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./Carousel.module.css";
import DATA from "./bannerData";
import CarouselItem from "./CarouselItem/CarouselItem";

function Carousel() {
  const [count, setCount] = useState(0);
  const [isTranstioning, setIsTranstioning] = useState(false);
  // ref
  const slideContainer = useRef();

  // Data
  const bannerList = DATA;
  const slideLength = bannerList.length;

  const rightMargin = 24;
  const bannerInnerWidth = 1060;
  const bannerWidth = bannerInnerWidth + rightMargin;

  const nextArrow = () => {
    if (!isTranstioning) {
      setCount((old) => old + 1);
      setIsTranstioning(true);
    }
  };

  const prevArrow = () => {};

  useEffect(() => {
    const handler = () => {
      setIsTranstioning(false);

      if (count >= slideLength) {
        slideContainer.current.style.transition = "none";
        setCount(0);
      }
    };

    slideContainer.current.addEventListener("transitionend", handler);
    slideContainer.current.style.transition = `transform 500ms ease 0s`;

    return () => {
      slideContainer.current.removeEventListener("transitionend", handler);
    };
  }, [count, setCount]);

  const width = (slideLength + 2) * bannerWidth;
  const leftMargin = (window.innerWidth - bannerWidth) / 2;
  const offset = bannerWidth * (count + 1) - leftMargin;

  useEffect(() => {
    slideContainer.current.style.transform = `translateX(${-offset}px)`;
  }, [count]);

  const firstBanner = bannerList[0];
  const lastBanner = bannerList[bannerList.length - 1];

  return (
    <section className={styles.main}>
      <div className={styles.bannerWarp}>
        <div className={`${styles.slickSlider} ${styles.initialized}`}>
          <div className={styles.slickList}>
            <div
              className={styles.slickTrack}
              style={{
                width: `${width}px`,
              }}
              ref={slideContainer}
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
        <button onClick={nextArrow} style={{ fontSize: "40px" }}>
          {">"}
        </button>
        <button onClick={prevArrow} style={{ fontSize: "40px" }}>
          {"<"}
        </button>
      </div>
    </section>
  );
}

export default Carousel;
