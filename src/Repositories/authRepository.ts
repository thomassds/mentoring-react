import { apiClient } from "../Configs/Api";
import { handleErrorRepository } from "./handleErrorsRepository";

class AuthRepository {
    async authentication({
        email,
        password,
    }: {
        email: string;
        password: string;
    }) {
        try {
            const { data } = await apiClient.post("/authentication", {
                email,
                password,
            });

            return data;
        } catch (error) {
            handleErrorRepository.execute(error);
        }
    }
}

export const authRepository = new AuthRepository();
