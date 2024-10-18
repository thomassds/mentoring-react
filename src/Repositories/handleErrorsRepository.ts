import { AxiosError } from "axios";
import {
    ErrorCode,
    ErrorMessage,
    ErrorMessageTranslate,
    ErrorResponseData,
} from "../enums/errors";

class HandleErrorRepository {
    execute(error: unknown) {
        const axiosError = error as AxiosError<ErrorResponseData>;

        if (axiosError.response) {
            const { data } = axiosError.response;

            if (axiosError.status === ErrorCode.UNPROCESSABLE_ENTITY) {
                return this.handleStatus422(data);
            }

            if (axiosError.status === ErrorCode.CONFLICT) {
                return this.handleStatus409(data);
            }
        } else {
            console.error(ErrorMessageTranslate.ERROR_UNDEFINED, axiosError);
        }
    }

    private handleStatus422(data: ErrorResponseData) {
        if (data.message === ErrorMessage.UNAUTHORIZED_INVALID_PASSWORD)
            return console.log(
                ErrorMessageTranslate.UNAUTHORIZED_INVALID_PASSWORD
            );

        if (data.message === ErrorMessage.UNAUTHORIZED_INVALID_EMAIL)
            return console.log(
                ErrorMessageTranslate.UNAUTHORIZED_INVALID_EMAIL
            );
    }

    private handleStatus409(data: ErrorResponseData) {
        console.log(data);
    }
}

export const handleErrorRepository = new HandleErrorRepository();
