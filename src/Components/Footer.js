import React from "react";
import Tooltip from '@mui/material/Tooltip';
import { Grid } from "@mui/material";

const Footer = () => {
  return (
    <div style={{ "background-color": "#17273a" }}>
      <footer style={{
        color: 'white',
        paddingTop: '3rem',
        width: '100vw'
      }}>
        <div>
          <h1
            style={{
              "font-family": "'Baloo Bhaijaan 2', cursive",
              "font-size": "60px",
            }}
          >
            Watch on any Device
          </h1>
        </div>
        <Grid container style={{ "margin-top": "20px", "margin-bottom": "20px", alignItems: 'center', justifyContent: 'space-evenly' }}>
          <Grid item margin={2}>
            <img
              src="mobile.png"
              alt="mobile"
              style={{ height: "140px" }}
            />
            <p>Mobile</p>
          </Grid>
          <Grid item margin={2}>
            <img
              src="tablet.png"
              alt="tablet"
              style={{ height: "140px" }}
            />
            <p>Tablet</p>
          </Grid>
          <Grid item margin={2}>
            <img
              src="laptop.png"
              alt="laptop"
              style={{ height: "140px" }}
            />
            <p>Laptop</p>
          </Grid>
          <Grid item margin={2}>
            <img
              src="tv.png"
              alt="TV"
              style={{ height: "140px" }}
            />
            <p>Television</p>
          </Grid>
        </Grid>
      </footer>
        <div
          style={{ padding: "5px", backgroundColor: "rgba(110, 143, 200,1)", display: 'flex', color: "white", justifyContent: 'center', alignItems: 'center' }}
        >
          &copy; 2022 Watch Party | All Rights Reserved | Terms of Service |
          Privacy | Developers &nbsp;
          <Tooltip title="Ninad Kalanke">
            <a
              href="https://www.linkedin.com/in/ninad-kalanke/"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <img
                src="https://media.licdn.com/dms/image/C4D03AQG4OHR8wNZA_g/profile-displayphoto-shrink_200_200/0/1652351099850?e=1684972800&v=beta&t=Y2UieTIb0OPu-LaMWCjEBtOm8HUFwDS1CTefY0M3j68"
                alt="Ninad Kalanke"
                style={{ height: "40px", borderRadius: "50%" }}
              />
            </a>
          </Tooltip>
          &nbsp;
          <Tooltip title="Jay Raikhere">
            <a
              href="https://www.linkedin.com/in/jay-raikhere-5201041b4/"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <img
                src="https://media.licdn.com/dms/image/D4D03AQGrZokbfi6n1Q/profile-displayphoto-shrink_200_200/0/1678420215253?e=1684972800&v=beta&t=0w7o1A2rM3YLXQhGTXafuQhmzODNred6KiccTeIdpQE"
                alt="Jay Raikhere"
                style={{ height: "40px", borderRadius: "50%" }}
              />
            </a>
          </Tooltip>
          &nbsp;
          <Tooltip title="Akshat Gupta">
            <a
              href="https://www.linkedin.com/in/akshat-gupta-856397191/"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <img
                src="https://media.licdn.com/dms/image/D4D35AQFCVYa4MOM3DA/profile-framedphoto-shrink_200_200/0/1660980648466?e=1680339600&v=beta&t=A091wDw2p_iIYtM6IoK16ipK_Ab9syA3eb_Gbdb4EQ8"
                alt="Akshat Gupta"
                style={{ height: "40px", borderRadius: "50%" }}
              />
            </a>
          </Tooltip>
          &nbsp;
        </div>
    </div>
  );
};

export default Footer;
