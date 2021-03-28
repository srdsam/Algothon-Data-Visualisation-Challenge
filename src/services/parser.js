const csvFilePath='../data/data_rollingWindow.csv'
const csv=require('csvtojson')
const fs=require('fs')

async function parse() {
    return csv()
        .fromFile(csvFilePath)
        .then((jsonObj)=>{
            let data = JSON.stringify(jsonObj);
            fs.writeFileSync('../data/data_rollingWindow.json', data);
        })    
}

parse()
