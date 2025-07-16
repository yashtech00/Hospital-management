import z from "zod"

export const appointProp = z.object({
    doctorId: z.string(),
    date:z.string(),
  time:z.string(),
})