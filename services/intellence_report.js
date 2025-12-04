import DATABASE from "../DB/dataBase.js"
import{validateIdInDatabase}from "..untils/validateIdInDatabase.js"


export function addReport(report) {
    if (!report.id || !report.terroristName || !report.weapons || !report.text) {
        throw new Error("object need 4 params");        
    }
    DATABASE.push(report);
};
export function saveReport(report) {
    validateIdInDatabase(report.id)
    addReport(report)
    return report
}

export function removeReport(report) {
    const currindex = DATABASE.indexOf(report);
    if (currindex !== -1) {
        DATABASE.splice(currindex, 1);
    }
}

export function updateReport(report) {
    const currindex = DATABASE.indexOf(report);
    if (currindex !== -1) {
        const oldIntel = { ...DATABASE[currindex] };
        const newIntel = { ...oldIntel, ...report };
        DATABASE.splice(currindex, 1, newIntel);
    }
}

export function sortedReport(fieldName) {    
    

    return DATABASE.sort(fieldName)
}

export function searchReportById(id) {
    for (let i = 0; i < DATABASE.length; i++) {
        const report = DATABASE[i]

        if (report.id == id) {
            return report
        }
    };   
    throw Error("Id not found")
    
    
}

export function deleteReportById(id) {    
    let deleted
    for (let i = 0; i < DATABASE.length; i++) {
        if (DATABASE[i].id === id) {
            deleted = DATABASE.splice(i,1);
            console.log("id deleted...");
            break;
        };
    };
    if(!deleted){
        throw Error("id not found");       
    };
    return deleted
}
