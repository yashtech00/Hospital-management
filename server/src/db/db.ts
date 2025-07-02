import mongoose from "mongoose";

export function mongo() {
    const Mongo_URI = process.env.Mongo_URI;
    console.log(Mongo_URI,"mongo url");
    if (!Mongo_URI) {
        throw new Error("Mongodb url is invalid")
    }
    try {
        mongoose.connect(Mongo_URI)
            .then(() => {
            console.log("mongodb is connected");  
            })
            .catch((e) => {
                console.log("mongodb is disconnected", e);
                throw e;
        })
    } catch (err) {
        console.error(err);
        throw err;
    }
}