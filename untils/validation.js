import { newIntellegenceReport} from "./objectsReport.js"
import {addReport,deleteReportById }from "../services/intellence_report.js"
import DATABASE from "../DB/dataBase.js";

function validateIdInDatabase(id) {
     const exsists = DATABASE.find(Report => Report.id === id)
        if (!exsists) {
            return true
        }else{
            throw new Error("id already exsist in DATABASE");   
        }
}
   
    






const weapons = ["guns", "knife", "axes"]
const newT = newIntellegenceReport("muhammad fagri", weapons,"very dengers terrorist");
console.log(newT);

