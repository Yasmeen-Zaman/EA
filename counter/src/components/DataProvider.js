import React, { useState, useEffect } from 'react';
import List from "./PurchasedItems";

function DataProvider({ url, render }) {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(url).then((res) => res.json())
            .then((json) => json.results)
            .then((products) => products.map((item) => item.product))
            .then((names) => {
                console.log(names);
                setData(names);
            });
    }, []);
    return render(data);
}
export default DataProvider;