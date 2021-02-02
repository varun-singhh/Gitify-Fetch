import React from 'react'
import {CardBody,Card} from "reactstrap"
import "./Styles/UserCard.css"
const UserCard = ({user}) => {
    return (
        <Card className="text-left mt-3 mb-4 usercard">
            <img src={user.avatar_url} className="img-thumbnail "/>
            <CardBody>
                <div className=" text-center heading"><h3>{user.name}</h3></div>
                <div >Loaction: {user.location}</div>
                <div >Followers: {user.followers}</div>
                <div >Public Repositories: {user.public_repos}</div>
            </CardBody>
        </Card>
    )
}

export default UserCard
