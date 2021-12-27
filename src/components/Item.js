import Count from "./Count"

  const listado = [
    {   
        "stock":20,
        "nombre":"Esculpidas",
        "detalle":"Esculpidas",  
        "precio":1500,
        "img":"logoCamila.png"
    },
    {  
        "stock":20,
        "nombre":"Semi-Permante",
        "detalle":"Semi-Permante", 
        "precio":500,
        "img":"logoCamila.png"
    },
    {   
        "stock":20, 
        "nombre":"Kapping", 
        "detalle":"Kapping", 
        "precio":800,
        "img":"logoCamila.png"
    },
    {   
        "stock":20, 
        "nombre":"Estetica de Pies", 
        "detalle":"Estetica de pies", 
        "precio":700,
        "img":"logoCamila.png"
    },
    {   
        "stock":20, 
        "nombre":"Clasicas", 
        "detalle":"Clasicas", 
        "precio":1200,
        "img":"logoKatya.png"
    },
    {   
        "stock":20, 
        "nombre":"Volumen", 
        "detalle":"Volumen", 
        "precio":1700,
        "img":"logoKatya.png"
    },
    {   
        "stock":20, 
        "nombre":"Mega-Volumen", 
        "detalle":"Mega-Volumen", 
        "precio":2500,
        "img":"logoKatya.png"
    },
    {   
        "stock":20, 
        "nombre":"Promo Esculpidas+Volumen", 
        "detalle":"Esculpidas+Volumen", 
        "precio":3000,
        "img":"afroditaSinFondo.png"
    },
    {   
        "stock":20, 
        "nombre":"Promo Kapping+Mega-Volumen", 
        "detalle":"Kapping+Mega-Volumen", 
        "precio":3500,
        "img":"afroditaSinFondo.png"
    }
]
const Item = () =>{

    return(
        listado.map((elemento, indice) => {
            return(
                <div key={indice}>
                   <div className="card">
                   <img src={elemento.img}/>
                        <div className="card-body">
                            <h5 className="card-title text-center">{elemento.nombre}</h5>
                            <p className="card-text">{elemento.detalle}</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li class="list-group-item text-center"><strong>$</strong>{elemento.precio}</li>
                            <Count stock={elemento.stock} initial={1} />
                        </ul>
                    </div>
                </div>
            )
        })
    )
}
export default Item


/* 
style="width: 18rem;"
                        


*/ 