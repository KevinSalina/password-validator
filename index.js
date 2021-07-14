const validatePassword = password => {
  if (checkMinLength(password) && checkCase(password)) return true
  return false
}


// Helper Functions
// Check Min Lenght is 8
const checkMinLength = password => password.length >= 8

// Check if includes at least one lower case and upper case letter
const checkCase = password => {
  let i = 0;
  let chr = null;
  let isOneLowerCase = null;
  let isOneUpperCase = null;

  while (i <= password.length) {
    chr = password.charAt(i)
    // Check to make sure current character is not a number
    if (isNaN(chr * 1)) {
      // If not a number, check if chr is lower or upper case
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

module.exports = validatePassword


const valid = 'P455W0RD!'
validatePassword(valid)


