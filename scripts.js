const dropDownButton = document.querySelector(".dropDownButton");
const dropDown = document.querySelector(".dropDown");
const navList = Array.from(document.querySelectorAll(".navItem"));
const dropDownList = [];
const navRight = document.querySelector(".navRight");
const navLeft = document.querySelector(".navLeft");
const nav = document.querySelector(".navHolder ul");


dropDownButton.addEventListener('click', dropDownClick);
var screenSize = window.matchMedia("(max-width:660px)");
screenSize.addEventListener("change", mediaQuery);

mediaQuery(screenSize);



function mediaQuery(screenSize){
    if (screenSize.matches){
        // nav.classList.add("inactive");
        while(navList.length > 0){
            let item = navList.shift();
            dropDownList.push(item);
            dropDown.append(item);
            console.log("hihi");
        }
        // i could use this for the dropdown menu too
    }else{
        if(dropDownList.length==4){
            for(let i = 0; i < 2; i++){
                let item = dropDownList.shift()
                navList.push(item);
             navLeft.append(item);
            }
            for(let i = 0; i < 2; i++){
                let item = dropDownList.shift()
                navList.push(item);
                navRight.append(item);
            }
            //make sure dropdown is turned off
            dropDown.classList.remove("active");

        }   
    }
}

function dropDownClick(){  
    if(dropDown.classList.contains("active")){
        dropDown.classList.remove("active");
    }else{
        dropDown.classList.add("active");
    }
}