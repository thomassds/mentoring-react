export interface ErrorResponseData {
    message: string;
}

export enum ErrorCode {
    UNAUTHORIZED = 401,
    NOT_FOUND = 404,
    CONFLICT = 409,
    UNPROCESSABLE_ENTITY = 422,
}

export enum ErrorMessage {
    UNAUTHORIZED = "Unauthorized",
    UNAUTHORIZED_INVALID_PASSWORD = "Invalid Password",
    UNAUTHORIZED_INVALID_EMAIL = "Invalid Email",
    NOT_FOUND = "Not Found",
    NOT_FOUND_PRODUCT = "Product Not Found",
    NOT_FOUND_USER = "User Not Found",
    NOT_FOUND_CUSTOMER = "Customer Not Found",
    NOT_FOUND_ORDER = "Order Not Found",
    CONFLICT = "Conflict",
    CONFLICT_REGISTER_ALREADY_EXIST = "Register already exist",
    CONFLICT_NOT_HAS_STOCK = "Not has stock",
}

export enum ErrorMessageTranslate {
    UNAUTHORIZED = "Não Autorizado",
    UNAUTHORIZED_INVALID_PASSWORD = "Senha Invalida",
    UNAUTHORIZED_INVALID_EMAIL = "Email Invalido",
    NOT_FOUND = "Não Encontrado",
    NOT_FOUND_PRODUCT = "Produto Não Encontrado",
    NOT_FOUND_USER = "Usuario Não Encontrado",
    NOT_FOUND_CUSTOMER = "Cliente Não Encontrado",
    NOT_FOUND_ORDER = "Ordem Não Encontrada",
    CONFLICT = "Conflito",
    CONFLICT_REGISTER_ALREADY_EXIST = "Registro Já Existente",
    CONFLICT_NOT_HAS_STOCK = "Não Possui Estoque",
    ERROR_UNDEFINED = "Erro não esperado",
}
