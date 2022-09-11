import React from 'react'
import { Link } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const ItemDetailList = ({weapons}) => {
    return (
        <div>
            {weapons.length ? (weapons.map((wpn) => 
                <ItemDetail className="flex flex-wrap justify-center" key = {wpn.id} {...wpn} />
            
                )) : (
                <progress className="progress w-56 justify-center"></progress>
              )}
        </div>
      );
    };

export default ItemDetailList