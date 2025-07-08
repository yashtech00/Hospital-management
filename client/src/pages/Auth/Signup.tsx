import { useState } from "react"




export default function Signup() {


    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    return (
        <div>
            <div>
                <form>
                    <span>Signup</span>
                    <div>
                        <span>Role</span>
                        <select title="role">
                            <option>Patient</option>
                            <option>Doctor</option>
                       </select>
                    </div>
                    <div>
                        <span>Fullname</span>
                        <input
                            placeholder="Enter your fullname"
                            value={fullname}
                            title="fullname"
                        /> 
                    </div>
                     <div>
                        <span>Email</span>
                        <input
                            placeholder="Enter your Email"
                            value={email}
                            title="fullname"
                        /> 
                    </div>
                     <div>
                        <span>Password</span>
                        <input
                            placeholder="Enter your password"
                            value={password}
                            title="fullname"
                        /> 
                    </div>
                </form>
           </div>
        </div>
    )
}