import React, { useContext, useState } from 'react'
import {
    Container, Form, FormGroup, Button, Row, Col, Input, Card, CardBody, CardFooter, CardHeader, Label
} from "reactstrap"
import firebase from "firebase/app";
import Context from './Context';
import { Redirect } from "react-router-dom";
import { toast } from 'react-toastify';
import Head from "react-document-configuration";
import logo from "./Styles/git.webp"
import "./Styles/Signin.css"
const Signin = () => {
    const userContext = useContext(Context)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const handleSignup = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, pass)
            .then(res=>{
                userContext.setUser({ email: res.user.email, uid: res.user.uid })
                toast("Logged IN", {
                    type: "success"
                })
            })
            .catch(error => {
                toast(error.message, {
                    type: "error"
                })
            })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        handleSignup()
    }
    if (userContext.user?.uid) {
        
        return <Redirect to="/" />
    }
    else {
        return (
            <Container className="text-center" >
                <Head title="Gitify.fetch | Login"  icon={logo} />
                <Row>
                    <Col l={6} className="offset-rg-1 mt-5" >
                        <Card className="signin-container">
                            <Form onSubmit={handleSubmit}>
                            <CardHeader className="signin-f"><h2>Gitify.fetch | Login</h2></CardHeader>
                                <CardBody>
                                    <FormGroup row >
                                        <Label for="email" sm={3}>Email</Label>
                                        <Col sm={6}>
                                            <Input className="form" type="email" name="email" id="email" placeholder="Enter your Mail" value={email} onChange={e => setEmail(e.target.value)} />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row >
                                        <Label for="password" sm={3}>Password</Label>
                                        <Col sm={6}>
                                            <Input className="form" type="password" name="password" id="password" placeholder="Enter your Password" value={pass} onChange={e => setPass(e.target.value)} />
                                        </Col>
                                    </FormGroup>
                                </CardBody>
                                <CardFooter className="signin-f">
                                    <Button type="submit" className="button-log">Login</Button>
                                </CardFooter>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
            
        )
    }
}

export default Signin
