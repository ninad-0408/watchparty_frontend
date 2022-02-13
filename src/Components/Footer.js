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
          <Grid item>
            <img
              src="mobile.png"
              alt="not found"
              style={{ height: "100px" }}
            />
            <p>Mobile</p>
          </Grid>
          <Grid item>
            <img
              src="tablet.png"
              alt="not found"
              style={{ height: "100px" }}
            />
            <p>Tablet</p>
          </Grid>
          <Grid item>
            <img
              src="laptop.png"
              alt="not found"
              style={{ height: "100px" }}
            />
            <p>Laptop</p>
          </Grid>
          <Grid item>
            <img
              src="tv.png"
              alt="not found"
              style={{ height: "100px" }}
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
                src="https://media-exp1.licdn.com/dms/image/C4E03AQFEoFdqTo8enQ/profile-displayphoto-shrink_400_400/0/1596357503028?e=1648684800&v=beta&t=ddg3tD40VljFSZU8opYz45pZNAvzYaO--3nAQbGHTbw"
                alt="not found"
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
                src="https://media-exp1.licdn.com/dms/image/C5603AQEu-kq_mwz1Ow/profile-displayphoto-shrink_400_400/0/1596693382015?e=1648684800&v=beta&t=6O7ButqsPvjR9yynkCWK6O4Oc4OJ9kRhTvF0XXQ0RQU"
                alt="not found"
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
                src="https://media-exp1.licdn.com/dms/image/C5103AQHlTa6GiSE4Mw/profile-displayphoto-shrink_400_400/0/1565549307257?e=1648684800&v=beta&t=jsvcw6IjZjmJ7au4wu2Fm5K8BCh6ZPzB_OKAxyzymKk"
                alt="not found"
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
