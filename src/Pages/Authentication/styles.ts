import { Button, OutlinedInput, styled, Typography } from "@mui/material";

export const Container = styled("div")(() => ({
    width: "100%",
    height: "100%",

    display: "flex",
}));

export const DivContent = styled("div")(() => ({
    width: "60%",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    background:
        "linear-gradient(217.8deg, #021B79 -18.12%, #BE202F -7.42%, #9C2240 34.27%, #562561 88.39%, #02298A 153.67%)",

    padding: "10%",
}));

export const Content = styled("div")(() => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
}));

export const TitleContent = styled(Typography)(() => ({
    fontSize: 32,
    fontWeight: "Bold",
    color: "#fff",
}));

export const SubTitleContent = styled(Typography)(() => ({
    fontSize: 16,
    color: "#fff",
}));

export const ButtonContent = styled(Button)(() => ({
    marginTop: 25,
    width: 150,
    borderRadius: 50,
    height: 50,
}));

export const DivAuthentication = styled("div")(() => ({
    width: "40%",
    height: "100%",

    padding: "10%",
}));

export const DivLogin = styled("div")(() => ({
    width: "100%",
    maxWidth: 350,
    height: "100%",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
}));

export const TitleLogin = styled(Typography)(() => ({
    fontSize: 26,
    fontWeight: "bold",
}));

export const SubTitleLogin = styled(Typography)(() => ({
    fontSize: 18,
}));

export const InputLogin = styled(OutlinedInput)(() => ({
    width: "100%",
    marginTop: 20,
    borderRadius: 50,
}));

export const ButtonLogin = styled(Button)(() => ({
    marginTop: 25,
    width: "100%",
    borderRadius: 50,
    height: 50,
}));

export const ResetPasswordLogin = styled(Typography)(() => ({
    width: "100%",
    marginTop: 20,
    textAlign: "center",
}));
