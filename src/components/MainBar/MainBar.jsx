import React, { useState } from "react";
import "./MainBar.css";

const MenuIcon = "/images/icons/menu.png";
const LogoIcon = "/images/icons/logo.png";
const SearchIcon = "/images/icons/search.svg";
const NoticeIcon = "/images/icons/notice.svg";
const NewIcon = "/images/icons/new.svg";
const SeeMoreIcon = "/images/icons/seeMore.svg";
const ProfileImage = "/images/profile.jpeg";

function MainBar(props) {
  return (
    <section className="">
      <div className="">
        <nav className="">
          <div className="">
            <img src={MenuIcon} />
            <img src={LogoIcon} />
          </div>
          <ul className="">
            <li className="">채용</li>
            <li className="">이벤트</li>
            <li className="">직군별 연봉</li>
            <li className="">이력서</li>
            <li className="">커뮤니티</li>
            <li className="">프리랜서</li>
            <li className="">AI 합격 예측</li>
          </ul>
          <aside className="">
            <ul className="">
              <li className="">
                <button className="">
                  <img src={SearchIcon} className="" />
                </button>
              </li>
              <li className="">
                <button className="">
                  <img src={NoticeIcon} className="" />
                </button>
                <span className="">
                  new
                  <img src={NewIcon} className="" />
                </span>
              </li>
              <li className="">
                <button className="">
                  <div className="">
                    프로필사진
                    <img src={ProfileImage} className="" />
                  </div>
                </button>
                <span className="">
                  new
                  <img src={NewIcon} className="" />
                </span>
              </li>
              <li className="">
                <a href="###" className="">
                  기업 서비스
                </a>
              </li>

              {/* 반응형 */}
              {/* <li className="">
                <button className="">
                  <img src={SeeMoreIcon}  className=""/>
                </button>
              </li> */}
            </ul>
          </aside>
        </nav>
      </div>
    </section>
  );
}

export default MainBar;
