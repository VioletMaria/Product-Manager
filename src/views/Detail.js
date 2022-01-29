import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link } from "react-router-dom";
    
const Detail = (props) => {
    const [singleProduct, setSingleProduct] = useState({})
    const { _id } = useParams();
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${_id}`)
            .then(res => {
                console.log(res);
                setSingleProduct(res.data);
            })
            .catch(err =>{
                console.log(err);
            })
    }, [_id])
    
    return (
        <div>
            <p>Title: {singleProduct.title}</p>
            <p>Price: ${singleProduct.price}</p>
            <p>Descripiton: {singleProduct.description}</p>
            <Link to={"/product/" + singleProduct._id + "/edit"}>Edit</Link>
        </div>
    )
}
    
export default Detail;