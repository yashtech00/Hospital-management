import DoctorModel from "../models/DoctorSchema";
import PatientModel from "../models/PatientSchema";
import { DoctorDetailProp } from "../type/DoctorDetailProp";
import { patientDetailsProp } from "../type/PatientDetailProp";

export const DoctorDetails = async (req: any, res: any) => {
  try {
    const DoctorDetailPayload = req.body;
    const DoctorDetailParsed = DoctorDetailProp.safeParse(DoctorDetailPayload);

    if (!DoctorDetailParsed.success) {
      return res.status(404).json({ message: "Invalid info" });
      }
      
      if (req.user.role !== "doctor") {
          return res.status(404).json({ message: "User not allowed, you are not doctor" });
      }

    const { specialization, experience, availableDays, location } =
      DoctorDetailParsed.data;

    const doctor = await DoctorModel.create({
      user: req.user._id,
      specialization,
      experience,
      availableDays,
      location,
    });

    return res
      .status(200)
      .json({ message: "Doctor details added successfully", data: doctor });
  } catch (e) {
    console.error(e);
    return res.status(400).json({ message: "Internal server error" });
  }
};

export const PatientDetails = async (req: any, res: any) => {
  try {
    const patientPayload = req.body;
    const patientParsed = patientDetailsProp.safeParse(patientPayload);

    if (!patientParsed.success) {
      return res.status(400).json({ message: "Invalid patient info" });
    }

    if (req.user.role !== "patient") {
      return res.status(403).json({ message: "User not allowed, you are not a patient" });
    }

    const { age, gender, address, bloodGroup, medicalHistory } = patientParsed.data;

    const patient = await PatientModel.create({
      user: req.user._id,
      age,
      gender,
      address,
      bloodGroup,
      medicalHistory,
    });

    return res.status(200).json({ message: "Patient details added successfully", data: patient });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Internal server error" });
  }
};
