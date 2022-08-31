// Contenedor principal 

import GenshinList from './GenshinList'


const GenshinContainer = () => {
      fetch("")
      .then( response => response.json())
            .then ( data => {
                console.log(data)
               
            })
      return (
          <div>
              <GenshinList></GenshinList>
          </div>
        )
}
    



export default GenshinContainer