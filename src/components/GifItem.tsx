
type GifItemProps = { title: string, url: string};
export const GifItem = ({title, url}: GifItemProps) => {
  return (
    <div className="card">
      <img src={url} alt="imagen de prueba" />
      <p>{ title }</p>
    </div>
  )
}
