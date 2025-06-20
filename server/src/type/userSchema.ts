import z from "zod";
export const UserProp = z.object({
    
    fullname: z.string(),
    email:z.string(),
    password:z.string()

})