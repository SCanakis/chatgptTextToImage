
// import './style.css';



const form = document.getElementById("form");

form.addEventListener('submit', async (e) => {
    // console.log("button clicked")
    e.preventDefault();
    showSpinner();
    const data = new FormData(form);
    
    const response = await fetch("http://localhost:8080/dream", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            prompt: data.get("prompt"),
        }),

    });

    if(response.ok) {
        const {image} = await response.json();
        // console.log("response recieved")
        const result = document.getElementById("image-container");
        result.innerHTML = `<img src="${image}" alt="Retro Placeholder" id="center-image" style="margin-left:auto; margin-right: auto;" >`;

    } else {
        const err = await response.text();
        alert(err);
        console.log(err);
    }

    hideSpinner();
});


function showSpinner() {
    const button = document.getElementById("submit-button");
    button.disabled = true;
    button.innerHTML = 'Squeezing Braincells <span class="spinner">🧠</span>'
}

function hideSpinner() {
    const button = document.getElementById("submit-button");
    button.disabled = false;
    button.innerHTML = "Generate!";
}