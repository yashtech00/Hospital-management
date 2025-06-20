import mongoose from "mongoose";


export function mongo() {
    const Mongo_URI = process.env.Mongo_URI;
    if (!Mongo_URI) {
        throw new Error("Mongodb url is invalid")
    }
    try {
        mongoose.connect(Mongo_URI)
            .then(() => {
            console.log("mongodb is connected");  
            })
            .catch(() => {
            console.log("mongodb is disconnected");
        })
    } catch (err) {
        console.error(err);
    }
}