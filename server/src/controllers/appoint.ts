import AppointmentModel from "../models/AppointmentSchema";
import { appointProp } from "../type/AppointmentSchema";


export const BookAppointment = async (req: any, res: any) => {
    try {
        const appointPayload = req.body;
        const docId = req.params.id;
        const appointParsed = appointProp.safeParse(appointPayload);

        if (!appointParsed) {
            return res.status(500).json("Wrong id of patient or doctor");
        }

        const newAppoint = await AppointmentModel.create({
            patientId: appointPayload.patientId,
            doctorId: docId,
            Date:appointPayload.date
        })

        return res.status(200).json("Appointment booked", { data: newAppoint });
    } catch (e) {
        console.error(e);
        return res.status(500).json("internal server error while booking appointment");
    }
}


export const Appointments = async (req:any, res:any) => {
    try {
        const Appoint = await AppointmentModel.find()
        return res.status(200).json("fetched appointments", Appoint);
    } catch (e) {
        console.error(e);
        return res.status(500).json("Internal server error while fetching appointments");
    }
}


export const DeleteAppointment = async (req: any, res: any) => {
    try {
        const appointmentId = req.params.id;
        if (!appointmentId) {
            return res.status(404).json("Wrong appointment Id");
        }
        const deleteAppoint = await AppointmentModel.deleteOne(appointmentId);
        return res.status(200).json("appointment deleted successfully");
    } catch (e:any) {
        console.error(e.message);
        return res.status(500).json({
            error:"Internal server error while deleting appointment"
        })
    }
}