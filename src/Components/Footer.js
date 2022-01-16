import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer class="pt-5 footer text-center bg-dark text-white" >
      <div class='col-12 '>
        <h1 class="masthead-heading mb-0" style={{ "font-family": "'Baloo Bhaijaan 2', cursive", "font-size": "80px" }}>Watch on any Device
        </h1>
        {/* <p class="pre-wrap masthead-subheading font-weight-light mb-0">Lorem ipsum dolor sit amet consectetur adipisicing</p> */}
      </div>
        <div class="container">
          <div class="row">
            <div class="col">
              <img src="mobile.png" alt="not found" style={{ "height": "200px" }} />
              <p>Mobile</p>
            </div>
            <div class="col">
              <img src="tablet.png" alt="not found" style={{ "height": "200px" }} />
              <p>Tablet</p>
            </div>
            <div class="col">
              <img src="laptop.png" alt="not found" style={{ "height": "200px" }} />
              <p>Laptop</p>
            </div>
            <div class="col">
              <img src="tv.png" alt="not found" style={{ "height": "200px" }} />
              <p>Television</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer