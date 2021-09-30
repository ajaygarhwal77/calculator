const buttons = document.querySelectorAll(`button`);
const displayScreen = document.querySelector(`.displayscreen`);
let equation = 0;
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener(`click`, function (e) {
        const buttonText = e.target.textContent;
        if (buttonText === `c`) {
            displayScreen.value = ``;
            equation = 0;
        } else if (buttonText === `=`) {
            equation = eval(displayScreen.value);
            displayScreen.value = equation;
        } else {
            equation += buttonText;
            displayScreen.value += buttonText;
        };
    });
};
