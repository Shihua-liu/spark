import { Link } from "react-router-dom"
import "./Login.css"

const Login = () => {
    return (
        <div className="loginform">
            <h1 className="login__header">Login</h1>
            <div className="form__wrapper">
                <div className="Picture">
                    <img className="Picture__image" src="/images/rings-background-image.jpg" alt="" />
                </div>
                <form action="">
                    <div className="form__deel">
                        <label>Naam</label>
                        <input type="text" />
                    </div>
                    <div className="form__deel">
                        <label>Wachtwoord</label>
                        <input type="text" />
                    </div>
                    <Link to="/Collection">
                        <button className="form__btn">Login</button>
                    </Link>


                </form>
            </div>

        </div>

    );
}

export default Login;