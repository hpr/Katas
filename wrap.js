const wrap = (line, maxLen) => {
  if(typeof line !== "string") return null

  let output= ""
  let index = 0

  while(index<line.length){
    output+= line.slice(index,(index+maxLen)) + "\n"
    index+=maxLen
  }

  return output.slice(0,-1)
}
module.exports = wrap;
