import React from "react";
import styles from "./Carousel.module.css";
import DATA from "./bannerData";
import CarouselItem from "./CarouselItem/CarouselItem";

function Carousel() {
  // -g
  const bannerList = DATA;

  return (
    <section className={styles.main}>
      <div className={styles.bannerWarp}>
        <div className={`${styles.slickSlider} ${styles.initialized}`}>
          <div className={styles.slickList}>
            <div className={styles.slickTrack}>
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
        <button style={{ fontSize: "40px" }}>{">"}</button>
      </div>
    </section>
  );
}

export default Carousel;
