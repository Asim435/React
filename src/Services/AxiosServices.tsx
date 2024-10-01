// AxiosServices.ts
import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export default class AxiosServices {
    post(url: string, data: any, headers: any) {
        return Axios.post(url, data, { headers })


        // .then((response: AxiosResponse<any>) => {
        //     return response.data;
        // })
        // .catch((error: any) => {
        //     if (error.response) {
        //         // The request was made and the server responded with a status code
        //         console.log("Server responded with an error:", error.response.data);
        //     } else if (error.request) {
        //         // The request was made but no response was received
        //         console.log("No response received from server:", error.request);
        //     } else {
        //         // Something else happened in making the request that triggered an error
        //         console.log("Error in making request:", error.message);
        //     }
        //     throw error; // Rethrow the error to propagate it further if needed
        // });
    }
    delete(url: string, id: number, headers: any) {
        const deleteUrl = `${url}/${id}`;
        return Axios.delete(deleteUrl, { headers });
    }
    put(url: string, id: number, headers: any, data: any) {
        const updateUrl = `${url}/${id}`;
        return Axios.put(updateUrl, data, { headers });
    }

}
