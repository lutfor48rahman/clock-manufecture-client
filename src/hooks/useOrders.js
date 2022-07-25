import React, { useEffect, useState } from 'react';

const useOrders = () => {

    const [orders, setOrder] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/order`;
        fetch(url)
            .then(res => res.json())
            .then(data =>setOrder(data))
    }, []);
    return [orders, setOrder];
};

export default useOrders;