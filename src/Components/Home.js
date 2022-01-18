import Navbar from "./Navbar";
import Footer from "./Footer";
import Alert from "@mui/material/Alert";
import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./home.css";

function Home() {
  const location = useLocation();
  const [alert, setAlert] = useState(null);
  const user = JSON.parse(localStorage.getItem("profile"))?.user?.username;
  useEffect(() => {
    setAlert(location?.state?.message);
  }, [location.state]);
  return (
    <div className="App">
      <Navbar />

      <div>
        <div
          class="bg-primary bg-gradient pt-5 pb-5 noselect"
          style={{
            "background-image": "url('back_image-2.jpg')",
            "background-repeat": "no-repeat",
            "background-attachment": "fixed",
            "background-size": "100% 100%",
          }}
        >
          <div style={{ width: "100%", "margin-top": "30px" }}>
            {alert && (
              <Alert
                variant="filled"
                severity="success"
                onClose={() => setAlert(null)}
              >
                {alert}
              </Alert>
            )}
          </div>
          <div class="container d-flex-row d-md-flex align-items-center justify-content-between mt-5">
            <div class="col-12 col-md-8">
              <h1
                class="masthead-heading mb-0 text-dark"
                style={{
                  "font-family": "'Baloo Bhaijaan 2', cursive",
                  "font-size": "80px",
                }}
              >
                Watch Party
              </h1>
              <p class="pre-wrap masthead-subheading font-weight-light mb-0">
                Watch youtube webseries with friends
              </p>
            </div>
            <div class="pb-5 mt-3 d-flex align-items-center justify-content-center">
              {/* <div class="card" style={{ width: "18rem" }}> */}
              <div className="posters" >
                <img
                  src="cubicles.jpg"
                  alt=""
                  className="img_card_1"
                  width="36"
                  height="11"
                />
                <img
                  src="dindora.jpg"
                  alt=""
                  className="img_card_1"
                  width="16"
                  height="9"
                />
                <img
                  src="aspirants.jpg"
                  alt=""
                  className="img_card_1"
                  width="16"
                  height="9"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
