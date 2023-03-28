import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setImages]=useState([]);
    const [isLoading, setIsLoading]=useState(true); // para uando se carga por primera ves 
   
   
    const getImages = async()=>{
        const newImages=  await getGifs(category);
       setImages(newImages); // solo dispara una no dos renderizaciones 
       setIsLoading(false); // cuando dejo de cargar , algo q decir a partir de react 18 solose renderiza una sola una 
    }


    useEffect(()=>{
     getImages();
    }, [])


    return {
        images,
        isLoading
    }
}


