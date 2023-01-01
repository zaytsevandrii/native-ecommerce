import React from "react"
import { Link } from "react-router-dom"
import "./Card.scss"

const Card = ({ item }) => {
    console.log(item.attributes.img.data.attributes.url)
    return (
        <Link className="link" to={`/product/${item.id}`}>
            <div className="card">
                <div className="image">
                    {item?.attributes.isNew&&<span>New Season</span>}
                    <img src={'http://localhost:1337'+item.attributes.img.data.attributes.url} alt="" className="mainImg" />
                    <img src={'http://localhost:1337'+item.attributes.img2.data.attributes.url} alt="" className="secondImg" />
                </div>
                <h2>{item?.attributes.title}</h2>
                <div className="prices">
                    <h3>${item.oldPrice||item?.attributes.price+15}</h3>
                    <h3>${item?.attributes.price}</h3>
                </div>
            </div>
        </Link>
    )
}

export default Card
