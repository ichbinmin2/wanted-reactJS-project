import React, { useState } from "react";
import styles from "../MainBar/MainBar.module.css";

const MenuIcon = "/images/icons/menu.png";
const LogoIcon = "/images/icons/logo.png";
const SearchIcon = "/images/icons/search.svg";
const NoticeIcon = "/images/icons/notice.svg";
const NewIcon = "/images/icons/new.svg";
const SeeMoreIcon = "/images/icons/seeMore.svg";
const ProfileImage = "/images/profile.jpeg";

function MainBar() {
  return (
    <section className={styles.section}>
      <div className={styles.mainBar}>
        <nav className={styles.nav}>
          {/* navTop */}
          <div className={styles.navTop}>
            <button className={styles.navTopBtn}>
              <img src={MenuIcon} className={styles.menuIcon} />
            </button>
            <img src={LogoIcon} className={styles.logoIcon} />
          </div>
          {/* menu list */}
          <ul className={styles.menuList}>
            <li className={(styles.menu, styles.menuHome)}>
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
            <li className={styles.menu}>
              <a herf="###" className={(styles.menuA, styles.moreVisible)}>
                직군별 연봉
              </a>
            </li>
            <li className={styles.menu}>
              <a herf="###" className={(styles.menuA, styles.moreVisible)}>
                이력서
              </a>
            </li>
            <li className={styles.menu}>
              <a herf="###" className={(styles.menuA, styles.moreVisible)}>
                커뮤니티
              </a>
            </li>
            <li className={styles.menu}>
              <a herf="###" className={(styles.menuA, styles.moreVisible)}>
                프리랜서
              </a>
            </li>
            <li className={styles.menu}>
              <a herf="###" className={(styles.menuA, styles.moreVisible)}>
                AI 합격 예측
              </a>
            </li>
          </ul>
          {/* aside icon menu */}
          <aside className={styles.aside}>
            <ul className={styles.asideUl}>
              <li className={(styles.search, styles.list)}>
                <button className={styles.searchBtn}>
                  <img
                    src={SearchIcon}
                    className={(styles.searchIcon, styles.icon)}
                  />
                </button>
              </li>
              <li className={(styles.notice, styles.list)}>
                <button className={styles.noticeBtn}>
                  <img
                    src={NoticeIcon}
                    className={(styles.noticeIcon, styles.icon)}
                  />
                </button>
                <span className={styles.newIconBox}>
                  <img src={NewIcon} className={styles.newIcon} />
                </span>
              </li>
              <li className={(styles.profile, styles.list)}>
                <button className={styles.profileBtn}>
                  <div className={styles.profileBox}>
                    <img src={ProfileImage} className={styles.profileImg} />
                  </div>
                </button>
                <span className={styles.newIconBox}>
                  <img src={NewIcon} className={styles.newIcon} />
                </span>
              </li>

              <li className={(styles.service, styles.list)}>
                <a href="###" className={styles.serviceLink}>
                  기업 서비스
                </a>
              </li>

              {/* 반응형 */}
              <li className={(styles.seeMore, styles.list)}>
                <button className={styles.seeMoreBtn}>
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
