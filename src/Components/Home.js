import Axios from 'axios';
import React, { useContext, useState } from 'react'
import { Redirect } from "react-router-dom";
import { toast } from 'react-toastify';
import { Button, Col, Container, Input, InputGroup, InputGroupAddon, Row } from 'reactstrap';
import Context from './Context';
import UserCard from './UserCard';
import Repo from './Repo';
import Head from "react-document-configuration";
import logo from "./Styles/git.webp"
import "./Styles/Home.css"
const Home = () => {
    const userContext = useContext(Context)
    const [query,setQuery] =useState("")
    const [user,setUser] =useState(null)
    const fetchRepo=async ()=>{
        try{
            const {data} = await Axios.get(`https://api.github.com/users/${query}`)
            setUser(data)
            console.log({data});
        }
        catch(error)
        {
            toast("Not able to locate user",{
                type:"error"
            })
        }
    }
    if (!userContext.user?.uid) {
        return <Redirect to="/signin"/>
    }
    return (
        <Container>
            <Head title="Gitify.fetch | Home"  icon={logo} />
            <Row className="mt-3">
                <Col md="5">
                    <InputGroup >
                    <Input className="fetch-search" type="text" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Enter the username"/>
                    <InputGroupAddon addonType="append">
                        <Button className="fetch-button" color="primary" onClick={fetchRepo}>Fetch User</Button>
                    </InputGroupAddon>
                    </InputGroup>
                    {user?<UserCard user={user} className="usercard"/>:null}
                </Col>
                <Col md="7">{user?<Repo repos_url={user.repos_url}/>:null}</Col>
            </Row>
        </Container>
    )
}

export default Home
