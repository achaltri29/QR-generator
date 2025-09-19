function generateQR() {
    let qrText = document.getElementById("qrText").value;
    
    if (qrText.trim() === "") {
        alert("Please enter text or a URL");
        return;
    }
    
    const placeholder = document.getElementById("placeholder");
    const qrCode = document.getElementById("qrCode");
    const downloadBtn = document.getElementById("downloadBtn");
    

    placeholder.textContent = "Generating...";
    
  
    qrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(qrText)}`;
    
    qrCode.onload = function() {

        placeholder.classList.remove("visible");
        placeholder.classList.add("hidden");
        
        qrCode.classList.remove("hidden");
        qrCode.classList.add("visible");
        
        downloadBtn.classList.remove("hidden");
        downloadBtn.classList.add("visible");
    };
}

function downloadQR() {
    const qrCode = document.getElementById("qrCode");
    

    const link = document.createElement("a");
    link.href = qrCode.src;
    link.download = "qrcode.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


document.getElementById("qrText").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        generateQR();
    }
});
