import { styled } from "@mui/material";

export const Container = styled("div")(() => ({
    width: "100%",
    height: "100%",
    display: "flex",
}));

export const Content = styled("div")(() => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,

    padding: "32px 12px",
}));
