import { IResponse } from "@/types/response";
import { apiService } from "./apiService";
import FetchMethod from "@/types/api";
import { getItem, setItem } from "./dataService";


export const getAllBlogs = async (): Promise<IResponse> => {
    try {
        
        let res = await apiService(FetchMethod.POST, "auth/blog/getall", {pageNumber:1,pageSize:1000 }, null);
        return res;
        
    } catch (e) {

        console.log("Error While Login" + e);
        let response: IResponse = {
            status: 500,
            message: "" + e,
            
        }
        return response;
    }

};