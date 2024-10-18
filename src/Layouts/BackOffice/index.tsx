import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Container, Content } from "./styles";
import { Header } from "./Header";

export const BackOfficeLayout = () => {
    return (
        <Container>
            <Sidebar />

            <Content>
                <Header />
                <Outlet />
            </Content>
        </Container>
    );
};
