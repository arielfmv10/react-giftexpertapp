

    export const getGifs=async(category)=>{
        const url =`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=M6g0U3k3uyDdOzzVWetCZ0wUWfAe2gz7`
        const resp = await fetch(url);
        const {data} = await resp.json();
        const gifs =data.map(img=>{
             return{
                 id:img.id,
                 title:img.title,
                 url:img.images?.downsized_medium.url // (?) SE USA PARA DETERMINAR QUE SI VIENEN LAS IMGS SE USEN
             }
         })
        return gifs;
    }