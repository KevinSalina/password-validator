// Main Validate Password Function
const validatePassword = password => {
  let isMinLength = checkMinLength(password)
  let isLowerCase = false
  let isUpperCase = false
  let isNumeric = false
  let isSpecial = false

  for (let i = 0; i < password.length; i++) {
    !isLowerCase ? isLowerCase = checkLowerCase(password[i]) : isLowerCase = true
    !isUpperCase ? isUpperCase = checkUpperCase(password[i]) : isUpperCase = true
    !isNumeric ? isNumeric = checkNumeric(password[i]) : isNumeric = true
    !isSpecial ? isSpecial = checkSpecial(password[i]) : isSpecial = true
  }

  return (isMinLength && isLowerCase && isUpperCase && isNumeric && isSpecial)
}

// Criteria Functions
// Min Length is 8
const checkMinLength = password => password.length >= 8

// One character is lower case
const checkLowerCase = chr => {
  return (chr === chr.toLowerCase() && chr !== chr.toUpperCase())
}

// One character is upper case
const checkUpperCase = chr => {
  return (chr === chr.toUpperCase() && chr !== chr.toLowerCase())
}

// One character is numeric
const checkNumeric = chr => {
  const numerics = '0123456789'

  return (numerics.indexOf(chr) >= 0)
}

// One character is special
const checkSpecial = chr => {
  const iChars = '~`!#$%^&*+=-[]\\\';,/{}|":<>?'

  return (iChars.indexOf(chr) >= 0)
}

module.exports = validatePassword







