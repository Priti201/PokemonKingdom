import React from 'react'
import './Modal.css'
const Modal = (data) => {
  let {info}= data.data;
  const {handleClick}= data.data
    console.log(info);
  return (
    <div className= {`modal-container ${info.type}`}>
        <div className='modal-part1'>
        <img src={info.image} alt="" />
        <h3>{info.name}</h3>
        </div>
       <div className='detail-container'>
        <div className='modal-part2'>
        <h4>Weight: {info.weight}</h4>
        <h4>Height: {info.height}</h4>
        </div>

        <div className='modal-part3'>
            <p>Stat1: {info.stats[0].stat.name}</p>
            <p>Stat2: {info.stats[1].stat.name}</p>
            <p>Stat3: {info.stats[2].stat.name}</p>
            <p>Stat4: {info.stats[3].stat.name}</p>
            <p>Stat5: {info.stats[4].stat.name}</p>
            <p>Stat6: {info.stats[5].stat.name}</p>
            
        </div>
        <div className='modal-part4'>
            <p>Bs1: {info.stats[0].base_stat}</p>
            <p>Bs2: {info.stats[1].base_stat}</p>
            <p>Bs3: {info.stats[2].base_stat}</p>
            <p>Bs4: {info.stats[3].base_stat}</p>
            <p>Bs5: {info.stats[4].base_stat}</p>
            <p>Bs6: {info.stats[5].base_stat}</p>
        </div>
        </div>
        <button onClick={()=>handleClick()} className='close-btn'>X</button>
    </div>
  )
}

export default Modal