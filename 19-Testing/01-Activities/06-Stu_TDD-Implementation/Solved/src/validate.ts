export default class Validate {

  isValidUsername(username: string) {
    // TODO: Write code that checks if the username is less than 8 characters and returns false if so.
  
    if (username.length === 0) {
      throw new Error('Invalid Input');
    }

    if (username.length < 8) {
      return false;
    }

    if (username.length > 16) {
      return false;
    }

    // TODO: Write code the checks if the username contains all lowercase characters.
    // It should return true if it does, and false if not.

    // This regex pattern makes sure that a provided string is all lowercase
    const pattern = /^[a-z]*$/;
    return pattern.test(username);
  }

  isValidPassword(password: string) {
    // TODO: Write code that checks if the password is less than 8 characters and returns false if so.
  
    if (password.length === 0) {
      throw new Error('Invalid Input');
    }

    if (password.length < 8) {
      return false;
    }
  
    // TODO: Write code the checks if the password contains at least 1 uppercase, lowercase, and number.
    // It should return true if it does, and false if not.
  
    // This regex pattern makes sure that a provided string has at least 1 uppercase, lowercase, and number.
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
    return pattern.test(password);
  };
}


// Alternative Validate
// export default class Validate {

//   isValidUsername(username: string) {
//     // TODO: Write code that checks if the username is less than 8 characters and returns false if so.
  
//     if (username.length === 0) {
//       throw new Error('Invalid Input');
//     }

//     if (username.length < 8) {
//       return false;
//     }

//     if (username.length > 16) {
//       return false;
//     }

//     // TODO: Write code the checks if the username contains all lowercase characters.
//     let hasUpperCase = false;
//     let hasLowerCase = false;
//     let hasNumber = false;

//     for (let i = 0; i  < username.length; i ++) {
//       if (!hasUpperCase && username[i] === username[i].toUpperCase() && isNaN(Number(username[i]))) {
//         hasUpperCase = true;
//       }
//       if (!hasLowerCase && username[i] === username[i].toLowerCase() && isNaN(Number(username[i]))) {
//         hasLowerCase = true;
//       }
//       if (!hasNumber && !isNaN(Number(username[i])) && username[i] !== ' ') {
//         hasNumber = true;
//       }
//     }

//     if (hasUpperCase || hasNumber) {
//       return false;
//     }

//     if (hasLowerCase) {
//       return true;
//     }

//     return false;
//   }

//   isValidPassword(password: string) {
//     // TODO: Write code that checks if the password is less than 8 characters and returns false if so.
  
//     if (password.length === 0) {
//       throw new Error('Invalid Input');
//     }

//     if (password.length < 8) {
//       return false;
//     }
  
//     // TODO: Write code the checks if the password contains at least 1 uppercase, lowercase, and number.
//     let hasUpperCase = false;
//     let hasLowerCase = false;
//     let hasNumber = false;

//     for (let i = 0; i  < password.length; i ++) {
//       if (!hasUpperCase && password[i] === password[i].toUpperCase() && isNaN(Number(password[i]))) {
//         hasUpperCase = true;
//       }
//       if (!hasLowerCase && password[i] === password[i].toLowerCase() && isNaN(Number(password[i]))) {
//         hasLowerCase = true;
//       }
//       if (!hasNumber && !isNaN(Number(password[i])) && password[i] !== ' ') {
//         hasNumber = true;
//       }
//     }

//     if (hasUpperCase && hasLowerCase && hasNumber) {
//       return true;
//     }

//     return false;
//   };
// }