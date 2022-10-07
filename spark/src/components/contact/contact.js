import "./contact.css"

const Contact = (props) => {
    return ( 
        <section className="contact">
            <h1>{props.head}</h1>
            <section className="contact__sections">
                <h2 className="contact__section--name">naam</h2>
                <input type="text" className="contact__section--input"/>
            </section>
            <section className="contact__sections">
                <h2 className="contact__section--name">email</h2>
                <input type="text" className="contact__section--input"/>
            </section>
            <section className="contact__sections">
                <h2 className="contact__section--name">bericht</h2>
                <textarea type="text" className="contact__section--textarea"/>
            </section>
        </section>
        );
}
 
export default Contact;