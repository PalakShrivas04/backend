import mongoose from "mongoose";

const subscriptionSchema = new Schema({
    subscriber: {
        type: Schema.Types.objectId, //one who is subscribing
        ref:"User"
    },
    channel: {
        type: Schema.Types.objectId, //one to whom subscriber is subscribing
        ref:"User"
    }
}, {
    timestamps: true
});



export const Subscription=mongoose.model("Subscription",subscriptionSchema)