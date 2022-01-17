import React from "react";
import styles from "./ArrowIcon.module.css";

const ArrowRight = "/images/icons/right-arrow.svg";
const ArrowLeft = "/images/icons/left-arrow.svg";

function ArrowIcon() {
  return (
    <button className={`${styles.arrow} ${getPosition(direction)}`}>
      <span className={styles.arrowIcon}>
        {direction === "right" ? (
          <img src={ArrowRight} alt="right arrow" className={styles.arrowImg} />
        ) : (
          <img src={ArrowLeft} alt="left arrow" className={styles.arrowImg} />
        )}
      </span>
    </button>
  );
}

function getPosition(direction) {
  switch (direction) {
    case "right":
      return styles.right;
    case "left":
      return styles.left;

    default:
      throw new Error(`위치를 알 수 없습니다: ${direction}`);
  }
}

export default ArrowIcon;
