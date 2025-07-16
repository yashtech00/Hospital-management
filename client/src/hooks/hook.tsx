    import { useQuery } from "@tanstack/react-query";
    import axios from "axios";

    export default function useGetMe() {
        
        const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
        console.log(BACKEND_URL,"url");
        

        const {data:authUser,isLoading}= useQuery({
            queryKey: ["me"],
            queryFn: async () => {
                try {
                    const res = await axios.get(`${BACKEND_URL}/api/user/me`, { withCredentials: true });
                    console.log(res,"me");
                    return res.data;
                } catch (e) {
                    console.error(e);
                    return null;
                }
            },
            retry:false
        })

        return (
           {authUser,isLoading}
       )

    }