function generateOTP(){
    const emailValue = document.querySelector("#userEmail")
    const otpSection = document.querySelector(".otp-section")[0]
    const otpValue = Math.floor(Math.random()*90000+10000)
    const emailBody = `<h2>Your OTP is </h2>${otpValue}`
    Email.send({
        SecureToken : "cf9602e8-5d1a-44af-a15c-1bf8b0367d4b",
        To : emailValue.value,
        From : "flipkart333@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => {
        if(message === "OK"){
            alert("OTP sent to your Email"+ emailValue.value)
            otpSection.style.display = "flex"
        }
      }
    );

}