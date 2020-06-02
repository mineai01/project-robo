import React from "react";
import "./footer.css";
import softwarePark from "../photo/Logo/softwarepark.svg";
import Nstda from "../photo/Logo/Nstda.svg";
import NSD from "../photo/Logo/NSD.svg";
import DPU from "../photo/Logo/DPU.svg";
import EECI from "../photo/Logo/EECI.svg";
import KU from "../photo/Logo/KU.svg";
import MakerAssociationThailand from "../photo/Logo/MakerAssociationThailand.svg";
import OrganizeByProbo from "../photo/Logo/OrganizeByProbo.svg";

const Footer = (props) => (
  <footer>
    <div class="footer">
      <div class="setLogo">
        <p class="pFooter">สนับสนุนโดย</p>
        <div class="Logo">
          {/* <div class="rowCenter"> */}
            <img src={softwarePark} alt="Software Park"></img>
            <img src={Nstda} alt="NSTDA"></img>
            <img src={NSD} alt="NSD"></img>
            <img src={EECI} alt="EECI"></img>
            <img src={DPU} alt="DPU"></img>
            <img
              src={KU}
              alt="KU"
              class="logoPortrait1"
            ></img>
            <img
              src={MakerAssociationThailand}
              alt="MakerAssociationThailand"
              class="logoPortrait2"
            ></img>
          {/* </div> */}
          <div class="organizeLogo">
            <img src={OrganizeByProbo} alt="Probo"></img>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
