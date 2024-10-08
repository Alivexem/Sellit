const submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const bank = document.getElementById("bank").value;
    const account = document.getElementById("account").value;
    const amount = document.getElementById("amount").value;
    if (amount == "") {
        document.getElementById("amount").style.border = "3px solid red"
        alert("PLEASE INPUT AMOUNT!")
        setTimeout(() => {
            document.getElementById("amount").style.border = "none"
        }, 10000)
    }

   

    if (name !== "" && bank !== "") {
        if (account !== "" && amount !== "") {
            document.querySelector(".now").style.display = "flex";
            document.querySelector(".form-container").style.display = "none";
            document.getElementById("spin").classList.add("spinner");
            setTimeout(() => {
                document.getElementById("spin").style.display = "none";
                document.querySelector(".now").style.display = "none";
                const blink = document.querySelector(".blink");
                let array = ["transparent", "#ff8800"];
                let count = 0;
                blink.style.height = "15px";
                blink.style.width = "15px";
                blink.style.borderRadius = "50%";
                blink.style.marginTop = "50px";
                blink.style.marginBottom = "10px";
                const interval = setInterval(() => {
                    let index = count % array.length;
                    blink.style.backgroundColor = array[index];
                    count++;
                }, 500);

                function displayElement(id) {
                    document.getElementById("processing").style.display = "none";
                    document.getElementById("running").style.display = "none";
                    document.getElementById("generating").style.display = "none";
                    document.getElementById("completed").style.display = "none";

                    document.getElementById(id).style.display = "block";
                }

                setTimeout(() => {
                    displayElement("processing");

                    setTimeout(() => {
                        displayElement("running");

                        setTimeout(() => {
                            displayElement("generating");

                            setTimeout(() => {
                                displayElement("completed");
                                clearInterval(interval);
                                blink.style.backgroundColor = "#70ff15";
                            }, 4000);
                        }, 5000);
                    }, 4000);
                }, 0);
            }, 5000); // Added missing closing brace
        }
    }
}); // Added missing closing brace


document.getElementById('copy-button').addEventListener('click', function() {
    localStorage.setItem("click","real")
    var textToCopy = document.getElementById('text-to-copy').innerText;
    navigator.clipboard.writeText(textToCopy).then(function() {
        document.getElementById('copy-button').style.color = "white"
        document.getElementById('copy-button').style.background = "green"
        document.getElementById('copy-button').innerText = "copied successfully"
        setTimeout(() => {
            document.getElementById('copy-button').style.color = "black"
        document.getElementById('copy-button').style.background = "white"
        document.getElementById('copy-button').innerText = "copy address"
        },8000)
    }).catch(function(err) {
        console.error('Could not copy text: ', err);
    });
});
