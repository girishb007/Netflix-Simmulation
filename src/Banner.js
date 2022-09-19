import React from 'react';
import "./Banner.css";

function Banner() {
    function truncate(string, n) {
        return string?.length >n ? string.substr(0, n-1) + '...': string;
    }
  return (
  <header className='banner' style={{
    backgroundImage : 'url("https://images.squarespace-cdn.com/content/v1/5810fd3520099ebb7c304192/1525148043894-332VS8NKW95SBRMO000L/black-banner-noise.png?format=2500w")',
    backgroundSize : "cover",
    backgroundPosition: "centre centre",
  }}>

<div className='banner__contents'>
    <h1 className='banner__tittle'>Movie Names</h1>
    <div className='banner__button'>
        <button className='banner_buttons'>Play</button>
        <button className='banner_buttons'>My List</button>
    </div>
    <h1 className='banner__descriptions'>
        {truncate('This is a Test description. DISCLAIMER: Shortrn length test .This Video is made for informational and educational purposes only. We do not own or affiliate with Netflix and its subsidiaries in any form. Copyright Disclaimer under section 107 of the Copyright Act 1976, allowance is made for “fair use” of this video for education purposes.',170)}</h1>
</div>

<div className="banner--fadeBottom"/>

  </header>
  );
}

export default Banner