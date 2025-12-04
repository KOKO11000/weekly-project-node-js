import {addReport,removeReport,updateReport} from "./intellence_report.js";
import {nanoid} from "nanoid"
export const newIntellegenceReport = (terroristName, weapons, text)=>{
    if (terroristName == "") {
        terroristName = "Muhammad - unknown last name";
    };
    if (typeof weapons === "string") {
        weapons = [weapons]
    }else if (Array.isArray(weapons)) {

    } else {
        throw new Error("weapons nmust be a string or an array")
    }
    const newReport = {
        id : nanoid(),
        terroristName,
        weapons,
        text 
    }; 
    return newReport
};



 