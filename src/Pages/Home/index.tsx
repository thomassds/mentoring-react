import { useEffect, useState } from "react";

import { orderRepository } from "../../Repositories";

const Home = () => {
    const [customer] = useState("9cae48c5-887a-4c5b-9506-11f50eb200b5");

    const [orders, setOrders] = useState<{ value: number }[]>([]);

    const handleSelectCustomers = async () => {
        const response = await orderRepository.selectOrders(customer);

        if (response) {
            setOrders(response);
        }
    };

    useEffect(() => {
        handleSelectCustomers();
    }, []);

    return (
        <div>
            <h1>home</h1>

            <h1>Quantidade {orders.length}</h1>

            {orders.map((item) => (
                <h1>{item?.value}</h1>
            ))}
        </div>
    );
};

export default Home;
