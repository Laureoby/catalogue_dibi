import React, {useState} from 'react';
import { data } from './Data';
import { LayoutGroup, motion, AnimatePresence } from 'framer-motion';
import ImagePopUp from './ImagePopUp';
import './Image.css';

function ImageGrid() {
  const [popup, setPopup] = useState(false);
  const [layoutId, setLayoutId] = useState(null);
  const poper =  (id) => {
    if (popup === false){
        setLayoutId(id);
        setPopup(!popup);
    }else{
        setPopup(!popup);
        setLayoutId(null);
    }
  }
  return (
    <div>
        <LayoutGroup>
            <div className="image_grid">{
                data.map((item) =>{
                    return(
                        <div className="image_card" key={item.id} onClick={()=>poper(item.id)}>
                            <motion.img src={`${process.env.PUBLIC_URL}/assets/${item.image}`} 
                            alt="" 
                            layoutId={item.id}/>
                        </div>
                    )
                })
            }</div>
            <div className="image_pop_up">
                <AnimatePresence>
                    {popup && <ImagePopUp layoutId={layoutId} poper={poper}/>}
                </AnimatePresence>
            </div>
        </LayoutGroup>
    </div>
  )
}

export default ImageGrid