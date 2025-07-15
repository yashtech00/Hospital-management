import { useState } from "react"


interface DoctorProp {

    specialization: String,
    experience: Number,
    availableDays: String,
    location: String,
}


export default function DoctorInfo() {

    const [formData, setFormData] = useState<DoctorProp>({
        specialization: "",
        experience: 0,
        availableDays: "",
        location: "",
    })




    return (
        <div>
            <div>
                <form>
                    <div>
                        <label>Specialization</label>
                        <input
                            placeholder="Enter your specialization"
                            onChange={(e)=>{prev=>(prev,formData.specialization)} }
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}