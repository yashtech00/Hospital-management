import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useGetMe() {

    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

    return useQuery({
        queryKey: ["me"],
        queryFn: async () => {
            const res = await axios.get(`${BACKEND_URL}/api/user/me`, { withCredentials: true });
            return res.data;
        }
    })
}