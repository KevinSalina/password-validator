// Main Validate Password Function
const validatePassword = password => {
  if (checkMinLength(password) && checkCase(password) && checkNumeric(password) && checkSpecial(password)) return true

  return false
}

// Helper Functions

// Check Min Lenght is 8
const checkMinLength = password => password.length >= 8

// Check if includes at least one lower case and upper case letter
const checkCase = password => {
  let i = 0
  let chr = null
  let isOneLowerCase = null
  let isOneUpperCase = null

  while (i <= password.length) {
    chr = password.charAt(i)
    // Check to make sure current character is not a number
    if (isNaN(chr * 1)) {
      // If not a number, check whether lower or upper case
      if (chr === chr.toLowerCase() && chr !== chr.toUpperCase()) {
        isOneLowerCase = true
      } else if (chr === chr.toUpperCase() && chr !== chr.toLowerCase()) {
        isOneUpperCase = true
      }
    }
    i++
  }
  if (isOneLowerCase && isOneUpperCase) return true

  return false
}

// Check if one character is numeric
const checkNumeric = password => {
  const numerics = '0123456789'
  // let isOneNumeric = null

  for (let i = 0; i < password.length; i++) {
    if (numerics.indexOf(password[i]) >= 0) {
      return true
    }
  }

  return false
}

// Check if one character is special
const checkSpecial = password => {
  const iChars = '~`!#$%^&*+=-[]\\\';,/{}|":<>?'

  for (let i = 0; i < password.length; i++) {
    if (iChars.indexOf(password[i]) >= 0) {
      return true
    }
  }

  return false
}


module.exports = validatePassword



