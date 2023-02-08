//#region WINDOW VARIABLES:
let w = window.innerWidth;
let h = window.innerHeight;
let maxWidth = screen.width * .90;
//#endregion

//#region PROJECT BREAKDOWN
let project1_currentBtn = 0;
let project2_currentBtn = 0;

const projectLeftBtn = document.getElementsByClassName('arrowBtnLeft');
const projectRightBtn = document.getElementsByClassName('arrowBtnRight');

const projectBtn1 = document.getElementsByClassName('circleButton1');
const projectBtn2 = document.getElementsByClassName('circleButton2');
const projectBtn3 = document.getElementsByClassName('circleButton3');
const projectBtn4 = document.getElementsByClassName('circleButton4');

const projectBtnImg1 = document.getElementsByClassName('imageButton1');
const projectBtnImg2 = document.getElementsByClassName('imageButton2');
const projectBtnImg3 = document.getElementsByClassName('imageButton3');
const projectBtnImg4 = document.getElementsByClassName('imageButton4');
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

const breakdownGIF = document.getElementsByClassName('breakdownGif'); //CREATES AN ARRAY
//#endregion


//#region PROJECT1 - WILD GROWTH TD

    projectLeftBtn[0].onclick = Project1CycleLeft;
    projectRightBtn[0].onclick = Project1CycleRight;
    projectBtn1[0].onclick = Project1Breakdown1;
    projectBtn2[0].onclick = Project1Breakdown2;
    projectBtn3[0].onclick = Project1Breakdown3;
    projectBtn4[0].onclick = Project1Breakdown4;
    Project1Breakdown1();

    function Project1Breakdown1(){
        breakdownTitle[0].innerText = "Character Select System";

        list1[0].innerText = "Dynamically updates starting resources";
        list2[0].innerText = "Updates unit resource costs based on tree type";
        list3[0].innerText = "Allocates different global perks";

        breakdownGIF[0].src="Images/wg_main.gif";

        //UPDATE SELECTED BUTTON AND CLEAR OTHER BUTTONS:
        projectBtnImg1[0].src = "Images/circleSelected.png";
        projectBtnImg2[0].src = "Images/circle.png";
        projectBtnImg3[0].src = "Images/circle.png";
        projectBtnImg4[0].src = "Images/circle.png";
        project1_currentBtn = 0;
    }

    function Project1Breakdown2(){
        breakdownTitle[0].innerText = "Building Grid System";

        list1[0].innerText = "Checks resource costs and unit size";
        list2[0].innerText = "Updates tile interface with valid/invalid placement";
        list3[0].innerText = "Instantiates game object onto selected tile";

        breakdownGIF[0].src="Images/buildingSystem.gif";

        //UPDATE SELECTED BUTTON AND CLEAR OTHER BUTTONS:
        projectBtnImg1[0].src = "Images/circle.png";
        projectBtnImg2[0].src = "Images/circleSelected.png";
        projectBtnImg3[0].src = "Images/circle.png";
        projectBtnImg4[0].src = "Images/circle.png";
        project1_currentBtn = 1;
    }

    function Project1Breakdown3(){
        breakdownTitle[0].innerText = "Random Generation";

        list1[0].innerText = "Randomly generated maps";
        list2[0].innerText = "Resources are scattered in random positions and sizes";
        list3[0].innerText = "Events are randomly generated and positioned around the map";

        breakdownGIF[0].src="Images/randomGeneration.gif";

        //UPDATE SELECTED BUTTON AND CLEAR OTHER BUTTONS:
        projectBtnImg1[0].src = "Images/circle.png";
        projectBtnImg2[0].src = "Images/circle.png";
        projectBtnImg3[0].src = "Images/circleSelected.png";
        projectBtnImg4[0].src = "Images/circle.png";
        project1_currentBtn = 2;
    }

    function Project1Breakdown4(){
        breakdownTitle[0].innerText = "Meta Progression System";

        list1[0].innerText = 'A meta currency called "Silt" is gained on Victory/Defeat';
        list2[0].innerText = "Permanent unlockable upgrades";
        list3[0].innerText = "Positive and negative modifiers can be added, called 'Influences', which affect Score and playstyle";

        breakdownGIF[0].src="Images/metaProgression.gif";

        //UPDATE SELECTED BUTTON AND CLEAR OTHER BUTTONS:
        projectBtnImg1[0].src = "Images/circle.png";
        projectBtnImg2[0].src = "Images/circle.png";
        projectBtnImg3[0].src = "Images/circle.png";
        projectBtnImg4[0].src = "Images/circleSelected.png";
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

//#region PROJECT2 - FISHER FROG

projectLeftBtn[1].onclick = Project2CycleLeft;
projectRightBtn[1].onclick = Project2CycleRight;
projectBtn1[1].onclick = Project2Breakdown1;
projectBtn2[1].onclick = Project2Breakdown2;
projectBtn3[1].onclick = Project2Breakdown3;
projectBtn4[1].onclick = Project2Breakdown4;
Project2Breakdown1();

function Project2Breakdown1(){
    breakdownTitle[1].innerText = "Fishing System";

    list1[1].innerText = "Hold finger down on screen and move left/right to adjust hook position";
    list2[1].innerText = "An adjustable line renderer with a collider acts as the fishing line";
    list3[1].innerText = "Different fishing rods and lures affect reel in speed and fishing response";

    breakdownGIF[1].src="Images/fishing.gif";

    //UPDATE SELECTED BUTTON AND CLEAR OTHER BUTTONS:
    projectBtnImg1[1].src = "Images/circleSelected.png";
    projectBtnImg2[1].src = "Images/circle.png";
    projectBtnImg3[1].src = "Images/circle.png";
    projectBtnImg4[1].src = "Images/circle.png";
    project2_currentBtn = 0;
}

function Project2Breakdown2(){
    breakdownTitle[1].innerText = "Upgrade System";

    list1[1].innerText = "Click on screen to throw out spear to target position";
    list2[1].innerText = "Asteroids collide with spear and can be blown up with dynamite";
    list3[1].innerText = "Different spears affect throwing speed and reel in speed";

    breakdownGIF[1].src="Images/upgrade.gif";

    //UPDATE SELECTED BUTTON AND CLEAR OTHER BUTTONS:
    projectBtnImg1[1].src = "Images/circle.png";
    projectBtnImg2[1].src = "Images/circleSelected.png";
    projectBtnImg3[1].src = "Images/circle.png";
    projectBtnImg4[1].src = "Images/circle.png";
    project2_currentBtn = 1;
}

function Project2Breakdown3(){
    breakdownTitle[1].innerText = "Wardrobe";

    list1[1].innerText = "Different characters and fishing equipment can be unlocked";
    list2[1].innerText = "Fishing rods, lures and spears each have unique modifiers";
    list3[1].innerText = "Pets can be unlocked which give a small bonus to fishing";

    breakdownGIF[1].src="Images/wardrobe.gif";

    //UPDATE SELECTED BUTTON AND CLEAR OTHER BUTTONS:
    projectBtnImg1[1].src = "Images/circle.png";
    projectBtnImg2[1].src = "Images/circle.png";
    projectBtnImg3[1].src = "Images/circleSelected.png";
    projectBtnImg4[1].src = "Images/circle.png";
    project2_currentBtn = 2;
}

function Project2Breakdown4(){
    breakdownTitle[1].innerText = "Achievements";

    list1[1].innerText = "Achievements are tracked for various objectives in the game";
    list2[1].innerText = "Experience and currency are rewarded upon completing an achievement";
    list3[1].innerText = "All achievements and progress are saved through JSON";

    breakdownGIF[1].src="Images/achievementSystem.gif";

    //UPDATE SELECTED BUTTON AND CLEAR OTHER BUTTONS:
    projectBtnImg1[1].src = "Images/circle.png";
    projectBtnImg2[1].src = "Images/circle.png";
    projectBtnImg3[1].src = "Images/circle.png";
    projectBtnImg4[1].src = "Images/circleSelected.png";
    project2_currentBtn = 3;
}

function Project2CycleLeft(){
    switch(project2_currentBtn){
        case 0:
        {
            Project2Breakdown4();
            break;
        }

        case 1:
        {
            Project2Breakdown1();
            break;
        }

        case 2:
        {
            Project2Breakdown2();
            break;
        }

        case 3:
        {
            Project2Breakdown3();
            break;
        }
    }
}

function Project2CycleRight(){
    switch(project2_currentBtn){
        case 0:
        {
            Project2Breakdown2();
            break;
        }

        case 1:
        {
            Project2Breakdown3();
            break;
        }

        case 2:
        {
            Project2Breakdown4();
            break;
        }

        case 3:
        {
            Project2Breakdown1();
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

        for(i = 0; i < projectButtons.length; i++){
            projectButtons[i].style.width = "100%";
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

        for(i = 0; i < projectButtons.length; i++){
            projectButtons[i].style.width = "50%";
        }
        
    }

//#endregion


