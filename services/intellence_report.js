import DATABASE from "../DB/dataBase.js"

export function newIntellegenceReport(dataBase){
    DATABASE.push(dataBase);
};

export function removeReport(dataBase) {
    const currindex = DATABASE.indexOf(dataBase);
    if (currindex !== -1) {
        DATABASE.splice(currindex, 1);
    }
}

export function updateReport(dataBase) {
    const currindex = DATABASE.indexOf(dataBase);
    if (currindex !== -1) {
        const oldIntel = {...DATABASE[currindex]};
        const newIntel = {...oldIntel,...dataBase};
        DATABASE.splice(currindex, 1,newIntel);
    }
}

