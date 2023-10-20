import { IResponse } from "@/types/response";
import { apiService } from "./apiService";
import FetchMethod from "@/types/api";


export const login = async (email: string, password: string): Promise<IResponse> => {
    try {
        if (!email) {
            let response: IResponse = {
                status: 400,
                message: "invalid email"
            }
            return response;
        }
        if (!email) {
            let response: IResponse = {
                status: 400,
                message: "invalid password"
            }
            return response;
        }
        let res = await apiService(FetchMethod.POST, "auth/login", { email: email, password: password }, null);
        return res;
    } catch (e) {

        console.log("Error While Login" + e);
        let response: IResponse = {
            status: 500,
            message: "" + e
        }
        return response;
    }

};

export const verifyLogin = (): void => {


};

export const logout = (): void => {


};