import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
type GifGridProps = { category: string};
export const GifGrid = ({category}: GifGridProps) => {
  const {images, isLoading} = useFetchGifs(category);
  return (
    <> 

      <h3>{ category }</h3>
      {
        isLoading && (<h2>Cargando...</h2>)
      }
      <div className="card-grid">
        {
          images.map( ({id, title, url}: { id: string, title: string, url: string }) =>
            <GifItem key={id} title={title} url={url} /> 
            // <GifItem key={image.id} {...image}  />  
          )
        }
      </div>
    </>
  )
}
