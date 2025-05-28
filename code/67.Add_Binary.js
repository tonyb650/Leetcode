/*Example 1:
Input: a = "11", b = "1"
Output: "100"

Example 2:
Input: a = "1010", b = "1011"
Output: "10101"
*/

function addBinary (a,b) {
  let p = 0
  let carry = 0
  a = a.split("").reverse().join("")
  b = b.split("").reverse().join("")
  let result = ""
  while (p < a.length || p < b.length || carry > 0) {
    let aBit = p < a.length ? Number(a[p]) : 0
    let bBit = p < b.length ? Number(b[p]) : 0
    let bits = aBit + bBit + carry
    if (bits % 2) {
      result += "1"
    } else {
      result += "0"
    }
    carry = bits > 1 ? 1 : 0
    p++    
  }
  return result.split("").reverse().join("")
}
console.log(addBinary("0", "0"))