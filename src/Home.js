import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card.js";

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home_section">
        <Card
          src="https://res.cloudinary.com/wnotw/images/c_limit,w_1536,q_auto:eco,f_auto/v1501449460/jgbzx6w8kicxyeobszz3/airbnb-experiences-posters"
          title="Online experiences"
          description="Unique activities we can do together, led by a world of hosts."
        />
        <Card
          src="https://greenglobaltravel.com/wp-content/uploads/002.jpg"
          title="Unique Stays"
          description="Spaces that are more than just a place to sleep."
        />

        <Card
          src="https://www.propertyreporter.co.uk/images/660x350/17686-shutterstock_587908760.jpg"
          title="Entire homes"
          description="Comfortable private places, with room for friends and family."
        />
      </div>
      <div className="home_section">
        <Card
          src="https://cf.bstatic.com/images/hotel/max1024x768/221/221613204.jpg"
          title="Penthouse in London"
          description="Enjoy the amazing sights of London with this stunning penthouse."
          price="£350/night"
        />
        <Card
          src="https://www.centerparcs.co.uk/content/centerparcs/uk/en/discover-center-parcs/lodge-holidays/accommodation-type/hotels-and-apartments/1-bed-executive-apartment/_jcr_content/root/responsivegrid/heroimage.transform.1533741121785.jpg/optimal/image.1533741121785.jpg"
          title="1 Bedroom apartment"
          description="Superhost with great amenities and fabulous shopping complex nearby."
          price="£130/night"
        />
        <Card
          src="https://d3qd5ly540y1aa.cloudfront.net/property/57/13/05/57130526_s.jpg?1610981106"
          title="3 Bedroom Flat in Sheffield"
          description="Superhost with stunning view of the city in Sheffield."
          price="130/night"
        />
      </div>
    </div>
  );
}

export default Home;
