import {
    styled,
    Table,
    TableCell,
    TableCellProps,
    TableHead,
    TableRow,
} from "@mui/material";

interface CustomTableCellProps extends TableCellProps {
    disabled?: boolean;
}

export const ProductTable = styled(Table)(() => ({
    minWidth: 650,
    borderCollapse: "separate",
    borderSpacing: "0 20px",
}));

export const ProductTableHead = styled(TableHead)(({ theme }) => ({
    color: theme.palette.text.disabled,
}));

export const ProductTableCell = styled(TableCell)<CustomTableCellProps>(
    ({ disabled, theme }) => ({
        borderBottom: "none",
        color: disabled
            ? theme.palette.text.disabled
            : theme.palette.text.primary,

        fontWeight: disabled ? "normal" : "bold",
        "&:first-of-type": {
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
        },
        "&:last-of-type": {
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
        },
    })
);

export const ProductTableRow = styled(TableRow)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    borderRadius: 50,
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    "&:hover": {
        backgroundColor: theme.palette.background.default,
    },

    cursor: "pointer",
}));
