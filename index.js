// alert("Hello");

// 1st step - Movement animation to happen
// const card = document.querySelector('.card');
// const container = document.querySelector('.container'); 


// 1st step jquery style
const card = $(".card")[0];
const container = $(".container");

// 1st step query style explanation

/* Using the $(".card")[0]; to get the object of a div in html which had a class of "card", then after that is the [0]
which is the first selection. Without that, it will not work, I find the link below helpful.
https://stackoverflow.com/questions/9999504/jquery-equivalent-of-queryselector  
Then I stored that using the variable const just like the original. 
Same thing was done on the container but without the [0]. */



// 5th step - all items
// const photo = document.querySelector('.photo img');
// const title = document.querySelector('.title');
// const social = document.querySelector('.social');
// const info = document.querySelector('.info h4');
// const profile = document.querySelector('.profile');


// 5th step jquery style
const photo = $(".photo img");
const title = $(".title");
const social= $(".social");
const info= $(".info h4");
const profile= $(".profile");

// 5th step jquery style explanation
/* This is similar to the 1st step, using $(".class name"); to get the div in html with the class name and using the const to store them 
in a variable. I did not use [0] as they work fine. I find the link below helpful in variables in jquery.
https://stackoverflow.com/questions/9999504/jquery-equivalent-of-queryselector  
*/



// 2nd step - Moving animation event
container.on('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20; //rotating the element into x axis
    let yAxis = (window.innerWidth / 2 - e.pageY) / 20; //rotating the element into y axis
    card.style.transform  = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// 2nd step jquery style explanation
/* addeventlistener is for vanilla js, and in jquery it is .on so I changed the addeventlistener to on.
I learned this through the link below 
https://stackoverflow.com/questions/34767630/typeerror-addeventlistener-is-not-a-function */





// 4th step - Adding animation in
container.on('mouseenter', e => {
    card.style.transform = "none";
    // Popout animation for all items
    photo.style.transform = "translateZ(50px)";
    title.style.transform = "translateZ(50px)";
    social.style.transform = "translateZ(50px)";
    info.style.transform = "translateZ(50px)";
    profile.style.transform = "translateZ(50px)";
}); 

// 4rd step jquery style explanation
/* Same thing on the 3rd step, I changed addeventlistener to on.
I learned this through the link below 
https://stackoverflow.com/questions/34767630/typeerror-addeventlistener-is-not-a-function */


// 3rd step - Removing animation in
container.on('mouseleave', e => {
    card.style.transform = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

// 3rd step jquery style explanation
/* Same thing on the 2nd step, I changed addeventlistener to on.
I learned this through the link below 
https://stackoverflow.com/questions/34767630/typeerror-addeventlistener-is-not-a-function */
