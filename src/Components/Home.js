import Navbar from './Navbar'
import Footer from './Footer'

function Home() {
  return (
    <div className="App">
      <Navbar/>
      <div>
      <div class="bg-primary bg-gradient pt-5 pb-5 noselect" style={{ "background-image":"url('back_image.jpg')" }}>
        <div class="container d-flex-row d-md-flex align-items-center justify-content-between mt-5">
          <div class='col-12 col-md-8'>
		  <h1 class="masthead-heading mb-0 text-dark" style={{ "font-family": "'Baloo Bhaijaan 2', cursive", "font-size": "80px" }}>Watch Party
            </h1>
          <p class="pre-wrap masthead-subheading font-weight-light mb-0">Lorem ipsum dolor sit amet consectetur adipisicing</p>
          </div>
		  <div class='pb-5 mt-3 d-flex align-items-center justify-content-center'>
          <div class="card" style={{ "width": "18rem" }}>
            <img src="https://www.watchparty.me/screenshot4.png" class="card-img-top" alt="..." />
            <div class="card-body  bg-secondary bg-gradient">
              <p class="card-text text-white" >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div class="bg-success p-2" style={{ "--bs-bg-opacity": ".2" }}>This is 50% opacity success background</div>
            </div>
			</div>
          </div>
        </div>
      </div>

    </div>
      <Footer/>
    </div>
  );
}

export default Home;
