import { useState } from "react";

import Logo from "../../../assets/logo.png";

import {
    KeyboardArrowLeft,
    KeyboardArrowRight,
    GridView,
    KeyboardArrowDown,
} from "@mui/icons-material";

import {
    Content,
    Header,
    ButtonLogout,
    CloseButton,
    ContentMenu,
    DivButton,
    DivText,
    Image,
    Menu,
    MenuButton,
    Menus,
    TextMenu,
    Title,
} from "./styles";
import { useAppNavigate } from "../../../Hooks";

export const Sidebar = () => {
    const navigate = useAppNavigate();

    const [show, setShow] = useState<number>(0);

    const menus: { id: number; title: string; url: string }[] = [
        {
            id: 1,
            title: "Home",
            url: "/home",
        },
        {
            id: 2,
            title: "Ordens",
            url: "/orders",
        },
        {
            id: 3,
            title: "Produtos",
            url: "/products",
        },
        {
            id: 4,
            title: "Usuarios",
            url: "/users",
        },
        {
            id: 5,
            title: "Relatorios",
            url: "/reports",
        },
    ];

    const menusTwo: { id: number; title: string; url: string }[] = [
        {
            id: 6,
            title: "Plano",
            url: "/plans",
        },
        {
            id: 7,
            title: "Perfil",
            url: "/profile",
        },
        {
            id: 8,
            title: "Configuração",
            url: "/configs",
        },
    ];
    return (
        <Content>
            <Header>
                <Image src={Logo} />

                <DivButton>
                    <CloseButton>
                        <KeyboardArrowLeft />
                    </CloseButton>
                </DivButton>
            </Header>

            <ContentMenu>
                <Menus>
                    <Title>Menu</Title>

                    {menus.map((menu, index) => (
                        <Menu key={index} onClick={() => navigate(menu.url)}>
                            <DivText>
                                <GridView />

                                <TextMenu>{menu.title}</TextMenu>
                            </DivText>

                            {show !== menu.id && (
                                <MenuButton onClick={() => setShow(menu.id)}>
                                    <KeyboardArrowRight />
                                </MenuButton>
                            )}

                            {show === menu.id && (
                                <MenuButton onClick={() => setShow(0)}>
                                    <KeyboardArrowDown />
                                </MenuButton>
                            )}
                        </Menu>
                    ))}
                </Menus>

                <Menus>
                    <Title>Configurações</Title>

                    {menusTwo.map((menu, index) => (
                        <Menu key={index} onClick={() => navigate(menu.url)}>
                            <DivText>
                                <GridView />

                                <TextMenu>{menu.title}</TextMenu>
                            </DivText>

                            {show !== menu.id && (
                                <MenuButton onClick={() => setShow(menu.id)}>
                                    <KeyboardArrowRight />
                                </MenuButton>
                            )}

                            {show === menu.id && (
                                <MenuButton onClick={() => setShow(0)}>
                                    <KeyboardArrowDown />
                                </MenuButton>
                            )}
                        </Menu>
                    ))}

                    <ButtonLogout variant="contained">Sair</ButtonLogout>
                </Menus>
            </ContentMenu>
        </Content>
    );
};
