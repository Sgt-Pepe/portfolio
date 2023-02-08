//#region WINDOW VARIABLES:
let w = window.innerWidth;
let h = window.innerHeight;
let maxWidth = screen.width * .90;
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

const breakdownPanel = document.getElementsByClassName('breakdown-panel'); //CREATES AN ARRAY
const leftArrow = document.getElementsByClassName('leftArrowDiv'); //CREATES AN ARRAY
const rightArrow = document.getElementsByClassName('rightArrowDiv'); //CREATES AN ARRAY
const breakdownTextPanel = document.getElementsByClassName('breakdownText'); //CREATES AN ARRAY
const list1 = document.getElementsByClassName('list1'); //CREATES AN ARRAY
const list2 = document.getElementsByClassName('list2'); //CREATES AN ARRAY
const list3 = document.getElementsByClassName('list3'); //CREATES AN ARRAY

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
        breakdownTitle[0].innerText = "Character Select System";

        list1[0].innerText = "Dynamically updates starting resources";
        list2[0].innerText = "Updates unit resource costs based on tree type";
        list3[0].innerText = "Allocates different global perks";

        breakdownGIF.src="Images/wg_main.gif";

        //UPDATE SELECTED BUTTON AND CLEAR OTHER BUTTONS:
        project1BtnImg1.src = "Images/circleSelected.png";
        project1BtnImg2.src = "Images/circle.png";
        project1BtnImg3.src = "Images/circle.png";
        project1BtnImg4.src = "Images/circle.png";
        project1_currentBtn = 0;
    }

    function Project1Breakdown2(){
        breakdownTitle[0].innerText = "Building Grid System";

        list1[0].innerText = "Checks resource costs and unit size";
        list2[0].innerText = "Updates tile interface with valid/invalid placement";
        list3[0].innerText = "Instantiates game object onto selected tile";

        breakdownGIF.src="Images/buildingSystem.gif";

        //UPDATE SELECTED BUTTON AND CLEAR OTHER BUTTONS:
        project1BtnImg1.src = "Images/circle.png";
        project1BtnImg2.src = "Images/circleSelected.png";
        project1BtnImg3.src = "Images/circle.png";
        project1BtnImg4.src = "Images/circle.png";
        project1_currentBtn = 1;
    }

    function Project1Breakdown3(){
        breakdownTitle[0].innerText = "Random Generation";

        list1[0].innerText = "Randomly generated maps";
        list2[0].innerText = "Resources are scattered in random positions and sizes";
        list3[0].innerText = "Events are randomly generated and positioned around the map";

        breakdownGIF.src="Images/randomGeneration.gif";

        //UPDATE SELECTED BUTTON AND CLEAR OTHER BUTTONS:
        project1BtnImg1.src = "Images/circle.png";
        project1BtnImg2.src = "Images/circle.png";
        project1BtnImg3.src = "Images/circleSelected.png";
        project1BtnImg4.src = "Images/circle.png";
        project1_currentBtn = 2;
    }

    function Project1Breakdown4(){
        breakdownTitle[0].innerText = "Meta Progression System";

        list1[0].innerText = 'A meta currency called "Silt" is gained on Victory/Defeat';
        list2[0].innerText = "Permanent unlockable upgrades";
        list3[0].innerText = "Positive and negative modifiers can be added, called 'Influences', which affect Score and playstyle";

        breakdownGIF.src="Images/metaProgression.gif";

        //UPDATE SELECTED BUTTON AND CLEAR OTHER BUTTONS:
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

    if(window.matchMedia("(max-width: 900px)").matches) {
        //viewport is less than 768 pixels wide
        console.log("MOBILE DEVICE");
            ScaleDownAboutText();
            ScaleDownProjectPanel();
            ScaleDownBreakdownPanel();
    }
    else {
        console.log("NON MOBILE DEVICE");
        CheckWindowSize();
    }

    //EVENT CALLED WHENEVER SCREEN IS RESIZED:
    window.addEventListener('resize', function(event){ //Adding an event listener (NEVER OVERRIDE THE WINDOW ONRESIZE FUNCTION)
        w = window.innerWidth;
        console.log(maxWidth);
        console.log(w);
        CheckWindowSize();
    }, true)

    function CheckWindowSize(){
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
    }

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
            projectText[i].style.width = "100%";
            projectText[i].style.padding = "0"; 
            projectText[i].style.paddingTop = "10px"; 
        }

        for(i = 0; i < projectTitle.length; i++){
            projectTitle[i].style.width = "90%";
            projectTitle[i].style.textAlign = "center";
            projectTitle[i].style.padding = "5px 0px";
            //projectTitle[i].style.paddingTop = "0px";
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
            projectText[i].style.padding = "0 20px"; 
            projectText[i].style.paddingTop = "20px"; 
        }

        for(i = 0; i < projectTitle.length; i++){
            projectTitle[i].style.width = "50%";
            projectTitle[i].style.float = "right"; 
            projectTitle[i].style.textAlign = "left";
            projectTitle[i].style.padding = "0 20px";
            projectTitle[i].style.paddingTop = "20px";
        }
    }

    function ScaleDownBreakdownPanel(){

        for(i = 0; i < breakdownPanel.length; i++){
            breakdownPanel[i].style.width = "100%";
        }

        for(i = 0; i < breakdownTextPanel.length; i++){
            breakdownTextPanel[i].style.width = "80%";
            breakdownTextPanel[i].style.margin = "0 auto";
            breakdownTextPanel[i].style.float ="none";
        }

        for(i = 0; i < breakdownImages.length; i++){
            breakdownImages[i].style.width = "70%";
            breakdownImages[i].style.margin = "0 auto";
            breakdownImages[i].style.float = "none";
        }
        
        for(i = 0; i < rightArrow.length; i++){
            rightArrow[i].style.float = "right";
            breakdownPanel[i].insertBefore(rightArrow[i], breakdownImages[i]);
        }

    }

    function ScaleUpBreakdownPanel(){

        for(i = 0; i < breakdownImages.length; i++){
            breakdownPanel[i].style.width = "60%";
        }

        for(i = 0; i < breakdownTextPanel.length; i++){
            breakdownTextPanel[i].style.width = "35%";
            breakdownTextPanel[i].style.margin = "0";
            breakdownTextPanel[i].style.float ="left";
        }

        for(i = 0; i < breakdownImages.length; i++){
            breakdownImages[i].style.width = "44%";
            breakdownImages[i].style.margin = "0";
            breakdownImages[i].style.float = "left";
        }

        for(i = 0; i < rightArrow.length; i++){
            rightArrow[i].style.float = "left";
            breakdownPanel[i].insertBefore(rightArrow[i], null); //PARENT NODE.insertBefore(MoveThisElement, MoveItBeforeThis (null == end of parent node))
        }
        
    }

//#endregion


