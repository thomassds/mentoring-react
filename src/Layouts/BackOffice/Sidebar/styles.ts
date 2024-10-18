import { Button, IconButton, styled, Typography } from "@mui/material";
import { Colors } from "../../../enums/colors";

export const Content = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",

    width: "300px",
    height: "100vh",
}));

export const Header = styled("div")(() => ({
    width: "100%",

    padding: 12,
}));

export const Image = styled("img")(() => ({}));

export const DivButton = styled("div")(() => ({
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
}));

export const CloseButton = styled(IconButton)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,

    color: Colors.WHITE,
    width: 20,
    height: 20,
}));

export const ContentMenu = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

    flexGrow: 1,
}));

export const Menus = styled("div")(() => ({
    width: "100%",

    display: "flex",
    flexDirection: "column",

    gap: 12,

    padding: "10px 32px",
}));

export const Title = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.main,
    fontWeight: "bold",
}));

export const Menu = styled("div")(() => ({
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",
}));

export const DivText = styled("div")(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    gap: 12,
}));

export const TextMenu = styled(Typography)(() => ({
    fontSize: 20,
    fontWeight: "bold",
}));

export const MenuButton = styled(IconButton)(() => ({
    width: 20,
    height: 20,
}));

export const ButtonLogout = styled(Button)(() => ({
    width: "100%",
}));
