import React, { useEffect, useState } from 'react'
import WeaponsList from './WeaponsList';

const GenshinWeapons = () => {
    const [weapons, setWeapons] = useState([])

    useEffect(() => {
  
      fetch( "https://630fa235498924524a92c922.mockapi.io/weapons" )
      .then( response => response.json())
        .then ( data => {
            console.log(data)
              setWeapons(data)
          new Promise((resolve, reject) => {
              setTimeout(() => {
                  if (data) {
                      resolve(data);
                  } else {
                      reject("Error");
                  }
              }, 2000);
          })
        })
  
      },[]);
  
  
    return (
      <div className='flex flex-wrap justify-center flex-row'>
        <WeaponsList weapons={weapons}/>
      </div>
    )
}

export default GenshinWeapons