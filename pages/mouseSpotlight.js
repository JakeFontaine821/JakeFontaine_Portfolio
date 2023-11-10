const blob = document.querySelector(".blob");
const blob_radius = 250;

let maxWidth = window.innerWidth;
let maxHeight = window.innerHeight;

let destinationX = 0;
let destinationY = 0;

// Set a corner variable for anchor points [x, y]
let quad_1_corner = [maxWidth, 0];
let quad_2_corner = [0, 0];
let quad_3_corner = [0, maxHeight];
let quad_4_corner = [maxWidth, maxHeight];

let current_quad = [2, 0];
let destination_quad = [0, 0];
// Going counter clockwise starting top right
let position_collection = [[1, 0], [2, 0], [2, 1], [3, 1], [3, 0], [4, 0], [4, 1], [1, 1]]

document.body.onpointermove = event => {
    /*********************************************************************/
    /*                         Set up Variables                          */

    const {clientX, clientY} = event;

    let left_of_screen = clientX <= maxWidth / 2 ? true : false;
    let top_of_screen = clientY <= maxHeight / 2 ? true : false;

    let xDist = maxWidth - clientX;
    let yDist = maxHeight - clientY;

    /*********************************************************************/
    /*                         Find Destination                          */

    switch(top_of_screen){
        case true:
            if(left_of_screen){ 
                // Left == true && Top == true
                if(clientY > clientX) {
                    // Closer to Left than Top
                    destinationX = 0;
                    destinationY = clientY;

                    destination_quad = [2, 1];
                }
                else{
                    // Closer to Top than Left
                    destinationX = clientX;
                    destinationY = 0;

                    destination_quad = [2, 0];
                }
                break;
            }

            // Left == false && Top == true
            // Need to use xDist instead of clientX
            if(clientY > xDist) {
                // Closer to Right than Top
                destinationX = maxWidth;
                destinationY = clientY;

                destination_quad = [1, 1];
            }
            else{
                // Closer to Top than Right
                destinationX = clientX;
                destinationY = 0;

                destination_quad = [1, 0];
            }
            break;

        case false:
            // Need to use yDist instead of clientY
            if (left_of_screen) {
                // Left == true && Top == false

                if(yDist > clientX) {
                    // Closer to Left than Bottom
                    destinationX = 0;
                    destinationY = clientY;

                    destination_quad = [3, 1];
                }
                else{
                    // Closer to Bottom than Left
                    destinationX = clientX;
                    destinationY = maxHeight;

                    destination_quad = [3, 0];
                }
                break;
            }

            // Left == false && Top == false
            // Need to use xDist instead of clientX
            if(yDist > xDist) {
                // Closer to Right than Bottom
                destinationX = maxWidth;
                destinationY = clientY;

                destination_quad = [4, 1];
            }
            else{
                // Closer to Bottom than Right
                destinationX = clientX;
                destinationY = maxHeight;

                destination_quad = [4, 0];
            }
            break;
    }
    /*********************************************************************/
    /*                             Animation                             */

    blob.animate({
        left: `${destinationX}px`,
        top: `${destinationY}px`
    }, {duration: 1000, fill: "forwards", easing: "ease-in-out" })
}

/*****************************************************************************************************************/
/*****                                 Resizing the spotlight bounds                                         *****/
/*****************************************************************************************************************/

function ResizeSpotlightBounds() {
    maxWidth = window.innerWidth;
    maxHeight = window.innerHeight;
}

window.addEventListener("resize", () => {
    ResizeSpotlightBounds();
})