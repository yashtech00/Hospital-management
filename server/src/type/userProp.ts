import z from "zod";
export const SignupProp = z.object({

    fullname: z.string().optional(),
    email: z.string().email(),
    password: z.string(),
    role: z.enum(["patient", "doctor"])

})

export const LoginProp = z.object({

    fullname: z.string().optional(),
    email: z.string().email(),
    password: z.string(),
    role: z.enum(["patient", "doctor"])

})

