import { CssBaseline, ThemeProvider } from "@mui/material";
import { lightTheme } from "./theme";
import { AppRouter } from "./router";

function App() {
    return (
        <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <AppRouter />
        </ThemeProvider>
    );
}

export default App;
