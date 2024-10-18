// Set up Variable
let staffId = document.getElementById("staffId");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");

// Change language
// Set up language
let lang = {
    eng: {
        title: "Reset password",
        staffPh: "Staff id",
        passwordPh: "New password",
        confirmPasswordPh: "Confirm password",
        confirm: "Confirm",
        back: "Go back"
    },
    thai: {
        title: "รีเซ็ตรหัสผ่าน",
        staffPh: "ไอดีพนักงาน",
        passwordPh: "รหัสผ่านใหม่",
        confirmPasswordPh: "ยืนยันรหัสผ่าน",
        confirm: "ยืนยัน",
        back: "ย้อนกลับ"
    }
}
let langContainer = document.getElementById("langContainer");
let title = document.getElementById("title");
let confirmBtn = document.getElementById("confirmButton");
let back = document.getElementById("back");
let en = document.getElementById("en");
let th = document.getElementById("th");
// Set default value
if (langContainer.getAttribute("data-value") == "en") {
    en.style.color = "#CF2D1E";
    th.style.color = "black";
}
else {
    th.style.color = "#CF2D1E";
    en.style.color = "black";
}
// English
en.onclick = function() {
    langContainer.setAttribute("data-value", "en");
    en.style.color = "#CF2D1E";
    th.style.color = "black";
    title.innerHTML = lang.eng.title;
    staffId.placeholder = lang.eng.staffPh;
    password.placeholder = lang.eng.passwordPh;
    confirmPassword.placeholder = lang.eng.confirmPasswordPh;
    confirmBtn.innerHTML = lang.eng.confirm;
    back.innerHTML = lang.eng.back;
}
// Thai
th.onclick = function() {
    langContainer.setAttribute("data-value", "th");
    th.style.color = "#CF2D1E";
    en.style.color = "black";
    title.innerHTML = lang.thai.title;
    staffId.placeholder = lang.thai.staffPh;
    password.placeholder = lang.thai.passwordPh;
    confirmPassword.placeholder = lang.thai.confirmPasswordPh;
    confirmBtn.innerHTML = lang.thai.confirm;
    back.innerHTML = lang.thai.back;
}


// Eye icon in password input type
let eyeIcon1 = document.getElementById("passIcon1");
let eyeIcon2 = document.getElementById("passIcon2");
// New password field
eyeIcon1.addEventListener("click", function(){
    if (password.getAttribute("type") == "password") {
        eyeIcon1.setAttribute("src", "/img/visible-icon.svg");
        password.setAttribute("type", "text");
    } else {
        eyeIcon1.setAttribute("src", "/img/hidden-icon.svg");
        password.setAttribute("type", "password");
    }
})
// Confirm password field
eyeIcon2.addEventListener("click", function(){
    if (confirmPassword.getAttribute("type") == "password") {
        eyeIcon2.setAttribute("src", "/img/visible-icon.svg");
        confirmPassword.setAttribute("type", "text");
    } else {
        eyeIcon2.setAttribute("src", "/img/hidden-icon.svg");
        confirmPassword.setAttribute("type", "password");
    }
})


// Confirm Button
confirmBtn.onclick = function() {
    let staff = staffId.value;
    let nPassword = password.value;
    let cPassword = confirmPassword.value;
    let errorMessage = document.getElementById("errorMessage");  
    // Error text function
    function errorAlert(enError, thError) {
        errorMessage.style.visibility = "visible";
        if (langContainer.getAttribute("data-value") == "en") {
            errorMessage.textContent = enError;
        } else {
            errorMessage.textContent = thError;
        }
        setTimeout(() => {
            errorMessage.style.visibility = "hidden";
        }, 3000)
    }
    // Check statement
    // All fields are not entered
    if (!staff || !nPassword || !cPassword) {
        errorAlert("Please fill all fields", "กรุณากรอกข้อมูลให้ครบทุกช่อง");
        return;
    }
    // Password and Confirm password are not reach min length
    if (nPassword.length < 6 || cPassword.length < 6 || nPassword.length > 12 || cPassword.length > 12) {
        errorAlert("Password must be at 6 - 12 characters long", "รหัสผ่านและยืนยันรหัสผ่านต้องมีความยาว 6 - 12 ตัวอักษร");
        return;
    }
    // Password and Confirm password are match
    if (nPassword == cPassword) {
        // Go to Dashboard page
    } 
    // Password and Confirm password aren't match
    else {
        errorAlert("Password do not match", "รหัสผ่านไม่ตรงกัน");
    }
};