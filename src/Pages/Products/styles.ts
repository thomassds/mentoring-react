import { styled, Typography } from "@mui/material";

export const Container = styled("div")(() => ({
    width: "100%",
    height: "100%",

    display: "flex",
    flexDirection: "column",

    gap: 20,
    padding: 24,
}));

export const Header = styled("div")(() => ({
    display: "flex",
    alignItems: "baseline",
    gap: 12,
}));

export const Title = styled(Typography)(() => ({
    fontSize: 24,

    fontWeight: "bold",
}));

export const SubTitle = styled(Typography)(({ theme }) => ({
    fontSize: 14,
    color: theme.palette.text.disabled,
}));

export const Content = styled("div")(() => ({
    width: "100%",
    height: "100%",
}));
