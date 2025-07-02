import z from "zod"

export const appointProp = z.object({
    patientId: z.string(),
    doctorId: z.string(),
    date:z.date()
})