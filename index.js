var fs = require('fs');
var path = require("path");
 
var pathName = "./folder";

//readdir
var readDir = fs.readdirSync(pathName);
//read files under folder
for(var i = 0; i < readDir.length; i++){
    //Get the current file's path
    var filePath = pathName + '/' + readDir[i];
    //read the data of the current file
    var data = fs.readFileSync(filePath,'utf-8')
    //if contains "Orange",print the file's name
    if(data.indexOf("Orange") > -1){
        console.log("files containing Orange:" + filePath);
    }
}
