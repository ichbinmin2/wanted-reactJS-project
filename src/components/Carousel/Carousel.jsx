import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./Carousel.module.css";
import DATA from "./bannerData";
import CarouselItem from "./CarouselItem/CarouselItem";

function Carousel() {
  const [count, setCount] = useState(0);
  // ref
  const slideContainer = useRef();

  // Data
  const bannerList = DATA;
  const slideLength = bannerList.length;

  const rightMargin = 24;
  const bannerInnerWidth = 1060;
  const bannerWidth = bannerInnerWidth + rightMargin;

  const nextArrow = () => {
    setCount((old) => old + 1);
  };

  const prevArrow = () => {
    setCount((old) => old - 1);
  };

  const width = slideLength * bannerWidth;
  const leftMargin = (window.innerWidth - bannerWidth) / 2;
  const offset = bannerWidth * (count + 1) - leftMargin;

  useEffect(() => {
    slideContainer.current.style.transform = `translateX(${-offset}px)`;
  }, [count]);

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
              {bannerList.map((info) => (
                <div className={styles.slickSlide}>
                  <CarouselItem info={info} key={info.id} />
                </div>
              ))}
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
