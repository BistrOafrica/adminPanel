import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import logo from '../logo.svg';
import Image from 'react-bootstrap/Image'

export default function LogIn() {
    return (
        <>
            
            <Form className="login_form">
                <Image src={logo} className="logo"/>
            <InputGroup className="mb-3 box">
                <InputGroup.Text className="fa_addon" id="basic-addon1"><FontAwesomeIcon className="icon" icon={faEnvelope}/> </InputGroup.Text>
                    <FormControl
                    className="form_area"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    />
                
            </InputGroup>
            <InputGroup className="mb-3 box">
                <InputGroup.Text className="fa_addon" id="basic-addon1"><FontAwesomeIcon className="icon" icon={faShieldAlt}/> </InputGroup.Text>
                    <FormControl
                    className="passBox"
                    type="password"
                    placeholder="Password"
                    aria-label="Password"
                    aria-describedby="basic-addon1"
                    />
                    <InputGroup.Text className="pass_toogle" id="basic-addon1"><FontAwesomeIcon className="icon disabled" icon={faEyeSlash}/> </InputGroup.Text>
            </InputGroup>
            <Button variant="primary" type="submit" className="btn-login" >
                Login
            </Button>
            </Form>
            </>


    )
}
