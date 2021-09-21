//Note don't change indentation of this file
// we use string literals when creating ts file, this is done to make syntax appera on next line

//requiring path and fs modules
const path = require('path');
const fs = require('fs');
//joining path of directory 

const directoryPath = path.join(__dirname, '/src/assests/images/avatars');
const imagesData = []
let codeStr = ''
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

const imagesData = [`

imagesData.forEach((el, index) => {
    codeStr = codeStr + `
 {
    name: "${el.name}",
    path: ${el.path}, 

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
        console.log("The file was saved!");
    });
})


