import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react"
import type { AuthProp } from "../../types/AuthType";





export default function Signup() {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("patient");

    const BACKEND_URL = import.meta.env.BACKEND_URL;

    const { mutate, isPending, error } = useMutation({
        mutationKey: ["auth"],
        mutationFn: async (AuthDetails: AuthProp) => {
            try {
                const res = await axios.post(`${BACKEND_URL}/api/user/signup`, { AuthDetails }, { withCredentials: true })
                return res.data;
            } catch (err) {
                console.error(err);
            }
        }
    })

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const AuthDetails: AuthProp = {
            fullname,
            email,
            password,
            role
        }
        mutate(AuthDetails);

    }

    const handleInput = (e: any) => {
        const { name, value } = e.target;
        if (name === 'fullname') setFullname(value);
        else if (name === 'email') setEmail(value);
        else if (name === 'password') setPassword(value);
        else if (name === 'role') setRole(value);
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Signup</label>
                    <div>
                        <label>Role</label>
                        <select title="role" name="role" value={role} onChange={handleInput}>
                            <option value="patient">Patient</option>
                            <option value="doctor">Doctor</option>
                        </select>
                    </div>
                    <div>
                        <label>Fullname</label>
                        <input
                            placeholder="Enter your fullname"
                            value={fullname}
                            name="fullname"
                            onChange={handleInput}
                        />
                    </div>
                    <div>
                        <label>Email</label>
                        <input
                            placeholder="Enter your Email"
                            value={email}
                            onChange={handleInput}
                            name="email"
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                            placeholder="Enter your password"
                            value={password}
                            name="password"
                            onChange={handleInput}
                        />
                    </div>
                    <div>
                        <button>
                            {isPending ? "Signing up..." : "Sign up"}
                        </button>
                        {error && <p className="text-red-500">Signup failed try again</p>}

                        <p>Already have an account <a href="/signin">Login</a></p>
                    </div>
                </form>
            </div>
        </div>
    )
}