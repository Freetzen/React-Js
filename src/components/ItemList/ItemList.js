import gta6 from '../../images/juegos/gta6.jpeg'
import './ItemList.css';

const ItemList = () => {

  return (
    <div className='itemBack'>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={gta6} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default ItemList