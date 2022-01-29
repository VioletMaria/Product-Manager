import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory  } from "react-router-dom";
import ProductForm from '../components/ProductForm';
import DeleteButton from '../components/DeleteButton';

const Update = (props) => {
    const { _id } = useParams();
    const [product, setProduct] = useState(""); 
    const [loaded, setLoaded] = useState(false);
    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${_id}`)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
    }, [_id]);

    const updateProduct = product => {
        axios.put(`http://localhost:8000/api/product/${_id}`, product)
        .then(res => console.log(res))
        .catch(err => console.error(err));
    }

    return (
        <div>
            <h1>Update Product</h1>
            {loaded && (
                <div>
                    <ProductForm
                        onSubmitProp={updateProduct}
                        initialTitle={product.title}
                        initialPrice={product.price}
                        initialDescription={product.description}
                    />
                    <DeleteButton productId={product._id} successCallback={() => history.push("/product")}/>
                </div>
            )}
        </div>
    )
}

export default Update;