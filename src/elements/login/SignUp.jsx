import styles from './SignUp.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";

const SignUp = () => {
    const [data, setData] = useState({
        firstName : "",
        lastName : "",
        email : "",
        password : ""
    })

    const navigate = useNavigate();

    const [error, setError] = useState("")

    const handleChange = ({ currentTarget : input}) => {
        setData({...data, [input.name]: input.value})
    };

    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            const url = "http://localhost:8080/api/users";
            const {data: res} = await axios.post(url, data);
            navigate("/login")
            console.log(res.message);
        } catch (error) {
            if(error.response && error.response.status >=400 && error.response.status <= 500){
                setError(error.response.data.message)
            }
        }
    }

    return(
        <div className={styles.signup_container}>
            <div className={styles.signup_form_container}>
                <div className={styles.left}></div>
                    <h1>Login</h1>
                    <Link to="/login">
                        <button type='button' className={styles.white_btn}>
                            Sign In
                        </button>
                    </Link>
                <div className={styles.right}></div>
                    <form className={styles.form_container} onSubmit={handleSubmit}>
                        <h1>Create Account</h1>
                        <input type="text" placeholder='First Name' name="firstName" onChange={handleChange} value={data.firstName} required className={styles.input}></input>
                        <input type="text" placeholder='Last Name' name="lastName" onChange={handleChange} value={data.lastName} required className={styles.input}></input>
                        <input type="text" placeholder='Email' name="email" onChange={handleChange} value={data.email} required className={styles.input}></input>
                        <input type="text" placeholder='Password' name="password" onChange={handleChange} value={data.password} required className={styles.input}></input>

                        {error && <div className={styles.error_msg}>{error}</div>}
                        <button type='button' className={styles.green_btn}>Sign Up</button>
                    </form>
            </div>
        </div>
    )
}

export default SignUp;