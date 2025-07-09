
export const DoctorDetails = async (req: any, res: any) => {
    try {
        const DoctorDetailPayload = req.body;
        const DoctorDetailParsed = DoctorDetailProp.safeParse(DoctorDetailPayload);

        if (!DoctorDetailParsed.success) {
            return res.
        }


    } catch (e) {
        
    }
}