import React from "react";
import styles from "./ArrowIcon.module.css";

const NextArrow = "/images/icons/right-arrow.svg";
const PrevArrow = "/images/icons/left-arrow.svg";

function ArrowIcon({ direction, handleClick }) {
  return (
    <button
      onClick={handleClick}
      className={`${styles.arrow} ${getPosition(direction)}`}
    >
      <span className={styles.arrowIcon}>
        {direction === "next" ? (
          <img src={NextArrow} alt="next arrow" className={styles.arrowImg} />
        ) : (
          <img src={PrevArrow} alt="prev arrow" className={styles.arrowImg} />
        )}
      </span>
    </button>
  );
}

function getPosition(direction) {
  switch (direction) {
    case "next":
      return styles.next;
    case "prev":
      return styles.prev;

    default:
      throw new Error(`위치를 알 수 없습니다: ${direction}`);
  }
}

export default ArrowIcon;
