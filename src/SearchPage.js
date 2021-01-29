import React from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage_info">
        <p> 54 stays - 20 Febuary to 5 March - 2 guest</p>
        <h1> Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img="https://www.futurevisionremodeling.com/blog/wp-content/uploads/2020/01/shutterstock_1255583338-1-1000x640.jpg"
        location="Private room in the center of London"
        title="Stay at this spaceous Edwardian house"
        description="1 guest - 1 bedroom- 1 bed - wifi - kitchen"
        star={4.5}
        price="£50/night"
        total="£147"
      />
      <SearchResult
        img="https://sevencapitals3bucket-6bb5.kxcdn.com/wp-content/uploads/2018/09/27165601/COPPERBOX_VIEW_04_LIVING_DUSK_low-RES-1920x1072.jpg"
        location="Private room in the center of London"
        title="Independant luxury studio apartment"
        description="2 guest - 3 bedroom- 1 bed - wifi - kitchen"
        star={4.3}
        price="£40/night"
        total="£157"
      />

      <SearchResult
        img="https://i.pinimg.com/originals/a3/4d/f9/a34df9b2e7e7e52f311f90ce9646855c.jpg"
        location="Private room in the center of London"
        title="Family home"
        description="4 guest - 4 bedroom- 4 bed - wifi - kitchen"
        star={4.7}
        price="£320/night"
        total="£550"
      />

      <SearchResult
        img="https://media-cdn.tripadvisor.com/media/vr-splice-j/05/e6/f8/d4.jpg"
        location="Private room in the center of London"
        title="Modern two bedroom apartment"
        description="2 guest - 2 bedroom- 2 bed - wifi - kitchen"
        star={4.2}
        price="£160/night"
        total="£357"
      />

      <SearchResult
        img="https://images.julianasluxuryvillas.com/.cache/t1170x794/st/STPZ152PV_d565e5306c2cb825a06c8cb3a3d0f6db.jpg"
        location="Private room in the center of London"
        title="Luxury villa for three"
        description="3 guest - 3 bedroom- 3 bed - wifi - kitchen"
        star={4.5}
        price="£800/night"
        total="£1500"
      />

      <SearchResult
        img="https://cdn.homedit.com/wp-content/uploads/2017/05/Taiwan-residence-decorated-with-a-cool-and-royal-color-palete.jpg"
        location="Private room in the center of London"
        title="Stay in this modern apartment"
        description="3 guest - 3 bedroom- 3 bed - wifi - kitchen"
        star={4.9}
        price="£200/night"
        total="£400"
      />
    </div>
  );
}

export default SearchPage;
