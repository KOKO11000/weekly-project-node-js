import DATABASE from "../DB/dataBase.js"

export function addReport(report) {
    DATABASE.push(report);
};

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
        if (id == i[id]) {
            deleted = DATABASE[id].splice(i,1);
            console.log("id deleted...");
        };
    };
    if(!deleted){
        throw Error("id not found");       
    };
    console.log("id deleted...");
    return deleted
}
