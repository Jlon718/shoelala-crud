import React, { useState } from 'react'
import Nav from './Nav';
import axios from 'axios';

const Create = () => {
    const [state, setState] = useState({
        productName: '',
        description: '',
        brand: ''
    });

    const {productName, description, brand} = state

    const handleChange = name => event => {

        setState({...state, [name]: event.target.value});
    };

    const handleSubmit = event => {
        event.preventDefault();
        axios.post(`${process.env.REACT_APP_API}/post`, { 
            productName, 
            description, 
            brand 
        })
        .then(response => {
            console.log(response);
            setState({ ...state, productName: '', description: '', brand: ''});

            alert('Shoes is created');
        }).catch(error => {
            console.log(error.response);
            alert(error.response.data.error);   
        });
    };
    console.log(state)

    return (
        <div className="container p-5">
            <Nav title ="Create Product" name="Shoes"/>
            <h1> Create Post</h1>
            <br />
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                    <label className="text-muted">Product Name</label>
                    <input type="text" className="form-control" placeholder="Product Name" required value={productName} onChange={handleChange('productName')} />
                </div>
                <div className="form-group">
                    <label className="text-muted">Description</label>
                    <textarea type="text" className="form-control" placeholder="Write something.." required value={description} onChange={handleChange('description')} />
                </div>
                <div className="form-group">
                    <label className="text-muted">Brand</label>
                    <input type="text" className="form-control" placeholder="Your brand" required value={brand} onChange={handleChange('brand')} />
                </div>
                <div>
                    <button className="btn btn-primary">Create</button>
                </div>
            </form>
        </div>
    )
}

export default Create