import React, { useState, useContext, useEffect } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText } from "reactstrap"
import { Link } from "react-router-dom";
import Context from './Context';
import "./Styles/header.css"
import logo from "./Styles/git.webp"
import { toast } from 'react-toastify';
const Header = () => {
    const userContext = useContext(Context)
    const [open, setOpen] = useState(false)
    const toggle = () => {
        setOpen(!open)
    }
    var s="to Gitify.Fetch !!";
    if(userContext.user?.email)
    {
        var s="";
        for (let i = 0; i < userContext.user.email.length; i++) {
            if(userContext.user.email[i]!="@")
            {
                s+=userContext.user.email[i]
            }
            else{
                break;
            }
        }
    }
    return (
        <Navbar light expand="md" className="header">
            <NavbarBrand >
                <Link to="/" className="text"><img src={logo} height="60px"/></Link>
            </NavbarBrand>
            <NavbarText ><div className="text">Welcome, {s}</div></NavbarText>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={open} navbar>
                <Nav className="ml-auto" >
                    {
                        userContext.user ? (
                        <NavItem>
                            <NavLink onClick={()=>{
                                userContext.setUser(null)
                                toast("Logged out", {
                                    type: "info"
                                })
                                }} className="text" style={{cursor:"pointer"}} >
                                Logout
                            </NavLink>
                        </NavItem>
                        ) : (
                        <>
                            <NavItem>
                                <NavLink tag={Link} to="/signup" className="text">
                                    Signup
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/signin" className="text">
                                    Login
                                </NavLink>
                            </NavItem>
                        </>
                            )
                    }



                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Header
