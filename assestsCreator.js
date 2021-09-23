//Note don't change indentation of this file
// we use string literals when creating ts file, this is done to make syntax appera on next line

//requiring path and fs modules
const path = require('path');
const fs = require('fs');
//joining path of directory 

const dummyText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
const directoryPath = path.join(__dirname, '/src/assests/images/avatars');
const imagesData = []

const dummyProfession = {
    "1": "Writer", 
    "2": "Content Writer", 
    "3": "Sales Representative",
    "4": "Nurse", 
    "5": "Sales Manager", 
    "6": "Technical recruiter", 
    "7": "Software Engineer", 
    "8": "Tech lead", 
};
let codeStr = `import {ProfileData} from "./types"
`
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        if (file !== ".DS_Store" && file.indexOf("@") === -1 ) {
            let imageImportPath = file.split(".")[0].split(' ').join('')
            let name = file.split(' ')[0]


            codeStr = codeStr + `import ${imageImportPath} from "./avatars/${file}";
`             
            if (file.indexOf("@") == -1) {
                imagesData.push({
                    "name": name,
                    "path": imageImportPath
                })
            } 
        }
    });
    codeStr = codeStr + `

const imagesData:ProfileData[] = [`

imagesData.forEach((el, index) => {
    const professionKey = index % 10
    codeStr = codeStr + `
 {
    name: "${el.name}",
    path: ${el.path}, 
    info: "${dummyText}",
    profession: "${dummyProfession[professionKey] || "Operations Manager"}"
 }`
if (index !== imagesData.length  -1) codeStr = codeStr + ','
})

codeStr = codeStr + `
]

export default imagesData
` 
    fs.writeFile('./src/assests/images/index.ts', codeStr, 'utf8', function(err) {
        if (err) {
          return console.log(err);
        }
        console.log("Assests file was created!");
    });

const imageDataType = `
import {ImageSourcePropType} from 'react-native'

export interface ProfileData {
    name: string
    path: ImageSourcePropType
    info: string, 
    profession: string
}
`    
    fs.writeFile('./src/assests/images/types.ts', imageDataType, 'utf8', function(err) {
        if (err) {
          return console.log(err);
        }
        console.log("Assests types file was created!");
    });

})




