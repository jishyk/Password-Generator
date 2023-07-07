
  var generateButton = document.getElementById("generate");
  var passwordInput = document.getElementById("password");
  
  generateButton.addEventListener("click", function() {
    var length = prompt("Enter the length of the password (8-128 characters):");

    var includeUppercase = confirm("Include uppercase characters?");
    var includeSpecial = confirm("Include special characters?");

    var includeLowercase = confirm("Include lowercase characters?");
    var includeNumeric = confirm("Include numeric characters?");

    // This is the length the password can be
    if (!(length && length >= 8 && length <= 128)) {
      alert("Incorrect password length. Try again.");
      return;
    }
  
    if (!includeUppercase &&  !includeLowercase &&  !includeNumeric &&  !includeSpecial) {
      alert("Please select at least one of the character types.");
      return;
    }
    // This is the paswword info thats generated
    var password = generatePassword(length, includeLowercase, includeUppercase, includeNumeric, includeSpecial);

    passwordInput.value = password;
  });

  function generatePassword(length, includeUppercase, includeNumeric, includeLowercase, includeSpecial) {
    var characters = "";
    var password = "";
    
    if (includeLowercase) {
      characters += "abcdefghijklmnopqrstuvwxyz";
    }

    if (includeUppercase) {
      characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (includeNumeric) {
      characters += "0123456789";
    }

    if (includeSpecial) {
      characters += "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    }

   for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
      }
  
      return password;
  }
     