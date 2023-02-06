//#region WINDOW VARIABLES:
let w = window.innerWidth;
let h = window.innerHeight;
let maxWidth = screen.width * .96;
//#endregion

//#region PROJECT BREAKDOWN
let project1_currentBtn = 0;
let project2_currentBtn = 0;

const project1LeftBtn = document.querySelector("#p1Left");
const project1RightBtn = document.querySelector("#p1Right");
const project1Btn1 = document.querySelector("#p1Btn1");
const project1Btn2 = document.querySelector("#p1Btn2");
const project1Btn3 = document.querySelector("#p1Btn3");
const project1Btn4 = document.querySelector("#p1Btn4");

const project1BtnImg1 = document.querySelector("#p1Img1");
const project1BtnImg2 = document.querySelector("#p1Img2");
const project1BtnImg3 = document.querySelector("#p1Img3");
const project1BtnImg4 = document.querySelector("#p1Img4");

//const project2Btn1 = document.querySelector("#p2Btn1");
//const project2Btn2 = document.querySelector("#p2Btn2");
//const project2Btn3 = document.querySelector("#p2Btn3");
//const project2Btn4 = document.querySelector("#p2Btn4");
//#endregion

//#region PROJECT REFERENCES:
const aboutText = document.getElementsByClassName('about-text');

const projectTitle = document.getElementsByClassName('portfolio-title'); //CREATES AN ARRAY
const projectImages = document.getElementsByClassName('projectVidContainer'); //CREATES AN ARRAY
const projectText = document.getElementsByClassName('portfolio-description'); //CREATES AN ARRAY
const projectButtons = document.getElementsByClassName('projectBtns'); //CREATES AN ARRAY

const breakdownTitle = document.getElementsByClassName('breakdownTitle'); //CREATES AN ARRAY
const breakdownImages = document.getElementsByClassName('breakdownImage'); //CREATES AN ARRAY
const breakdownText = document.getElementsByClassName('portfolio-breakdown'); //CREATES AN ARRAY
const breakdownGIF = document.querySelector("#breakdownGif");
//#endregion


//#region PROJECT BUTTONS

    project1LeftBtn.onclick = Project1CycleLeft;
    project1RightBtn.onclick = Project1CycleRight;
    project1Btn1.onclick = Project1Breakdown1;
    project1Btn2.onclick = Project1Breakdown2;
    project1Btn3.onclick = Project1Breakdown3;
    project1Btn4.onclick = Project1Breakdown4;
    Project1Breakdown1();

    function Project1Breakdown1(){
        breakdownTitle[0].innerText = "Character Select System"
        breakdownText[0].innerText = "Changing tree type at start dynamically updates starting resources, changes certain unit resource costs, and gives different global perks."
        breakdownGIF.src="Images/wg_main.gif";

        project1BtnImg1.src = "Images/circleSelected.png";
        project1BtnImg2.src = "Images/circle.png";
        project1BtnImg3.src = "Images/circle.png";
        project1BtnImg4.src = "Images/circle.png";

        project1_currentBtn = 0;
    }

    function Project1Breakdown2(){
        breakdownTitle[0].innerText = "Breakdown Title 2"
        breakdownText[0].innerText = "Breakdown description 2. Testing different sizes of text."
        breakdownGIF.src="Images/wg_main.gif";

        project1BtnImg1.src = "Images/circle.png";
        project1BtnImg2.src = "Images/circleSelected.png";
        project1BtnImg3.src = "Images/circle.png";
        project1BtnImg4.src = "Images/circle.png";

        project1_currentBtn = 1;
    }

    function Project1Breakdown3(){
        //let btnImage = project1Btn3.getElementsByTagName("img");

        breakdownTitle[0].innerText = "Breakdown Title 3 with long title"
        breakdownText[0].innerText = "Breakdown description 3. Testing different sizes of text. This will be a much longer explanation of what the breakdown does."
        breakdownGIF.src="Images/wg_main.gif";

        project1BtnImg1.src = "Images/circle.png";
        project1BtnImg2.src = "Images/circle.png";
        project1BtnImg3.src = "Images/circleSelected.png";
        project1BtnImg4.src = "Images/circle.png";

        project1_currentBtn = 2;
    }

    function Project1Breakdown4(){
        //let btnImage = project1Btn3.getElementsByTagName("img");

        breakdownTitle[0].innerText = "Breakdown Title 4"
        breakdownText[0].innerText = "Breakdown description 4."
        breakdownGIF.src="Images/wg_main.gif";

        project1BtnImg1.src = "Images/circle.png";
        project1BtnImg2.src = "Images/circle.png";
        project1BtnImg3.src = "Images/circle.png";
        project1BtnImg4.src = "Images/circleSelected.png";

        project1_currentBtn = 3;
    }

    function Project1CycleLeft(){
        switch(project1_currentBtn){
            case 0:
            {
                Project1Breakdown4();
                break;
            }

            case 1:
            {
                Project1Breakdown1();
                break;
            }

            case 2:
            {
                Project1Breakdown2();
                break;
            }

            case 3:
            {
                Project1Breakdown3();
                break;
            }
        }
    }

    function Project1CycleRight(){
        switch(project1_currentBtn){
            case 0:
            {
                Project1Breakdown2();
                break;
            }

            case 1:
            {
                Project1Breakdown3();
                break;
            }

            case 2:
            {
                Project1Breakdown4();
                break;
            }

            case 3:
            {
                Project1Breakdown1();
                break;
            }
        }
    }

//#endregion

//#region WINDOW RESIZING METHODS

    //EVENT CALLED WHENEVER SCREEN IS RESIZED:
    window.addEventListener('resize', function(event){ //Adding an event listener (NEVER OVERRIDE THE WINDOW ONRESIZE FUNCTION)
        w = window.innerWidth;
        if(w < maxWidth){
            ScaleDownAboutText();
            ScaleDownProjectPanel();
            ScaleDownBreakdownPanel();
        }
        else {
            ScaleUpAboutText();
            ScaleUpProjectPanel();
            ScaleUpBreakdownPanel();
        }
    }, true)

    function ScaleUpAboutText(){
        for(i = 0; i < aboutText.length; i++){
            aboutText[i].style.width = "40%";
        }
    }

    function ScaleDownAboutText(){
        for(i = 0; i < aboutText.length; i++){
            aboutText[i].style.width = "90%";
        }
    }

    function ScaleDownProjectPanel(){

        for(i = 0; i < projectImages.length; i++){
            projectImages[i].style.width = "90%";
            projectImages[i].style.float = "none";
        }

        for(i = 0; i < projectText.length; i++){  
            projectText[i].style.width = "90%";
            projectText[i].style.paddingTop = "10px"; 
        }

        for(i = 0; i < projectTitle.length; i++){
            projectTitle[i].style.width = "90%";
            projectTitle[i].style.textAlign = "center";
            projectTitle[i].style.paddingTop = "0px";
        }
    }

    function ScaleUpProjectPanel(){
        for(i = 0; i < breakdownImages.length; i++){
            projectImages[i].style.width = "50%";
            projectImages[i].style.float = "left";
        }

        for(i = 0; i < breakdownText.length; i++){
            projectText[i].style.width = "50%";
            projectText[i].style.float = "right"; 
            projectText[i].style.paddingTop = "20px"; 
        }

        for(i = 0; i < projectTitle.length; i++){
            projectTitle[i].style.width = "50%";
            projectTitle[i].style.float = "right"; 
            projectTitle[i].style.textAlign = "left";
            projectTitle[i].style.paddingTop = "20px";
        }
    }

    function ScaleDownBreakdownPanel(){
        for(i = 0; i < breakdownImages.length; i++){
            breakdownImages[i].style.float = "none"; 
            breakdownImages[i].style.width = "50%";
            breakdownImages[i].style.right = "0";
        }

        for(i = 0; i < breakdownText.length; i++){  
            breakdownText[i].style.width = "50%";
            breakdownText[i].style.left = "0";
            breakdownText[i].style.float = "none"; 
            breakdownText[i].style.bottom = "0";
        }

        for(i = 0; i < breakdownTitle.length; i++){  
            breakdownTitle[i].style.float = "none"; 
            breakdownTitle[i].style.left= "0";
            breakdownTitle[i].style.top = "0px";
        }

        for(i = 0; i < projectButtons.length; i++){  
            projectButtons[i].style.bottom = "0px";
        }
    }

    function ScaleUpBreakdownPanel(){
        for(i = 0; i < breakdownImages.length; i++){
            breakdownImages[i].style.float = "right";
            breakdownImages[i].style.right = "250px";
            breakdownImages[i].style.maxWidth = "500px";
        }

        for(i = 0; i < breakdownText.length; i++){
            breakdownText[i].style.width = "350px";
            breakdownText[i].style.left = "290px";
            breakdownText[i].style.float = "left";
            breakdownText[i].style.bottom= "200px";
        }

        for(i = 0; i < breakdownTitle.length; i++){  
            breakdownTitle[i].style.float = "left"; 
            breakdownTitle[i].style.left= "288px";
            breakdownTitle[i].style.top = "50px";
        }

        for(i = 0; i < projectButtons.length; i++){  
            projectButtons[i].style.bottom = "100px";
        }
    }

//#endregion


