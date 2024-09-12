import { createTheme } from "@mui/material";
import { Colors } from "./enums/colors";

export const lightTheme = createTheme({
    palette: {
        mode: "light",
        background: {
            default: Colors.WHITE,
            paper: "black",
        },
        primary: {
            main: Colors.RED,
        },
    },
});
