import { useEffect, useState } from "react";
import { Content, Title } from "./styles";
import { Colors } from "../../enums/colors";

interface Props {
    status: number;
}

export const ProductStatus = ({ status }: Props) => {
    const [backgroundColor, setBackgroundColor] = useState<string>(
        Colors.WHITE_LIGHT
    );
    const [titleColor, setTitleColor] = useState<string>(Colors.WHITE_LIGHT);
    const [title, setTitle] = useState<string>();

    const handleChangeColor = () => {
        switch (status) {
            case 1:
                setBackgroundColor("#E3F3E9");
                setTitleColor(Colors.GRAY_DARK);
                setTitle("Ativo");
                break;
            case 2:
                setBackgroundColor("rgba(245, 245, 245, 0.8)");
                setTitleColor(Colors.GRAY_DARK);
                setTitle("Pendente");
                break;
            case 3:
                setBackgroundColor("rgba(64, 64, 64, 0.8)");
                setTitleColor(Colors.GRAY_DARK);
                setTitle("Arquivado");
                break;
            case 4:
                setBackgroundColor("#FFF2EA");
                setTitleColor(Colors.RED);
                setTitle("Cancelado");
                break;

            default:
                break;
        }
    };

    useEffect(() => {
        handleChangeColor();
    });
    return (
        <Content sx={{ backgroundColor }}>
            <Title sx={{ color: titleColor }}>{title}</Title>
        </Content>
    );
};
