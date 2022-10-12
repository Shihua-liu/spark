import "./Section.css"

const Section = (props) => {
    return(
        <section  class="sectionfirst">
            <header class="sectionfirst__header">
                <h2 class="sectionfirst__h2">{props.BigTitleSection || "Kaartjes"}</h2>
            </header>
            <div class="sectionfirst__wrapper">
                {props.children}
            </div>
            
        </section>
    );
}

export default Section;