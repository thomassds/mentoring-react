import {
    Button,
    Divider,
    IconButton,
    OutlinedInput,
    styled,
    Typography,
} from "@mui/material";

export const Content = styled("div")(() => ({
    width: "100%",

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
}));

export const LeftContent = styled("div")(() => ({
    display: "flex",
    alignItems: "baseline",
    gap: 18,
}));

export const RightContent = styled("div")(() => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 18,
}));

export const SearchOrder = styled(Typography)(() => ({}));

export const InputSearch = styled(OutlinedInput)(() => ({
    width: "300px",
    height: 48,
    borderRadius: 10,
}));

export const FunnelButton = styled(Button)(() => ({
    height: 48,
    borderRadius: 12,
}));

export const ExportButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    height: 48,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    borderRadius: 12,
}));

export const Line = styled(Divider)(() => ({
    height: 30,
}));

export const NotificationIconButton = styled(IconButton)(() => ({}));
