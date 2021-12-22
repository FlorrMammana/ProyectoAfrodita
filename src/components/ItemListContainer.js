import Count from "./Count"

const ItemListContainer = () => {
  
    const onAdd = () => {
        alert('Pulsa aceptar para continuar la compra')
    }

    return (
            <div>
                <Count initial={1} stock={10} onAdd={onAdd}/>
            </div>
      
    )
}


export default ItemListContainer


