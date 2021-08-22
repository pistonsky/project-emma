//requiring path and fs modules
const path = require('path');
const fs = require('fs');
//joining path of directory 

const directoryPath = path.join(__dirname, '/src/assests/images/avatars');

const imageData = []

//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        if (file.indexOf("@") == -1 && file !== ".DS_Store") {
            imageData.push(file)
        }
    });
    fs.writeFileSync('./src/constants/images/index.json', JSON.stringify(
       [...imageData]
    , null, 4))
});


