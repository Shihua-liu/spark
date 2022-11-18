
import "./Login.css"

const Login = () => {
    return (
        <div className="loginform">
            <h1 class="login__header">Login</h1>
            <div className="Form__wrapper">
                <div className="bigPicture">
                    <img className="bigPicture__image" src="/images/rings-background-image.jpg" alt="" />
                </div>
                <form action="">
                    <label>Naam</label>
                    <input type="text" />
                    <label>Wachtwoord</label>
                    <input type="text" />
                </form>
            </div>

        </div>

    );
}

export default Login;