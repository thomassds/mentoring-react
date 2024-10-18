import { styled, Typography } from "@mui/material";

export const Content = styled("div")(() => {
    return {
        width: 100,

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        borderRadius: "10px",

        padding: 10,
    };
});

export const Title = styled(Typography)(() => ({
    fontWeight: "bold",
}));
