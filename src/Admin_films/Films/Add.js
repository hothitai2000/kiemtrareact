import React, { useState, useEffect } from 'react';
import axios from 'axios';


var jsonObject = 'http://localhost:3000/products';
var keyCount = Object.keys(jsonObject).length;

const Add = () => {
    const [newProduct, setNewProduct] = useState({
        name: '',
        price: '',
        image: '',
        color: '',
        name_category: '',
        material: '',
        expiry_date: '',
        origin: '',
        description: '',
        tinhtranghang: true,
        id: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    useEffect(() => {
        const fetchProductCount = async () => {
            try {
                const response = await axios.get('http://localhost:3000/products');
                const products = response.data;
                const count = products.length;
                setNewProduct((prevProduct) => ({
                    ...prevProduct,
                    id: String(count + 1),
                }));
            } catch (error) {
                console.error('Error fetching product count:', error);
            }
        };
        fetchProductCount();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:3000/products', newProduct);
            setNewProduct({
                name: '',
                price: '',
                image: '',
                color: '',
                name_category: '',
                material: '',
                expiry_date: '',
                origin: '',
                description: '',
                tinhtranghang: true,
                id: keyCount + 1,
            });

            alert('Product added successfully!');
            setTimeout(() => {
                window.location = 'http://localhost:3001';
            }, 100);
        } catch (error) {
            alert('Error adding product:', error);
        }
    };

    return (
        <div  className="container">
            <h1>Add new pro</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                <label htmlFor="name">
                    Name:
                    <input
                        className="form-control" id="name" 
                        type="text"
                        name="name"
                        value={newProduct.name}
                        onChange={handleInputChange}
                    />
                </label>
                </div>
                <div className="form-group">
                <label htmlFor="price">
                    Price:
                    <input
                        className="form-control" id="price" 
                        type="text"
                        name="price"
                        value={newProduct.price}
                        onChange={handleInputChange}
                    />
                </label>
                </div>
                <div className="form-group">
                <label htmlFor="image">
                    Image:
                    <input
                        className="form-control" id="image" 
                        type="text"
                        name="image"
                        value={newProduct.image}
                        onChange={handleInputChange}
                    />
                </label>
                </div>
                <div className="form-group">
                <label htmlFor="color">
                    Color:
                    <input
                        className="form-control" id="color" 
                        type="text"
                        name="color"
                        value={newProduct.color}
                        onChange={handleInputChange}
                    />
                </label>
                </div>
                <div className="form-group">
                <label htmlFor="name_category">
                    Category:
                    <input
                        className="form-control" id="name_category" 
                        type="text"
                        name="name_category"
                        value={newProduct.name_category}
                        onChange={handleInputChange}
                    />
                </label>
                </div>
                <div className="form-group">
                <label htmlFor="material">
                    Material:
                    <input
                        className="form-control" id="material" 
                        type="text"
                        name="material"
                        value={newProduct.material}
                        onChange={handleInputChange}
                    />
                </label>
                </div>
                <div className="form-group">
                <label htmlFor="expiry_date">
                    Expiry Date:
                    <input
                        className="form-control" id="expiry_date" 
                        type="text"
                        name="expiry_date"
                        value={newProduct.expiry_date}
                        onChange={handleInputChange}
                    />
                </label>
                </div>
                <div className="form-group">
                <label htmlFor="origin">
                    Origin:
                    <input
                        className="form-control" id="origin" 
                        type="text"
                        name="origin"
                        value={newProduct.origin}
                        onChange={handleInputChange}
                    />
                </label>
                </div>
                <div className="form-group">
                <label htmlFor="description">
                    Description:
                    <input
                        className="form-control" id="description" 
                        type="text"
                        name="description"
                        value={newProduct.description}
                        onChange={handleInputChange}
                    />
                </label>
                </div>
                <button type="submit" className="btn btn-primary">Add Product</button>
            </form>
        </div>
    );
};

export default Add;