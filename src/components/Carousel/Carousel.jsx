import React from "react";
import styles from "./Carousel.module.css";

const RightArrow = "/images/icons/right-arrow.svg";

function Carousel() {
  return (
    <section className={styles.main}>
      <div className={styles.bannerWarp}>
        <div className={styles.slickSlider}>
          <div className={styles.slickList}>
            <div className={styles.slickTrack}>
              {/* thunnail banner */}
              <div className={styles.slickSlide}>
                <div>
                  <div className={styles.mainBanner}>
                    <div className={styles.thumImgBox}>
                      <a href="###">
                        <img
                          src=""
                          alt="요즘 MD가 일하는 방법"
                          className={styles.thumImg}
                        />
                      </a>
                    </div>
                    <div>
                      <h2>Title</h2>
                      <h2>text</h2>
                      <hr className={styles.divider} />
                      <a className={styles.goToLink}>
                        <span className={styles.linkBtnLabel}>
                          바로가기
                          <span className={styles.linkBtn}>
                            <span className={styles.linkBtnIcon}>
                              <img src={RightArrow} alt="" />
                            </span>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
