import mongoose from "mongoose";

const transcationSchema =  new mongoose.Schema(
    {
        account_id : {
            type : Number,
            required : true
        },
        transcation_date : {
            type : Date,
            required : true
        },
        amount : {
            type : Number,
            required : true,
        },
        type : {
            type : String,
            required : true
        },
        status : {
            type : String,
            required : true
        }
    },
    {
        versionKey : false,
        timestamps : true
    }
);

export const transcationCollection = mongoose.model('transcations', transcationSchema);

