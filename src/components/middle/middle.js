import React from "react";
import "./middle.css";
import logoCenter from "../photo/middle/Desktop/logocenter.svg";
import bySoftwareparkThailand from "../photo/middle/Desktop/bySoftwareparkThailand.svg";
import challengePrice from "../photo/middle/Desktop/ชิงเงินรางวัลมูลค่ากว่า.svg";
import price from "../photo/middle/Desktop/100,000บาท.svg";
import selfDriveCar from "../photo/middle/Desktop/selfDriving.svg";

const Middle = (props) => (
  <middle>
    <div class="lineArtTop">
      <div class="imgBG">
        <div class="center">
          <div style={{ paddingTop: "6%" }}>
            <img src={logoCenter} alt="logo" style={{ marginBottom: "3%"}}></img>
            <img src={bySoftwareparkThailand} alt="BySoftwarepark" style={{width: "45%"}}></img>
          </div>
          <div class="challenge">
            <img src={challengePrice} alt="challengePrice" style={{ marginBottom: "1%" }}></img>
            <img src={price} alt="price"></img>
          </div>
          <div>
            <img src={selfDriveCar} alt="selfdrivecar"></img>
          </div>
          <div class="date">
            <p>5-6 กันยายน 2563</p>
            <p>หอประชุม มหาวิทยาลัยธุรกิจบัณฑิตย์</p>
          </div>
          <div class="button">
            <button>สมัครเลย</button>
          </div>
        </div>
      </div>
    </div>
  </middle>
);

export default Middle;
