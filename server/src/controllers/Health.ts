import HealthModel from "../models/HealthSchema";
import { HealthProp } from "../type/Healthprop";


export const HealthSummary = async (req: any, res: any) => {
    try {
        const healthPayload = req.body;
        const patientId = req.params.id;
        const healthParsed = HealthProp.safeParse(healthPayload);
        if (!healthParsed.success) {
            return res.status(400).json(
                { error: "Error in health payload" },
                {details:healthParsed.error.errors}
            );
        }

        const health = await HealthModel.create({
            doctorName: healthPayload.doctorName,
            patientId: patientId,
            Medication: healthPayload.Medication,
            upcomingAppointment: healthPayload.upcomingAppointment,
            recentHealthAlert: healthPayload.recentHealthAlert,
            vitals: healthPayload.vitals,
            notes: healthPayload.notes,
            healthStatus: healthPayload.healthStatus,
            reports: healthPayload.reports,
            lastUpdatedBy:healthPayload.lastUpdatedBy
        })

        return res.status(200).json({ message: "Health summary created successfully" }, { data: health });
    } catch (e:any) {
        console.error(e.message);
        return res.status(500).json("Internal server error while creating health summary")
    }
}

export const Health = async (req: any, res: any) => {
    try {
        const patientId = req.params.id;
        const health = await HealthModel.find({ patientId: patientId });


    return res.status(200).json({
      message: "Health summaries fetched successfully",
      data: health,
    });
  } catch (e: any) {
    console.error(e.message);
    return res.status(500).json({
      error: "Internal server error while fetching health summaries",
    });
  }
};
