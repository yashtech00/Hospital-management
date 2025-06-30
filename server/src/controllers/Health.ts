

export const HealthSummary = async (req: any, res: any) => {
    try {
        const healthPayload = req.body;
        const patientId = req.params.id;
        const healthParsed = healthProp.safeParse(healthPayload);
        if (!healthParsed) {
            return res.status(500).json("Error in health payload");
        }

        const health = await HealthModel.create({
            doctorName:healthPayload.doctorName
        })
    } catch (e) {
        
    }
}