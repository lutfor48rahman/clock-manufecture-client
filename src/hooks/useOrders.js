import React, { useEffect, useState } from 'react';

const useOrders = () => {

    const [orders, setOrder] = useState([]);
    useEffect(() => {
        const url = `https://ancient-inlet-12712.herokuapp.com/order`;
        fetch(url)
            .then(res => res.json())
            .then(data =>setOrder(data))
    }, []);
    return [orders, setOrder];
};

export default useOrders;