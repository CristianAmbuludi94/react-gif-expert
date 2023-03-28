import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp=()=>{ //  hace referencia a toda la pagina que tenemos 

    const [categories, setCategories]=useState(['One Punch']);
    console.log(categories);

    const onAddCategory = (newCategory)=>{
        if(categories.includes(newCategory)) return; // con ello  podemos condicionar q no se repita el contenido pero aun estamo con las mayusculas y minusculas para ello lo podemos 
        //valorant 
        //console.log(newCategory);
        setCategories([newCategory, ...categories]) // esta es una forma de hacer para agregar nuevo contenido a un agreglo por medio de un boton 
       // setCategories(cat=>[...cat, 'valorant']); // aqui se utiza el hoolbak  que se puede enviar a las funcoones de usestate
    }

    return(
        <>
        {/*titulo*/}
            <h1>GifExpertApp</h1>
        <AddCategory 
        onNewCategory={(value)=>onAddCategory(value)} // es una propiedad de mi componente
        /> 
        
            {categories.map(category =>(
                // return <li key={category}>{category}</li>
               <GifGrid key={category} category={category}/>
                ))
            }
     

        </>
    )
}