import React, { useState, useEffect } from 'react'
import Axios from "axios"
import { ListGroup, ListGroupItem } from 'reactstrap'
import { Button } from 'reactstrap'
import "./Styles/Repo.css"
const Repo = ({ repos_url }) => {
    const [repos, setRepos] = useState([])
    const fetchRepo = async () => {
        const { data } = await Axios.get(repos_url)
        setRepos(data)
    }
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
    useEffect(() => { fetchRepo() }, [repos_url])
    return (
        <ListGroup className="list">
            {repos.map(repo => (
                <ListGroupItem key={repo.id} className="mb-2 repos">
                    <div className="text-left " onClick={() => openInNewTab(repo.html_url)} style={{ cursor: "pointer" }}>
                        <div><h3 className="heading">{repo.name}</h3></div>
                        <div><h5>{repo.language}</h5></div>
                        <div><p>{repo.description}</p></div>
                    </div>
                </ListGroupItem>
            ))}
        </ListGroup>
    )
}

export default Repo

