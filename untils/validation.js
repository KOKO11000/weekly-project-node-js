import { newIntellegenceReport} from "./objectsReport.js"
import {addReport,deleteReportById }from "../services/intellence_report.js"
import DATABASE from "../DB/dataBase.js";


export const validationReport = (personalId) =>{
    if (newIntellegenceReport.id in DATABASE) {
        console.log("id already exsit");
        
    }else{
        addReport(personalId)
    }
};





const weapons = ["guns", "knife", "axes"]
const newT = newIntellegenceReport("muhammad fagri", weapons,"very dengers terrorist");
console.log(newT);

