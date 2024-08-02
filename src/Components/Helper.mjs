
const date = new Date();

/**
 * function to get the current date
 * @returns 
 */
export const getCurrentDate = () => {
    return date;
};

/**
 * function to check for the working hours
 * @returns 
 */
export const checkForWorkingHours = () => {
    const workingHours = {
        start : 9,
        end : 18
    };

    let currenyHourOfDay = date.getHours();
    if (currenyHourOfDay >= workingHours.start && currenyHourOfDay <= workingHours.end) {
        return true;
    }
    return false;
}

/**
 * function to get the day start and end time
 * @returns 
 */
export const getStartAndEndofDay = () =>{
    return {
        startDay : new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0),
        endDay : new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59, 999)
    }
}