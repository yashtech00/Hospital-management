import AppointmentModel from "../models/AppointmentSchema";
import { appointProp } from "../type/AppointmentProp";

export const BookAppointment = async (req: any, res: any) => {
  try {
    const appointPayload = req.body;
    const appointParsed = appointProp.safeParse(appointPayload);

    if (req.user.role != "patient") {
      return res.status(405).json("User not allowed to book appointments");
    }

    if (!appointParsed.success) {
      return res.status(400).json({
        error: "Invalid data",
        details: appointParsed.error.errors,
      });
    }

    const { doctorId,date,time } = appointParsed.data;
     const alreadyBooked = await AppointmentModel.findOne({
      patientId: req.user._id,
       doctorId,
      date,
  time,
     })
    if (alreadyBooked) {
      return res.status(409).json({ message: "you have already booked an appointment with this doctor" });
    }

    const newAppoint = await AppointmentModel.create({
      patientId: req.user._id,
      doctorId: doctorId,
      date,
  time,
    });

    return res
      .status(200)
      .json({ message: "Appointment booked successfully", data: newAppoint });
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json("internal server error while booking appointment");
  }
};

export const Appointments = async (req: any, res: any) => {
  try {
    const Appoint = await AppointmentModel.find().populate("patientId");
    if (req.user.role != "doctor") {
      return res.status(405).json("User not allowed to appointments");
    }
    return res
      .status(200)
      .json({ message: "fetched appointments", data: Appoint });
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json("Internal server error while fetching appointments");
  }
};

export const DeleteAppointment = async (req: any, res: any) => {
  try {
    const appointmentId = req.params.id;
    console.log(appointmentId, "appointment id");

    if (req.user.role != "patient") {
      return res.status(405).json("User not allowed to book appointments");
    }
    
    const deleteAppoint = await AppointmentModel.findByIdAndDelete(
      appointmentId
    );
    if (!deleteAppoint) {
      return res
        .status(404)
        .json({ message: "Booked Appointment is not found" });
    }
    return res.status(200).json("appointment deleted successfully");
  } catch (e: any) {
    console.error(e.message);
    return res.status(500).json({
      error: "Internal server error while deleting appointment",
    });
  }
};


export const getPatientsByDoctor = async (req: any, res: any) => {
  try {
    const doctorId = req.user._id;

    const appointments = await AppointmentModel.find({ doctorId }).populate("patientId", "-password");

    const patient = appointments.map((appt) => appt.patientId);


    return res.status(200).json({ message: "fetched patients who booked appointment with this doctor", data: patient });
  } catch (e) {
    console.error(e);

    return res.status(500).json({error:"Internal server error"})
    
  }
}