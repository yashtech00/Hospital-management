import { Github, Star } from "lucide-react";
import { ContainerTextFlip } from "./ui/container-text-flip";

export default function Hero() {
    return (
        <div className="flex justify-center">
            <main className="mt-16 p-4 text-white text-center w-[70%] space-y-10">
                <div className=" flex justify-center">
                    <p className="bg-black w-[22%] py-1.5 px-2 flex justify-center text-white border-2 border-stone-800 rounded-full "><Github /><span className="flex items-center text-md px-2">Star us on Github</span> <Star /></p>
                    </div>
                <ContainerTextFlip
                    words={["Secure", "Seamless", "Insightful", "Modern", "Efficient", "Connected"]}
                />
               
                <h1 className="text-6xl font-bold">Smart. Secure. Seamless Healthcare.</h1>
                <p className="mt-8 text-lg text-stone-400">"MediVault streamlines healthcare with secure records, easy appointments, and complete health insights.</p>
                <button className="text-white bg-primary p-4 rounded-full mt-20 text-lg font-medium">Get Started</button>
            </main>
        </div>
    )
}