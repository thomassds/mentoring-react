import { useEffect, useState } from "react";

import { orderRepository } from "../../Repositories";
import { Container } from "./styles";

const HomePage = () => {
    const [customer] = useState("9cae48c5-887a-4c5b-9506-11f50eb200b5");

    const [orders, setOrders] = useState<
        {
            name: string;
            calories: number;
            fat: number;
            carbs: number;
            protein: number;
        }[]
    >([]);

    const handleSelectCustomers = async () => {
        const response = await orderRepository.selectOrders(customer);

        if (response) {
            setOrders(response);
        }
    };

    useEffect(() => {
        console.log(orders);
        handleSelectCustomers();
    }, []);

    return (
        <Container>
            <h1>Home</h1>
        </Container>
    );
};

export default HomePage;
