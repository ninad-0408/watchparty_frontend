import { borderRadius } from '@mui/system'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer class="pt-5 footer text-center bg-dark text-white" >
      <div class='col-12 '>
        <h1 class="masthead-heading mb-0" style={{ "font-family": "'Baloo Bhaijaan 2', cursive", "font-size": "60px" }}>Watch on any Device
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
        <div style={{padding:"40px 0" , backgroundColor:"rgba(20,20,35,0.5)"}}>
        <div class='col-12 '>
        <h1 class="masthead-heading mb-0" style={{ "font-family": "'Baloo Bhaijaan 2', cursive", "font-size": "40px" }}>Developers
        </h1>
        </div>
        <div class="container" style={{ backgroundColor:"rgba(20,20,35,0)"}}>
          <div class="row">
            <div class="col">
              <a href="https://www.linkedin.com/in/jay-raikhere-5201041b4/" style={{textDecoration:"none"}}><img src="https://media-exp1.licdn.com/dms/image/C5603AQEu-kq_mwz1Ow/profile-displayphoto-shrink_400_400/0/1596693382015?e=1648684800&v=beta&t=6O7ButqsPvjR9yynkCWK6O4Oc4OJ9kRhTvF0XXQ0RQU" alt="not found" style={{ "height": "100px" , borderRadius:"50%"}} />
              <p>Jay</p></a>
            </div>
            <div class="col">
              <a href="https://www.linkedin.com/in/ninad-kalanke/" style={{textDecoration:"none"}}><img src="https://media-exp1.licdn.com/dms/image/C4E03AQFEoFdqTo8enQ/profile-displayphoto-shrink_400_400/0/1596357503028?e=1648684800&v=beta&t=ddg3tD40VljFSZU8opYz45pZNAvzYaO--3nAQbGHTbw" alt="not found" style={{ "height": "100px" , borderRadius:"50%"}} />
              <p>Ninad</p></a>
            </div>
            <div class="col">
              <a href="https://www.linkedin.com/in/akshat-gupta-856397191/" style={{textDecoration:"none"}}><img src="https://media-exp1.licdn.com/dms/image/C5103AQHlTa6GiSE4Mw/profile-displayphoto-shrink_400_400/0/1565549307257?e=1648684800&v=beta&t=jsvcw6IjZjmJ7au4wu2Fm5K8BCh6ZPzB_OKAxyzymKk" alt="not found" style={{ "height": "100px" , borderRadius:"50%"}} />
              <p>Akshat</p></a>
            </div>
          </div>
        </div>
        </div>
        </footer>
        <div /*style={{marginTop:'10px'}}*/>
          <div style={{padding:"5px", backgroundColor: "rgba(20,20,35,0.4)"}}>
            &copy; Copyright 2022 {window.location.href}
          </div>
        </div>
      {/* </footer> */}
    </div>
  )
}

export default Footer