import React from 'react'
import axios from 'axios'
import {useEffect} from 'react';






const ApiFatch = () => {

  const apiEndpoint = "https://newsapi.org/v2/everything?q=tesla&from=2021-08-23&sortBy=publishedAt&apiKey=f45f413a8ba14cc3a7422fec783c6617";

  useEffect(()=>{
  axios.get(apiEndpoint)
  .then((data)=>console.log('data',data))
  }, []);

    return (
        <>


<div className="card" >
  <img className="card-img-top" src="..." alt="Card image cap"   />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

<a href="https://flyweis.technology/thank_yous.php?comments=Information" class="btn-whatsapp-pulse">
<i class="fab fa-whatsapp"></i>
</a>    
        </>
    )
}

export default ApiFatch
