import React from 'react'
import WeaponsCard from './WeaponsCard';

const WeaponsList = ({weapons}) => {
    return (
        <div>
            {weapons.length ? (weapons.map((wpn) => 
                <WeaponsCard className="flex flex-wrap justify-center" key = {wpn.id} {...wpn} />
            
                )) : (
                <progress className="progress w-56 justify-center"></progress>
              )}
        </div>
      );
    };

export default WeaponsList