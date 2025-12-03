// import {addReport,removeReport,updateReport} from "../services/intellence_report.js";
import {nanoid} from "nanoid"
export const newIntellegenceReport = (terroristName, weapon, text)=>{
    if (terroristName == "") {
        terroristName = "Muhammad - unknown last name";
    };
    const newReport = {
        id : nanoid(),
        terroristName,
        weapon,
        text 
    }; 
    return newReport
};



 