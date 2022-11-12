import './ItemsListContainer.css'
import ItemList from '../ItemList/ItemList.js'
import { useEffect, useState } from "react"
import { data } from "../../data/data"


const ItemsListContainer = () => {

/*   const [productList, setProductList] = useState([]); */




/*   const getProducts = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(data)
    }, 3000)
  })

  useEffect(()=>{
    getProducts.then(respuesta =>{
      setProductList(respuesta)
    })
    setTimeout(()=>{
      console.log(productList)
    },4000)
  }, []) */

  return (
   <>
   <ItemList/>
   </>
  )
}

export default ItemsListContainer