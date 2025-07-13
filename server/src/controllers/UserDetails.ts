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

    const { specialization, experience, availableDays, location } =
      DoctorDetailPayload.data;

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
    const patientPayload = req.data();
    const patientParsed = patientDetailsProp.safeParse(patientPayload);

    if (!patientParsed.success) {
      return res.status(404).json({ message: "invalid info" });
    }

    const { age, gender, address, bloodGroup, medicalHistory } =
      patientPayload.data;
    const patient = await PatientModel.create({
      user: req.user._id,
      age,
      gender,
      address,
      bloodGroup,
      medicalHistory,
    });
    return res
      .status(200)
      .json({ message: "patient details added successfully" });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Internal server error" });
  }
};
