import Navbar from './Navbar'
import Footer from './Footer'

function Home() {
    return (
        <div className="App">
            <Navbar />
            <div style={{minHeight:"95vh"}}>
                <div class="bg-primary bg-gradient pt-5 pb-5 noselect" style={{ "background-image": "url('back_image-2.jpg')" ,   "background-repeat": "no-repeat","background-attachment": "fixed","background-size": "100% 100%"}}>
                    <div class="container d-flex-row d-md-flex align-items-center justify-content-between mt-5">
                        <div class='col-12 col-md-8'>
                            <h1 class="masthead-heading mb-0 text-light" style={{ "font-family": "'Baloo Bhaijaan 2', cursive", "font-size": "80px" , "text-shadow": "0 0 20px #000000, 0 0 20px #000000"}}>Watch Party
                            </h1>
                            <p class="pre-wrap masthead-subheading font-weight-light mb-0 text-light">Create watch parties in seconds and watch with your friends.</p>
                        </div>
                        <div class='pb-5 mt-3 d-flex align-items-center justify-content-center'  >
                            <div class="card" style={{ "width": "18rem" , border:"2px solid #030563", "border-radius":"25px" , "background":"rgba(48, 54, 227,0.3)"}}>
                                <img src="youtube.png" class="card-img-top" alt="..." />
                                <div class="card-body " style={{margin:"10px",marginTop:"0px","border-radius":"25px", "background":"rgba(48, 54, 227,0.2)"}}>
                                    <p class="card-text text-white" >
                                    Watch your favourite content on YouTube with your friends.    
                                    </p>
                                    {/* <div class="bg-success p-2" style={{ "--bs-bg-opacity": ".2" }}>This is 50% opacity success background</div> */}
                                </div>
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
