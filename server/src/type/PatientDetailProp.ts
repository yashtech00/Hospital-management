import z from "zod";

export const patientDetailsProp = z.object({
    age: z.number(),
    gender: z.string(),
    address: z.string(),
    bloodGroup: z.string(),
    medicalHistory:z.array(z.string()),
})