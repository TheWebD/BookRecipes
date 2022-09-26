function navTransition(){
    let navControl = document.getElementsByClassName('nav-link');
    for(let i = 0; i < navControl.length; i++)
    {
        navControl[i].addEventListener('click', function()
        {
            let currentBtn = document.getElementsByClassName('active');
            currentBtn[0].className = currentBtn[0].className.replace("active"," ");
            this.className += " active";
        })
    }
}
navTransition();

function pageTransition()
{
    let bodyMaincontent = document.querySelectorAll('.main-content');
    let allSections = document.querySelectorAll('.section');
    let navHeadcontrol = document.querySelectorAll('.controls')
    bodyMaincontent[0].addEventListener('click', (event) => 
    {
        let elementID = event.target.dataset.id;
        if(elementID)
        {
            navHeadcontrol.forEach(function(btn) 
            {
                btn.classList.remove("active-sec");
            })

            allSections.forEach(function(section)
            {
                section.classList.remove("active-sec");
            })

            let getElement = document.getElementById(elementID);
            getElement.classList.add("active-sec");
        }
    })
}
pageTransition()

function loginModalClose()
{
    let btnClose = document.getElementById('btn-close-signup');
    btnClose.addEventListener('click', function(mouseEvent)
    {
        if(mouseEvent)
        {
            document.getElementById('btn-close-login').click();
        }
    })
}
loginModalClose();

function getDate()
{
    let presentYear = new Date();
    let elementDate = document.querySelectorAll('#date');
    elementDate.forEach(function(elementID)
    {
        elementID.innerHTML = presentYear.getFullYear();
    })
}
getDate();



$(document).ready(function(){
    console.log("Hello jQuery!");
})


