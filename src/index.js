module.exports = function check(str, bracketsConfig) {
  let temp = []
  let index
  for (let i = 0; i < str.length; i++){
    if (temp.find(item => item == str[i])){
      index = temp.findIndex(item => item == str[i])
      temp.splice(index,1)
    } 
    else {
      temp.push(str[i])
    }
  }
  if (temp.length != 0) return false
  else return true
}
