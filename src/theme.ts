import { createTheme } from "@mui/material";
import { Colors } from "./enums/colors";

export const lightTheme = createTheme({
    palette: {
        mode: "light",
        background: {
            default: Colors.WHITE_LIGHT,
            paper: Colors.WHITE,
        },
        primary: {
            main: Colors.RED,
        },
        text: {
            disabled: Colors.GRAY_DARK,
        },
    },
});
