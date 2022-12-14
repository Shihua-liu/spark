import "./ProductCard"

const ProductCard = (props) => {

    const productCardClicked = () => {
        props.onCardClicked(props.id)
    }
    
    return (
        <li onClick={productCardClicked} className="productList__item productList__item--gray">
            <img className="productList__img" src={props.productImg} alt={props.name} />
            <p className="productList__imgText">{props.name}</p>
        </li>
    )
}
 
export default ProductCard;