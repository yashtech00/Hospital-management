import z from "zod"

export const appointProp = z.object({
    doctorId: z.string(),
})