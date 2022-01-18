import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./Carousel.module.css";
import DATA from "./bannerData";
import CarouselItem from "./CarouselItem/CarouselItem";
import ArrowIcon from "../ArrowIcon/ArrowIcon";

function Carousel() {
  const [count, setCount] = useState(0);
  const [isTranstioning, setIsTranstioning] = useState(false);
  const [fakeCount, setFakeCount] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    window.innerWidth || document.body.clientWidth
  );

  // ref
  const slideContainer = useRef();

  // DATA
  const bannerList = DATA;
  const firstBanner = bannerList[0];
  const lastBanner = bannerList[bannerList.length - 1];

  const slideLength = bannerList.length;
  const rightMargin = 24;
  const bannerWidth =
    (windowWidth >= 1200 ? 1060 : windowWidth - 100) + rightMargin;

  const width = (slideLength + 2) * bannerWidth;
  const leftMargin = windowWidth >= 1200 ? (windowWidth - bannerWidth) / 2 : 38;
  const offset = bannerWidth * (count + 1) - leftMargin;

  // onClick moving slide
  const nextArrow = () => {
    // transtioning
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

  useLayoutEffect(() => {
    setWindowWidth(window.innerWidth);
  }, [window.innerWidth]);

  // responsive banner
  useLayoutEffect(() => {
    const responsiveHandler = (innerWidth) => {
      setWindowWidth(innerWidth);
    };

    window.addEventListener("resize", (event) =>
      responsiveHandler(event.target.innerWidth)
    );
  }, [window.innerWidth]);

  // fake infinite slide
  useEffect(() => {
    const handler = () => {
      // transitioning reset
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

  // mouse moving slide
  const mouseDownHandler = (downEvent) => {
    downEvent.preventDefault();
    const startX = downEvent.clientX;

    const mouseMoveHandler = (event) => {
      const dx = startX - event.clientX;
      slideContainer.current.style.transform = `translateX(${-(
        offset + dx
      )}px)`;
    };

    const mouseUpLeaveHandler = (event) => {
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
      slideContainer.current.removeEventListener(
        "mouseup",
        mouseUpLeaveHandler
      );
      slideContainer.current.removeEventListener(
        "mouseleave",
        mouseUpLeaveHandler
      );
    };

    slideContainer.current.addEventListener("mousemove", mouseMoveHandler);
    slideContainer.current.addEventListener("mouseup", mouseUpLeaveHandler);
    slideContainer.current.addEventListener("mouseleave", mouseUpLeaveHandler);
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
                <CarouselItem
                  info={lastBanner}
                  key="lastCopy"
                  count={count}
                  index={lastBanner.id - 1}
                />
              </div>
              {bannerList.map((info) => (
                <div className={styles.slickSlide}>
                  <CarouselItem
                    info={info}
                    key={info.id}
                    index={info.id - 1}
                    count={count}
                  />
                </div>
              ))}
              <div className={styles.slickSlide}>
                <CarouselItem
                  info={firstBanner}
                  key="firstCopy"
                  count={count}
                  index={firstBanner.id - 1}
                />
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
