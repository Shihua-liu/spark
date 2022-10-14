
import "./Feature.css"

const Feature = (props) => {
    


    return (

            <section className="feature">
                <figure className="feature__figure">
                    {props.iconimage}
                </figure>
                <h2 className="feature__head">
                    {props.head}
                </h2>
                <section className="feature__div">
                    {props.text}
                </section>
            </section>
 

    );
}

export default Feature;