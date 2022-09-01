// Contenedor principal 
import { data } from 'autoprefixer';
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
                const getGenshin = new Promise((resolve, reject) => {
                    setTimeout(() => {
                        if (data) {
                            resolve(data);
                        } else {
                            reject("Error");
                        }
                    }, 2000);
                })
              })

              getGenshin(genshin, 2000)
                .then((res) => {
                    setGenshin(res);
                })
                .catch((err) => console.log(err, ": there´s no characters"));

            },[]);
            

        return (
                <div>
                    <GenshinList genshin={genshin}></GenshinList>
                </div>
            )

        }



            //     const getGames = (data) => {
            //       new Promise ((resolve, reject)) => {
            //         setTimeout((data) => {
            //             if (data) {
            //                 resolve(data);
            //             } else {
            //                 reject("Error");
            //             }
            //           }, 2000);
            //     }
            //   }

    

    



export default GenshinContainer