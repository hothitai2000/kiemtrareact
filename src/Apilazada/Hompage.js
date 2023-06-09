import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';


function Homepage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/api/products')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div>
            <div className="home-container">
                {data.map((item) => (
                    <div className="home-card" key={item.id}>
                        <img src={`source/image/product/${item.image}`} alt="{item.name}" />
                        <h2>{item.name}</h2>
                        <p>{item.id_type}</p>
                        <p>{item.description}</p>
                        <p>{item.unit_price}</p>
                        <div className="card-buttons">
                            Chi Tiết
                            <button className="add-to-cart-button">Thêm giỏ hàng</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default  Homepage;