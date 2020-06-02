import React from "react";
import DrawerToggleButton from "../sideDrawer/drawerToggleButton";
import "./navbar.css";

const Navbar = (props) => (
  <header className="App-header">
    <div className="Navbar">
      <div>
        <nav>
          {/* <div>
            <DrawerToggleButton />
          </div> */}
          <ul>
            <li>
              <a href="#">หน้าแรก</a>
            </li>
            <b>|</b>
            <li>
              <a href="#">สมัครเข้าร่วมแข่งขัน ROBO INNOVATOR CHALLENGE</a>
            </li>
            <b>|</b>
            <li>
              <a href="#">กติกา</a>
            </li>
            <b>|</b>
            <li>
              <a href="#">รายละเอียดโครงการ</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
  </header>
);

export default Navbar;
