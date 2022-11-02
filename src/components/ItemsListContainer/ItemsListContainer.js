import './ItemsListContainer.css'
import swal from 'sweetalert2'

const ItemsListContainer = ({greeting, subTitle}) => {

  swal.fire({
    title: `${greeting}`,
    text: `${subTitle}`,
  });

  return (
   <></>
  )
}

export default ItemsListContainer