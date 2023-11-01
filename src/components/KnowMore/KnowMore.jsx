import React, { useState } from "react";
import Modal from "../Modal/Modal";
import './KnowMore.css'

const KnowMore = ({ info }) => {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    // alert("clicked")
    setClicked(!clicked);
  }
  // console.log(info);
  return (
    <div className="know-more">
      <button onClick={handleClick} className="btn">Know More</button>

      {clicked && <Modal data={{ info, handleClick }} />}
    </div>
  );
};

export default KnowMore;
