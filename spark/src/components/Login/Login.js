
import "./Login.css"

const Login = () => {
    return (
        <div className="loginform">
            <h1 class="login__header">Login</h1>
            <div className="form__wrapper">
                <div className="bigPicture">
                    <img className="bigPicture__image" src="/images/rings-background-image.jpg" alt="" />
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
                    <button className="form__btn">Login</button>

                </form>
            </div>

        </div>

    );
}

export default Login;