import {useState} from "react";

export const useApi = (apiService) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const callApiService = async (...args) => {
        try {
            setLoading(true);
            const response = await apiService(...args);
            console.log(response);
            return {data: response.data, status: response.status};
        } catch (err) {
            setError(err);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return {loading, error, callApiService};
};
