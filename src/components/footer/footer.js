import React from "react";
import './footer.css';
import softwarePark from "../../Logo/softwarepark.svg";
import Nstda from "../../Logo/Nstda.svg";
import NSD from "../../Logo/NSD.svg";
import DPU from "../../Logo/DPU.svg";
import EECI from "../../Logo/EECI.svg";
import KU from "../../Logo/KU.svg";
import MakerAssociationThailand from "../../Logo/MakerAssociationThailand.svg";
import OrganizeByProbo from "../../Logo/OrganizeByProbo.svg";

const Footer = props => (
<footer>
        <div class="footer">
          <div class="setLogo">
            <p>สนับสนุนโดย</p>
            <img
              src={softwarePark}
              alt="Software Park"
            ></img>
            <img src={Nstda} alt="NSTDA"></img>
            <img src={NSD} alt="NSD"></img>
            <img src={EECI} alt="EECI"></img>
            <img src={DPU} alt="DPU"></img>
            <img src={KU} alt="KU"></img>
            <img
              src={MakerAssociationThailand}
              alt="MakerAssociationThailand"
            ></img>
            <div style={{ marginTop: "29px" }}>
              <img src={OrganizeByProbo} alt="Probo"></img>
            </div>
          </div>
        </div>
</footer>
);

export default Footer;