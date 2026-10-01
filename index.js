
export function Base10_to_BaseAny(base10, targetBase) {
  let result = []
  let cond = (base10 / targetBase) >= 1

  let qismet = base10

  while (cond) {
    let qaliq = (qismet % targetBase)
    result.unshift(qaliq)
    qismet = Math.floor(qismet / targetBase)

    if (qismet < targetBase) {
      result.unshift(qismet)
      break
    }
  }

  return result.length == 0 ? [base10] : result

}

export function conversion(baseAnyArray, targetDigits) {
  let output = ""
  for (let x of baseAnyArray) {
    output += targetDigits[x]
  }
  return output
}
