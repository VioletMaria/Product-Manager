import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import DeleteButton from './DeleteButton';
import axios from 'axios';
    
const ProductList = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
            .then(res => setProducts(res.data))
            .catch(err => console.error(err));
    }, [products]);

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId))
    }

    return (
        <div>
            <h1>All Products:</h1>
            {
                products.map((product, i) => {
                return (
                 <div>
                    <p key={i}><Link to={`/product/${product._id}`}>{product.title} ${product.price} {product.description}</Link></p>
                    <br></br>
                    <DeleteButton productId={product._id} successCallback={() => removeFromDom(product._id)}/>
                </div>
                )
            })}
        </div>
    )
}
    
export default ProductList;