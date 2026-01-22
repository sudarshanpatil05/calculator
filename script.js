const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let input = "";

// Loop through all buttons
buttons.forEach(button => {
    button.addEventListener("click", () => {

        if (button.innerText === "C") {
            input = "";
            display.value = "";

        } else if (button.innerText === "=") {
            try {
                input = eval(input);
                display.value = input;
            } catch {
                display.value = "Error";
            }

        } else {
            input += button.innerText;
            display.value = input;
        }
    });
});
