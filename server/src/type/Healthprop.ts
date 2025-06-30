import z from "zod"

export const HealthProp = z.object({
    patientId: z.string(),
    doctorName: z.string(),
    Medication: z.array(
        z.object({
            name: z.string(),
            dosage: z.string(),
            frequency:z.string()
        })),
    upcomingAppointment: z.string(),
    recentHealthAlert: z.string(),
    vitals: z.string(
        z.object({
        bloodPressure:z.string().optional(),
        sugarLevel: z.string().optional(),
        heartRate: z.string().optional(),
        weight: z.string().optional(),
        temperature:z.string().optional()
        })
    ),
    notes: z.string().optional(),
    healthStatus: z.enum(["stable", "critical", "Under Observation", "Recovering"]),
    reports: z.array(
        z.object({
            reportType: z.string(),
            fileUrl:z.string()
        })
    ),
    lastUpdatedBy:z.string().optional()
})
