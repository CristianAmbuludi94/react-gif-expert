import { useState } from "react"


export const AddCategory = ({onNewCategory}) => { // aqui lo estamos desestructurando 
  
    // crearemos un usestate para tener un estado en nuestro componente de nuestro input 
    const [inputValue, setInputValue]=useState()
 
    const onInputChange= (event)=>{ // si queremos podemos desdestructurar el  event ({target})
        //console.log(event.target.value);
        setInputValue(event.target.value);
    }  

    const onSubmit=(event)=>{
       event.preventDefault(); //pra evitar el refresh del navegador y q se pierda la referencia de lo ue se escribio
       if(inputValue.trim().length<=1) return; // aqui validamos para borrar los espacios de adelante y atras no estasmo actualizando ponemos return para q se sigua ejecutando es decir si escribo una letra no se insertara si escribo mas de una si , si doy enter sin nada ya no habra error tambien 
       //onNewCategory(categoties=>[inputValue, ...categoties]) // en este caso nos permite enviar un holbak
       setInputValue('');
       onNewCategory(inputValue.trim()) 
     // para limpiar la caja de texto 
    }

    return ( 
    <form onSubmit={onSubmit}>   {/*<form onSubmit={(event)=>onSubmit(event)}> esta funcion tiene un callback es decir el submit recibe un argumento q a la ves llama una funcion , que tambien lo podemos resumir de la sigeinte forma */}
        <input
            type="text"
            placeholder="Buscar gifs"
            value={inputValue}
            //onChange={(event)=>onInputChange(event)} aqui tambien podemos omitisr el argumento 
            onChange={onInputChange} // es lo mismo 
        />
    </form>
  )
}

