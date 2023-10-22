import React, { useEffect, useState } from 'react'
import '../App.css'
import './styles.css'
import MainForm from '../Components/MainForm'
import '../Components/navbar/navbar.css'


const Homepage = () => {



  const images = [

    {
      img: "https://www.loyaltoursandsafaris.com/wp-content/uploads/2021/03/kigali-city-Rwanda.jpg",
      title: "Get Ready To Travel The World",
      Description: "A journey of 1000 millstone start with single step.import the full Demo content with 1click and ce=eate website for your travel agency"
    },
    {
      img: "https://pbs.twimg.com/media/CLkjj5hUkAAFc_I.jpg",
      title: "Enjoy Travel with Holiday Planners",
      Description: "A journey of 1000 millstone start with single step.import the full Demo content with 1click and ce=eate website for your travel agency"
    },
    {
      img: "https://html.geekcodelab.com/holiday-planners/assets/images/banner-slide-1.jpg",
      title: "Life is Short and The World is Wide",
      Description: "A journey of 1000 millstone start with single step.import the full Demo content with 1click and ce=eate website for your travel agency"
    },
    {
      img: "https://html.geekcodelab.com/holiday-planners/assets/images/banner-slide-2.jpg",
      title: "Get Ready To Travel The World",
      Description: "A journey of 1000 millstone start with single step.import the full Demo content with 1click and ce=eate website for your travel agency"
    }



  ];

  const [currentDiv, setcurrentDiv] = useState(0);

  const prevImage = () => {
    setcurrentDiv((prev) => ((prev - 1) + (images.length * 100)) % images.length);
  };
  const nextImage = () => {
    setcurrentDiv((prev) =>((prev + 1) + (images.length * 100)) % images.length);
  };

  useEffect(() => {
    console.log(((5 + (4 * 10)) % 4))

    const interval = setInterval(nextImage, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentDiv]);


  return (

    <React.Fragment>




      <div className="slider">
        <img src={images[currentDiv].img} alt={images[currentDiv].title} />
        <button className="slider-arrow" onClick={prevImage}>Prev</button>
        <div className="image-info">
          <h2>{images[currentDiv].title}</h2>
          <p>{images[currentDiv].Description}</p>
          {/* <button className="slider-arrow-next" onClick={nextImage}>Next</button> */}
        </div>
      </div>
      <MainForm/>

    </React.Fragment>
  )
}

export default Homepage