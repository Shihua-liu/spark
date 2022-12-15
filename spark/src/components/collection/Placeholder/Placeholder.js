const Placeholder = (props) => {

    const placeholderClicked = () => {
        props.onCardClicked(props.id)
    }
    
    return (
        <li key={props.id} className="productList__item" >
            <button onClick={placeholderClicked} className="productList__button">{props.buttonSymbol || "*"}</button>
            <p className="productList__text">{props.buttonText || "Toevoegen"} </p>
        </li>
    );
}

export default Placeholder;