import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
//import { getGifs } from "../helpers/getGifs";



export const GifGrid = ({category}) => {

    const {images, isLoading}= useFetchGifs(category);

  
  return (
            <>
                <h3>{category}</h3>
                {
                    // isLoading  // esto es un poco ofunso pero podemos hacer con un if con una condicion simple
                    // ? (<h2>Cargando....</h2>)
                    // : null
                    isLoading && (<h2>Cargando....</h2>)
                }
                

                <div className="card-grid">
                    {
                        images.map((image)=>(
                            <GifItem 
                            key={image.id}
                            {...image} // aqui lo que hago es esparcir las propiedades de image aunq tambien puedo desestructurarlo
                            
                            />
                        ))
                    }
                </div>
            </>
        )
}



