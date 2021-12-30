import Item from "./Item"   

    const ItemList = ({lista}) => {
        return (
            <div id="item-container">
                {lista.map((item,index)=>{
                    return <Item key={index} producto={item}/>
                })}
            </div>
        )
    }

export default ItemList