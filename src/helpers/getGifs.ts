interface Image {
  downsized_medium: {
    url: string;
  };
}
export const getGifs = async (category: string) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=GzCuhUaTeZ9VNdOLdfClRTHN6ntjsx1f&q=${category}&limit=5`

  const resp: Response = await fetch(url);
  const { data = [] } = await resp.json();
  const gifs = data.map( (img: {id: string, title: string, images: Image}) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }));

  console.log("gifs", gifs);
  return gifs;
};