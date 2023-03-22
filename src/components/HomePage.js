import React from "react";
import Button from '@mui/material/Button';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="jumbotron">
        <h1 className="display-4">Welcome to our website!</h1>
        <p className="lead">
        Welcome to our platform! We offer a wide range of deals to help you save money while enjoying top-notch products and services. Browse through our user-friendly interface, claim your favorite deals, and manage your account to receive personalized recommendations based on your interests.        </p>
        <hr className="my-4" />
        <p>Our deals are constantly updated, so check back often and never miss out on a great opportunity to save. Thank you for choosing us as your go-to destination for deals!.</p>
        
        <Button  href="/griddeal" variant="outlined">View deals</Button>
        <br>
        </br>
        <br>
        </br>
        <Button  href="/deals" variant="outlined">Add Deals</Button>

      </div>
    </div>
  );
};

export default Homepage;
