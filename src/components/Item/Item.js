import ItemList from "../ItemList/ItemList"
import './Item.css'

const Item = ({producto}) => {
  return (
   <>
   <div className="card card-compact w-96 bg-base-100 shadow-xl ">
        <figure><img src={`images/games/${producto.img}`} alt={producto.name} /></figure>
        <div className="card-body">
            <h2 className="card-title justify-center colorText">{producto.name}</h2>
            <p className="colorText">{producto.description}</p>
            <p className="colorText">Precio: ${producto.price}</p>
            <div className="card-actions justify-center">
                <button className="btn btn-primary">Comprar</button>
            </div>
        </div>
    </div>
   </>
  )
}

export default Item