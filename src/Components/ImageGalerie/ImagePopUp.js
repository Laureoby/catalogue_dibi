import React from 'react';
import { data } from './Data';
import './Image.css';

const ImagePopUp = ({poper, layoutId}) => {
  const singleImage = data.find((item)=>item.id===layoutId);
  return (
    <div className='pop_up_container'>
        <div className="close_button" onClick={()=>poper(null)}>
            <p>x</p>
        </div>
        <div className="pop_up_image"> 
            <img src={`${process.env.PUBLIC_URL}/assets/${singleImage.image}`} 
                 alt="" 
                 layoutId={layoutId}/>
        </div>
        <div className="pop_tabs">
            {data.map((item) =>(
                    <div className="tab" key={item.id} onClick={()=>poper(item.id)}>
                        <img src={`${process.env.PUBLIC_URL}/assets/${item.image}`} 
                            alt="" 
                            layoutId={item.id}/>
                    </div>
            ))}
        </div>
    </div>
  )
}

export default ImagePopUp