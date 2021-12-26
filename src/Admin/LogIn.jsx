import React,{useState} from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faEye} from '@fortawesome/free-solid-svg-icons';
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Image from 'react-bootstrap/Image';
import {Login} from './Functions';
import logo from '../logo.svg';
import {links, loginStatus, year} from "../K";




export default function SignIn() {
        const BASE_URL='https://api.soofapay.com/qubeans/';
        /*const required = value => (value === null ? 'Required' : undefined);
        const email = value => (
            value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
                ? 'Invalid email'
                : undefined
        );*/
        const [loggedIn,setLoggedIn]=useState(false)

        const [email,setEmail] = useState("");
        const [password,setPassword] = useState("");
        const [loginPayload,setLoginPayload]=useState({});

        const [values, setValues] = useState({
            email:"",
            password: "",
            showPassword: false,
            loginReady:false,
        });


        const handleShowPassword = () => {
            setValues({ ...values, showPassword: !values.showPassword });
        };

        const handleMouseDownPassword = (event) => {
            /*event.preventDefault();*/
        };

        const handlePasswordChange = (prop) => (event) => {
            setValues({ ...values, [prop]: event.target.value });

        };
        const handleEmailChange = (prop) => (event) => {
            setValues({ ...values, [prop]: event.target.value });
        };
        const handleSubmitForms=(event)=>{
            event.preventDefault();
            setLoginPayload({'emailOrPhone':`${email}`, 'password':`${password}`});
            Login(BASE_URL, links.login, loginPayload);

        };




    return (
        <>

            <Form id='login' className="login_form" onSubmit={handleSubmitForms}>
                <Image src={logo} className="logo"/>
                <h5 style={{fontWeight:'600',color:'#404040',textAlign:'center',marginBottom:'60px'}}>Hey! <br/>Welcome to Soofa QuBeans Dashboard</h5>

            <InputGroup className="mb-3 box">
                <InputGroup.Text className="fa_addon" id="basic-addon1"><FontAwesomeIcon className="faIcon" icon={faEnvelope}/> </InputGroup.Text>
                    <FormControl
                    className="form_area"
                    id='email'
                    autocomplete="username"
                    placeholder="Email/ Username"
                    type='email'
                    onChange={event => {
                        setEmail(event.target.value);
                        handleEmailChange("email")
                    }}
                    aria-label="Username"
                    required
                    aria-describedby="basic-addon1"
                    />
                
            </InputGroup>
            <InputGroup className="mb-3 box">
                <InputGroup.Text className="fa_addon" id="basic-addon1"><FontAwesomeIcon className="faIcon" icon={faShieldAlt}/> </InputGroup.Text>
                    <FormControl
                    className="passBox"
                    id='password'
                    autocomplete="current-password"
                    type={values.showPassword ? "text" : "password"}
                    onChange={event => {
                        setPassword(event.target.value);
                        handlePasswordChange("password")
                    }}

                    placeholder="Password"
                    aria-label="Password"
                    required
                    aria-describedby="basic-addon1"
                    />
                    <InputGroup.Text
                        onClick={handleShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        className="pass_toggle" id="basic-addon1">
                            <FontAwesomeIcon className={`faIcon ${values.showPassword ? 'disabled': ''}`} icon={values.showPassword ? faEyeSlash : faEye}/> </InputGroup.Text>
            </InputGroup>
                <Button  type='submit' variant="primary" className="btn-login" >
                    Login
                </Button>

            </Form>
            <p style={{fontWeight:'600',color:'#aaaaaa',textAlign:'center',marginBottom:'100px'}}>Soofa QuBeans &copy; {year}</p>
            </>


    )




}
