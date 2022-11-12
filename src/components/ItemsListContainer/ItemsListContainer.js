import './ItemsListContainer.css'
import ItemList from '../ItemList/ItemList.js'
import { useEffect, useState } from "react"
import { data } from "../../data/data"
import Item from '../Item/Item'


const ItemsListContainer = () => {

const [productList, setProductList] = useState([]);

const getProducts = new Promise ((resolve, rejects)=>{
  setTimeout(()=>{
    resolve(data)
  }, 2000)
})

useEffect(()=>{
  getProducts.then((respuesta)=>{
    setProductList(respuesta)
  });
  setTimeout(()=>{
  }, 2000)
}, [productList]);

  return (
   <>
   <div className='cardProduct'>

   <ItemList productList={productList}/>

   </div>
   </>
  )
}

export default ItemsListContainer