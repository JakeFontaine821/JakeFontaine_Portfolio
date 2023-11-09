let list_element = document.querySelectorAll(".resume-subsection li");

const line_delay = 10;
let timer = 0;
let lines_typing = 1;
const interval = 1000/60; // 60 times a second
const page_load_delay = 200;
const number_of_lines = 7;

function LineController() {
    this.line = 0;
    this.hold_text = null;
    this.current_letter = 0;

    this.SetLine = function(_line) {
        this.line = _line;

        this.hold_text = list_element[_line].innerHTML;
        list_element[_line].innerHTML = "";
    }

    this.AddLetter = function() {
        if(this.current_letter < this.hold_text.length) {
            list_element[this.line].innerHTML += this.hold_text[this.current_letter];
            this.current_letter += 1;
        }        
    }
}

let line_controllers = []
for (let i = 0; i < list_element.length; i++) {
    let newController = new LineController();
    newController.SetLine(i);

    line_controllers.push(newController);
}

function Animate() {
    timer += 1;

    if (lines_typing < list_element.length && timer >= line_delay) {
        lines_typing += 1;
        timer -= line_delay;
    }

    for (let i = 0; i < lines_typing; i++) {
        line_controllers[i].AddLetter();        
    }
}

setTimeout(() => {
    setInterval(Animate, interval);
}, page_load_delay)

/*****************************************************************************************************************/
/*****                                           Iteration 2                                                 *****/
/*****************************************************************************************************************/

// let hold_text = [];
// for (let i = 0; i < list_element.length; i++) {
//     hold_text.push(list_element[i].innerHTML);
//     list_element[i].innerHTML = "";    
// }

// let current_line = 0;
// let current_letter = 0;

// function Animate(_line) {
//     if(timer >= typing_speed && current_line < list_element.length) {
//         list_element[current_line].innerHTML += hold_text[current_line][current_letter];

//         current_letter += 1;
//         if(current_letter >= hold_text[current_line].length) {
//             current_line += 1;
//             current_letter = 0;
//         }

//         timer -= typing_speed;
//     }
//     else {
//         timer += 1;
//     }
// }

// setTimeout(() => {
//     setInterval(Animate, interval);
// }, page_load_delay)

/*****************************************************************************************************************/
/*****                                            Iteration 1                                                *****/
/*****************************************************************************************************************/

// let list_element = document.querySelector(".resume-subsection li");

// const typing_speed = 10;
// let timer = 0;
// const interval = 60/1000;
// const page_load_delay = 200;
// const number_of_lines = 7;

// let hold_text = list_element.innerHTML;
// list_element.innerHTML = "";

// let current_letter = 0;
// let line_length = hold_text.length;

// function Animate() {
//     if(timer >= typing_speed && current_letter < line_length) {
//         list_element.innerHTML += hold_text[current_letter];
//         current_letter += 1;

//         timer -= typing_speed;
//     }
//     else {
//         timer += 1;
//     }
// }

// setTimeout(() => {
//     setInterval(Animate, interval);
// }, page_load_delay)