import { ProductsTable } from "../../Components";
import { Container, Title, SubTitle, Header } from "./styles";

const ProductsPage = () => {
    return (
        <Container>
            <Header>
                <Title>Produtos</Title>
                <SubTitle>16 of 100</SubTitle>
            </Header>

            <ProductsTable />
        </Container>
    );
};

export default ProductsPage;
