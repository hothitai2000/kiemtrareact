import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';

const Delete = () => {
    const { id } = useParams();

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:3000/products/${id}`);
            alert('Product deleted successfully!');
            
            setTimeout(() => {
                window.location = 'http://localhost:3001';
            }, 500);

        } catch (error) {
            console.log('Error deleting product:', error);
        }
    };

    useEffect(() => {
        handleDelete();
    }, []);

    return (
        <div>
        </div>
    );
};

export default Delete;