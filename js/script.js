// define all variables
const qrImage = document.querySelector("img");
const input = document.querySelector("input");
const generateBtn = document.querySelector("#generate");
const downloadBtn = document.querySelector("#download");
const errorMsg = document.querySelector("#errorMsg");

// when user click generate button 
generateBtn.addEventListener("click", () => {
  if (input.value == "") {
    input.style.borderColor = "red";
    errorMsg.innerText = "Please enter your url";
  }
  const qrCode = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
  qrImage.src = qrCode;
});

// when user click download button
downloadBtn.addEventListener("click", async () => {
  if (input.value == "") {
    input.style.borderColor = "red";
    errorMsg.innerText = "Please enter your url";
  } else {
    const response = await fetch(qrImage.src);
    const blob = await response.blob();
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = "qrcode.jpg";
    downloadLink.click();
  }
});
