import './ItemsListContainer.css'

const ItemsListContainer = (props) => {
    console.log(props)
  return (
    <div className='messageGreetingContainer'>
        <h2 className='message'>
            {props.name}
        </h2>
    </div>
  )
}

export default ItemsListContainer