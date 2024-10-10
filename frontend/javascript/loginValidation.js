function validateAccount(f) {
    if (f.name.value.trim() === "") {
      error1.hidden = false;
      return false;
    } else if (f.email.value.trim() === "") {
      error2.hidden = false;
      return false;
    } else if (f.password.value.trim() === "") {
      error3.hidden = false;
      return false;
    } else if (f.password.value !== f.confirm.value) {
      error4.hidden = false;
      return false;
    } 
    return true;
}

function validateLogin(f) {
    if (f.email.value.trim() === "") {
        error1.hidden = false;
        return false;
    } else if (f.password.value.trim() === "") {
        error2.hidden = false;
        return false;
    } 
    return true;
}