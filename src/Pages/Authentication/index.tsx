import { useState } from "react";
import { IconButton, InputAdornment } from "@mui/material";
import {
    ButtonContent,
    ButtonLogin,
    Container,
    Content,
    DivAuthentication,
    DivContent,
    DivLogin,
    InputLogin,
    ResetPasswordLogin,
    SubTitleContent,
    SubTitleLogin,
    TitleContent,
    TitleLogin,
} from "./styles";
import { LockIcon, PasswordOnIcon } from "../../Components/Icons";
import { useAppNavigate } from "../../Hooks/useAppNavigate";

import { authRepository } from "../../Repositories";

const AuthenticationPage = () => {
    const navigate = useAppNavigate();

    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();

    const [checkPassword, setCheckPassword] = useState<boolean>(false);

    const handleAuth = async () => {
        if (!email) return alert("Email invalido");

        if (!password) return alert("Senha invalida");

        const response = await authRepository.authentication({
            email,
            password,
        });

        if (response.session && response.user) navigate("/home");
    };

    return (
        <Container>
            <DivContent>
                <Content>
                    <TitleContent>STOCK-FY</TitleContent>
                    <SubTitleContent>
                        A sua plataforma de gestão e monitoramento de estoque
                    </SubTitleContent>

                    <ButtonContent variant="contained">
                        Saiba mais →
                    </ButtonContent>
                </Content>
            </DivContent>

            <DivAuthentication>
                <DivLogin>
                    <TitleLogin variant="h1">Olá!</TitleLogin>
                    <SubTitleLogin variant="subtitle1">
                        Faça Login Para Começar
                    </SubTitleLogin>

                    <InputLogin
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        startAdornment={
                            <InputAdornment position="start">
                                <IconButton edge="start">
                                    <LockIcon />
                                </IconButton>
                            </InputAdornment>
                        }
                    />

                    <InputLogin
                        type={checkPassword ? "text" : "password"}
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        startAdornment={
                            <InputAdornment position="start">
                                <IconButton
                                    edge="start"
                                    onClick={() =>
                                        setCheckPassword(!checkPassword)
                                    }
                                >
                                    <PasswordOnIcon />
                                </IconButton>
                            </InputAdornment>
                        }
                    />

                    <ButtonLogin
                        variant="contained"
                        onClick={() => handleAuth()}
                    >
                        Entrar
                    </ButtonLogin>

                    <ResetPasswordLogin variant="subtitle2">
                        Resetar Senha
                    </ResetPasswordLogin>
                </DivLogin>
            </DivAuthentication>
        </Container>
    );
};

export default AuthenticationPage;
