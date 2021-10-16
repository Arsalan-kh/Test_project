import React from 'react'
import LOGO from './assets/logo1.PNG'
const Footer = () => {
    return (
   <>
  <footer class="footer text-white text-center text-lg-start">

  <div class="container p-4">
   
    <div class="row">

      <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
    
        <p className= "fs-3">
       <img width="114px" height="68px" src={LOGO}/>
       
        </p>
      </div>
     
      <div class="col-lg-3 col-md-6 mb-5 mb-md-0">
        <h5 class="text-uppercase mb-4">Contacts</h5>

        <ul class="list-unstyled  mb-0">
          <li>
            <a href="#!" class="text-white">Email</a>
          </li> <br/>
          <li>
            <a href="#!" class="text-white">Mobile</a>
          </li>
        
        </ul>
      </div>
     
      <div class="col-lg-3 col-md-6 mb-5 mb-md-0">
        <h5 class="text-uppercase mb-2">Social Links</h5>

        <ul class="d-flex mr-3 mt-5 justify-content-between list-unstyled">
          <li>
            <a href="#!" class="text-white fs-4"><i class="fab fa-facebook"></i> </a>
          </li>
          <li>
            <a href="#!" class="text-white fs-4"><i class="fab fa-instagram"></i></a>
          </li>
          <li>
            <a href="#!" class="text-white fs-4"><i class="fab fa-youtube"></i></a>
          </li>
          <li>
            <a href="#!" class="text-white fs-4"><i class="fab fa-dribbble"></i></a>
          </li>
        </ul>
      </div>

    </div>
  
  </div>
  

 
  <div class="text-center p-3" >
    © 2020 Copyright:   
    <a class="text-white" href="#">    NFT crerator</a>
  </div>
 
</footer>
   </>
    )
}

export default Footer
