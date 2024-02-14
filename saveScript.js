//Instead of leaving it as comments in my script.js im going to leave the code here in case I ever need it again

/*****************************************************************************************************************/
/*****                       ADDING THE MOVE OVER EVENT TO VEGGIE SLAM PAGE IMAGES                           *****/
/*****************************************************************************************************************/
// const image_area = background.querySelector(".Veggie-Slam .page-image-section"),
//       project_images = background.querySelectorAll(".Veggie-Slam .project-image"),
//       image_starting_width = project_images[0].offsetWidth;

// let usable_area = image_area.offsetWidth - 40; // Because of 20px padding on either side
// usable_area -= (((project_images.length - 1) * image_starting_width) + ((project_images.length - 1) * 5)) // Account for other buttons

// for (let i = 0; i < project_images.length; i++)
// {
//     project_images[i].addEventListener("mouseover", () =>{
//         project_images[i].animate(
//             { 
//                 width: `${usable_area}px`,
//                 boxShadow: "-8px 8px 15px black" 
//             },
//             { duration: 100, fill: "forwards"}
//         );
//     })

//     project_images[i].addEventListener("mouseout", () =>{
//         project_images[i].animate(
//             { 
//                 width: `${image_starting_width}px`,
//                 boxShadow: "0px 0px 0px black" 
//             },
//             { duration: 100, fill: "forwards"}
//         );
//     })
// }


/*****************************************************************************************************************/
/*****                        ADDING MOUSE OVER EVENT TO ALL PROJECTS, HAD JITTER                            *****/
/*****************************************************************************************************************/
// Define a function to calculate and update the usable area
// function updateUsableArea() {
//     console.log("resized");
//     const articles = background.querySelectorAll("article");

//     for (let i = 0; i < articles.length; i++) {
//         let image_area = articles[i].querySelector(".page-image-section"),
//             project_images = articles[i].querySelectorAll(".project-image"),
//             image_starting_width = project_images[0].offsetWidth,
//             usable_area = image_area.offsetWidth - 40; // Because of 20px padding on either side

//         usable_area -= (((project_images.length - 1) * image_starting_width) + ((project_images.length) * 5)) // Account for other buttons

//         for (let j = 0; j < project_images.length; j++) {
//             project_images[j].addEventListener("mouseover", () => {
//                 project_images[j].animate(
//                     {
//                         width: `${usable_area}px`,
//                         boxShadow: "-8px 8px 15px black" 
//                     },
//                     { duration: 100, fill: "forwards"}
//                 );
//             });

//             project_images[j].addEventListener("mouseout", () => {
//                 project_images[j].animate(
//                     { 
//                         width: `${image_starting_width}px`,
//                         boxShadow: "0px 0px 0px black" 
//                     },
//                     { duration: 70, fill: "forwards"}
//                 );
//             });
//         }
//     }
// }
  
// // Call the function on page load and window resize
// updateUsableArea();

// window.addEventListener("resize", updateUsableArea);