import { checkForWorkingHours, getCurrentDate, getStartAndEndofDay } from "../Components/Helper.mjs";
import { transcationCollection } from "../model/Transcation.mjs";

const TOTAL_TRANSCATION_PER_DAY = 180;

const TOTAL_ACCOUNT_NUMBER = 13; 

export const addTranscationData = async(request, response) => {
    try {
        let {accountId, status, amount, type} = request.body;

        if (!accountId || !status || !amount || !type) {
            response.status(404).json({
                success : false,
                message : `Required field 'accountId', 'status', 'amount', 'type' is missing!`
            });
        }
        let totalTransPerDay = Math.floor(TOTAL_TRANSCATION_PER_DAY / TOTAL_ACCOUNT_NUMBER);
        let {startDay, endDay } = getStartAndEndofDay();
        let currentTransCount = await transcationCollection.countDocuments({
            account_id : accountId,
            transcation_date : {
                $gte : startDay,
                $lte : endDay
            }
        });
        //Check for the working hours and current date transcation count
        if (checkForWorkingHours() && currentTransCount <= totalTransPerDay) {
            let transcation_date = getCurrentDate();
            await transcationCollection.create({
                account_id : accountId,
                amount,
                status,
                type,
                transcation_date    
            });
            response.status(200).json({success : true, mesaage : "Transcation added successfully!"});
        }
        response.status(200).json({success : false, mesaage : "Sorry, the transcation could not be completed"});
    } catch (error) {
        response.status(400).json({
            success : false,
            message : error.message
        });
    }
};