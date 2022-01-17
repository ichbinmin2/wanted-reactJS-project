import React from "react";
import styles from "./CarouselItem.module.css";

const RightArrow = "/images/icons/right-arrow.svg";

const CarouselItem = ({ info }) => {
  return (
    <div
      className={styles.mainBannerClick}
      style={{ width: "100%", display: "inline-block" }}
    >
      <div className={styles.thumImgBox} data-target="carousel">
        <a href="###" data-target="card">
          <img
            src={info.thumailUrl}
            alt={info.title}
            className={styles.thumImg}
          />
        </a>
      </div>
      <div className={styles.infoBox}>
        <h2>Title</h2>
        <h3>text</h3>
        <hr className={`${styles.divider} ${styles.rootDivider}`} />
        <a
          className={`${styles.rootBtn} ${styles.btnText}
      ${styles.textPrimaryBtn} ${styles.sizeMediumBtn} 
      ${styles.infoDirectBtn}`}
        >
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
  );
};

export default CarouselItem;
