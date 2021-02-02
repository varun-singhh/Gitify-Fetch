import React from 'react'
import {Container} from "reactstrap"
import "./Styles/footer.css"
const Footer = () => {
    return (
        <Container fluid tag="footer" className="text-center fixed-bottom footer">
                <div style={{margin: "5px"}}>Made with ❤ by Varun<br/>No copyright feel free to copy😊</div>
        </Container>
    )
}

export default Footer
