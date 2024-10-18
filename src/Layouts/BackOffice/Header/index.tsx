import { IconButton, InputAdornment } from "@mui/material";
import {
    Content,
    ExportButton,
    FunnelButton,
    LeftContent,
    NotificationIconButton,
    RightContent,
    InputSearch,
    Line,
} from "./styles";
import {
    ExportIcon,
    FilterListIcon,
    NotificationIcon,
    SearchIcon,
} from "../../../Components";

export const Header = () => {
    return (
        <Content>
            <LeftContent></LeftContent>

            <RightContent>
                <InputSearch
                    type="Search"
                    placeholder="Search"
                    startAdornment={
                        <InputAdornment position="start">
                            <IconButton edge="start">
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    }
                />

                <FunnelButton variant="contained">
                    <FilterListIcon />
                </FunnelButton>

                <ExportButton>
                    <ExportIcon />
                    Export
                </ExportButton>

                <Line orientation="vertical" />

                <NotificationIconButton>
                    <NotificationIcon />
                </NotificationIconButton>
            </RightContent>
        </Content>
    );
};
