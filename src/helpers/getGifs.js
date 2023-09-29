export const getGifs = async (newCat) => {
    // const url = `https://api.giphy.com/v1/gifs/search?q=Rainbow+Six+Siege&limit=20&api_key=ePEsJ53licCipIuc2sRXvPcfc8cV3A37`;
    const ans = await fetch(newCat);
    const { data } = await ans.json();

    const gifs = data.map(gif => { //map returns new array forEach doesn't
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images?.original.url
        }
    });

    return gifs; //return array of all gifs from a category
}