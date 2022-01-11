import React, { useState } from "react";
import styles from "components/MainBar/MainBar.module.css";

const NavTopIcon = "/images/icons/menu.png";
const LogoIcon = "/images/icons/logo.png";

const SearchIcon = "/images/icons/search.svg";
const NoticeIcon = "/images/icons/notice.svg";
const NewIcon = "/images/icons/new.svg";
const SeeMoreIcon = "/images/icons/seeMore.svg";
const ProfileImage = "/images/profile.jpeg";

function MainBar() {
  return (
    <section className={styles.section}>
      <div className={styles.warpper}>
        <nav className={styles.nav}>
          {/* navTop */}
          <div className={styles.navTop}>
            <div className={styles.navTopWarp}>
              <button className={styles.navTopBtn}>
                <img src={NavTopIcon} className={styles.navTopIcon} />
              </button>
              <a href="###" className={styles.logoLink}>
                <img src={LogoIcon} className={styles.logoIcon} />
              </a>
            </div>
          </div>
          {/* menu list */}
          <ul className={styles.menuList}>
            <li className={`${styles.menu} ${styles.homeVisible}`}>
              <a herf="###" className={styles.menuA}>
                홈
              </a>
            </li>
            <li className={styles.menu}>
              <a herf="###" className={styles.menuA}>
                채용
              </a>
            </li>
            <li className={styles.menu}>
              <a herf="###" className={styles.menuA}>
                이벤트
              </a>
            </li>
            <li className={`${styles.menu} ${styles.moreVisible}`}>
              <a herf="###" className={styles.menuA}>
                직군별 연봉
              </a>
            </li>
            <li className={`${styles.menu} ${styles.moreVisible}`}>
              <a herf="###" className={styles.menuA}>
                이력서
              </a>
            </li>
            <li className={`${styles.menu} ${styles.moreVisible}`}>
              <a herf="###" className={styles.menuA}>
                커뮤니티
              </a>
            </li>
            <li className={`${styles.menu} ${styles.moreVisible}`}>
              <a herf="###" className={styles.menuA}>
                프리랜서
              </a>
            </li>
            <li className={`${styles.menu} ${styles.moreVisible}`}>
              <a herf="###" className={styles.menuA}>
                AI 합격 예측
              </a>
            </li>
          </ul>
          {/* aside icon menu */}
          <aside className={styles.aside}>
            <ul className={styles.asideWarp}>
              <li className={`${styles.search}`}>
                <button className={`${styles.searchBtn} ${styles.asideBtn}`}>
                  <img
                    src={SearchIcon}
                    className={`${styles.searchIcon} ${styles.asideIcon}`}
                  />
                </button>
              </li>
              <li className={`${styles.notice} ${styles.noticeItem}`}>
                <button className={`${styles.noticeBtn} ${styles.asideBtn}`}>
                  <img
                    src={NoticeIcon}
                    className={`${styles.noticeIcon} ${styles.asideIcon}`}
                  />
                </button>
                {/* new logo */}
                <span
                  className={styles.newIconBox}
                  style={{
                    backgroundColor: "rgb(51, 102, 255)",
                    width: "13px",
                    height: "13px",
                  }}
                >
                  <img src={NewIcon} className={styles.newIcon} />
                </span>
              </li>
              <li className={`${styles.profile} ${styles.profileItem}`}>
                <button className={`${styles.profileBtn} ${styles.asideBtn}`}>
                  <div className={styles.profileBox}>
                    <div
                      className={styles.profileAvatar}
                      style={{
                        backgroundImage: `url(${ProfileImage}), url(https://static.wanted.co.kr/images/profile_default.png)`,
                      }}
                    ></div>
                    {/* <img src={ProfileImage} className={styles.profileImg} /> */}
                  </div>
                </button>
                {/* new logo */}
                <span
                  className={styles.newIconBox}
                  style={{
                    backgroundColor: "rgb(51, 102, 255)",
                    width: "13px",
                    height: "13px",
                  }}
                >
                  <img src={NewIcon} className={styles.newIcon} />
                </span>
              </li>

              <li className={`${styles.service} ${styles.leftDivision}`}>
                <a href="###" className={styles.serviceLink}>
                  기업 서비스
                </a>
              </li>

              <li className={`${styles.seeMore}`}>
                <button className={`${styles.seeMoreBtn} ${styles.asideBtn}`}>
                  <img src={SeeMoreIcon} className={styles.seeMoreIcon} />
                </button>
              </li>
            </ul>
          </aside>
        </nav>
      </div>
    </section>
  );
}

export default MainBar;