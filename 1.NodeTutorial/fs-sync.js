const {readFileSync,writeFileSync}=require('fs')

const first=readFileSync('./content/first.txt','utf-8')

const second=readFileSync('./content/second.txt','utf-8')
//readFile doesn't create a file , if file is not present

writeFileSync('./content/result-sync.txt',`Here is the result :
 ${first},${second}`,{flag:'a'})
//In writeFileSync , we overwrite if already present or create a new file if not present


console.log(first,second)