export const getGifs= async(category)=>{
    const url=`https://api.giphy.com/v1/gifs/search?api_key=7cDPlfNqM98BD4n8n9ME1udWeQBMeHp8&q=${category}&limit=10`
    const resp= await fetch(url); // aqui acemosnuestra oeticion attp con await y si es asi debemos poner async
    const {data} = await resp.json();// a nosostros nos interesa la data y desestructuraremos la data 
    
    const gifs = data.map(img =>({ // aqui regreso el objeto con las proiedades que me interesan 
        id: img.id,
        title: img.title,
        url:img.images.downsized_medium.url
    }));

    return gifs;
}