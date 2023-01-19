const path=require('path')
//The path module provides utilities for working with file and directory paths. 

//console.log(path.sep)

const filePath=path.join('/content','subfolder','test.txt')
//The path.join() method joins all given path segments together 

//console.log(filePath)
//console.log(path.basename(filePath))
//The path.basename() method returns the last portion of a path

const absolute=path.resolve(__dirname,'content','subfolder','test.text')
console.log(absolute)