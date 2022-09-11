// Contenedor principal 
import { useEffect, useState } from 'react'
import GenshinList from './GenshinList'


const GenshinContainer = () => {

    const [genshin, setGenshin] = useState([])

        useEffect(() => {
            
            const URL = "https://630fa235498924524a92c922.mockapi.io/genshin"

            fetch( URL )
            .then( response => response.json())
              .then ( data => {
                  console.log(data)
                    setGenshin(data)
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
                    <GenshinList genshin={genshin}></GenshinList>
                </div>
            )

        }


    

    



export default GenshinContainer