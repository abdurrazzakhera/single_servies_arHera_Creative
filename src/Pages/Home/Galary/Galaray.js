import React from "react";
import "./Galaray.css";
import img1 from "../../../images/galary/col_1_1.jpg";
import img2 from "../../../images/galary/col_1_2.jpg";
import img3 from "../../../images/galary/col_1_3.jpg";
import img4 from "../../../images/galary/col_1_4.jpg";
import img5 from "../../../images/galary/col_1_5.jpg";
import img6 from "../../../images/galary/col_1_6.jpg";

import img7 from "../../../images/galary/col_2_1.jpg";
import img8 from "../../../images/galary/col_2_2.jpg";
import img9 from "../../../images/galary/col_2_3.jpg";
import img10 from "../../../images/galary/col_2_4.jpg";
import img11 from "../../../images/galary/col_2_5.jpg";
import img12 from "../../../images/galary/col_2_6.jpg";

import img13 from "../../../images/galary/col_3_1.jpg";
import img14 from "../../../images/galary/col_3_2.jpg";
import img15 from "../../../images/galary/col_3_3.jpg";
import img16 from "../../../images/galary/col_3_4.jpg";
import img17 from "../../../images/galary/col_3_5.jpg";
import img18 from "../../../images/galary/col_3_6.jpg";
const Galaray = () => {
  return (
    <div className=' container'>
      <h1 className='text-center mt-4 text-secondary title-photography '>
        PhotoGraphy
      </h1>
      <div className='img-galary row row-cols-1  row-cols-lg-3 g-3 '>
        <div className='col  '>
          <img className='img-fluid rounded' src={img1} alt='' />
          <img className='img-fluid rounded' src={img2} alt='' />
          <img className='img-fluid rounded' src={img3} alt='' />
          <img className='img-fluid rounded' src={img4} alt='' />
          <img className='img-fluid rounded' src={img5} alt='' />
          <img className='img-fluid rounded' src={img6} alt='' />
        </div>
        <div className='col  '>
          <img className='img-fluid rounded ' src={img7} alt='' />
          <img className='img-fluid rounded' src={img8} alt='' />
          <img className='img-fluid rounded' src={img9} alt='' />
          <img className='img-fluid rounded' src={img10} alt='' />
          <img className='img-fluid rounded' src={img11} alt='' />
          <img className='img-fluid rounded' src={img12} alt='' />
        </div>
        <div className='col  '>
          <img className='img-fluid rounded' src={img13} alt='' />
          <img className='img-fluid rounded' src={img14} alt='' />
          <img className='img-fluid rounded' src={img15} alt='' />
          <img className='img-fluid rounded' src={img16} alt='' />
          <img className='img-fluid rounded' src={img17} alt='' />
          <img className='img-fluid rounded' src={img18} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Galaray;
