import z from "zod";

export const DoctorDetailProp = z.object({
    specialization: z.string(),
    experience: z.number(),
    availableDays: z.string(),
    location: z.string()
});