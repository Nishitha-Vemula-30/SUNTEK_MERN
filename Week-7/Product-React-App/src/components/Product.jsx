export default function Product(props){
    let {productId,
                name,
                price,
                brand,
                description,
                image}=props.product
    return(
        <div className="text-center rounded-3xl border-2 mx-2">
           <p>{name}</p>
            <p>{price}</p>   
             <p>{brand}</p>
              <p>{description}</p>
                <img src={image} alt={name} />
             
        </div>
    )
}