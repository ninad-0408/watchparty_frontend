import React from "react";
import Tooltip from '@mui/material/Tooltip';

const Footer = () => {
  return (
    <div style={{ "background-color": "#14273a" }}>
      <footer class="pt-5 footer text-center text-white">
        <div class="col-12 ">
          <h1
            class="masthead-heading mb-0"
            style={{
              "font-family": "'Baloo Bhaijaan 2', cursive",
              "font-size": "60px",
            }}
          >
            Watch on any Device
          </h1>
          {/* <p class="pre-wrap masthead-subheading font-weight-light mb-0">Lorem ipsum dolor sit amet consectetur adipisicing</p> */}
        </div>
        <div
          class="container"
          style={{ "margin-top": "20px", "margin-bottom": "20px" }}
        >
          <div class="row">
            <div class="col">
              <img
                src="mobile.png"
                alt="not found"
                style={{ height: "100px" }}
              />
              <p>Mobile</p>
            </div>
            <div class="col">
              <img
                src="tablet.png"
                alt="not found"
                style={{ height: "100px" }}
              />
              <p>Tablet</p>
            </div>
            <div class="col">
              <img
                src="laptop.png"
                alt="not found"
                style={{ height: "100px" }}
              />
              <p>Laptop</p>
            </div>
            <div class="col">
              <img src="tv.png" alt="not found" style={{ height: "100px" }} />
              <p>Television</p>
            </div>
          </div>
        </div>
      </footer>
      <div /*style={{marginTop:'10px'}}*/>
        <div
          style={{ padding: "5px", backgroundColor: "rgba(45, 145, 132,1)" }}
        >
          &copy; 2022 Watch Party | All Rights Reserved | Terms of Service |
          Privacy | Developers &nbsp;
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
      {/* </footer> */}
    </div>
  );
};

export default Footer;
