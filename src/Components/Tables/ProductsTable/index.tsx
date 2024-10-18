import TableBody from "@mui/material/TableBody";

import { TableContainer, TablePagination } from "@mui/material";

import {
    ProductTable,
    ProductTableHead,
    ProductTableCell,
    ProductTableRow,
} from "./styles";
import { useEffect, useState } from "react";
import { ProductInterface } from "../../../Interfaces";
import { productRepository } from "../../../Repositories";
import { ProductStatus } from "../../ProductStatus";

export const ProductsTable = () => {
    const [customerId] = useState("9cae48c5-887a-4c5b-9506-11f50eb200b5");

    const [page, setPage] = useState<number>(0);
    const [perPage, setPerPage] = useState<number>(10);

    const [rows, setRows] = useState<ProductInterface[]>([]);

    const handleSelectProducts = async () => {
        const response = await productRepository.selectProducts({
            customerId,
            page,
            perPage,
        });

        setRows(response.data);
    };

    useEffect(() => {
        handleSelectProducts();
    }, []);
    return (
        <TableContainer>
            <ProductTable aria-label="simple table">
                <ProductTableHead>
                    <ProductTableRow>
                        <ProductTableCell disabled={true}>#</ProductTableCell>
                        <ProductTableCell disabled={true} align="left">
                            Nome
                        </ProductTableCell>

                        <ProductTableCell disabled={true} align="left">
                            Status
                        </ProductTableCell>
                        <ProductTableCell disabled={true} align="right">
                            Preço de Compra
                        </ProductTableCell>
                        <ProductTableCell disabled={true} align="right">
                            Preço de Venda
                        </ProductTableCell>
                        <ProductTableCell
                            disabled={true}
                            align="right"
                        ></ProductTableCell>
                    </ProductTableRow>
                </ProductTableHead>
                <TableBody>
                    {rows.map((row) => (
                        <ProductTableRow key={row.name}>
                            <ProductTableCell align="left">-</ProductTableCell>

                            <ProductTableCell align="left">
                                {row.name}
                            </ProductTableCell>

                            <ProductTableCell>
                                <ProductStatus status={row.status} />
                            </ProductTableCell>

                            <ProductTableCell align="right">
                                {row.purchasePrice}
                            </ProductTableCell>

                            <ProductTableCell align="right">
                                {row.salePrice}
                            </ProductTableCell>

                            <ProductTableCell align="right">
                                {row.avaliation}
                            </ProductTableCell>
                        </ProductTableRow>
                    ))}
                </TableBody>
            </ProductTable>

            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={perPage}
                page={page}
                onPageChange={(e, value) => setPage(value)}
                onRowsPerPageChange={(e) => setPerPage(Number(e.target.value))}
            />
        </TableContainer>
    );
};
