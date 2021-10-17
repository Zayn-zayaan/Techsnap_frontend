var basicsbtn = document.querySelector('.dd-icon-basics');
var basicsdd = document.querySelector('.dd-basics');
var jobbtn = document.querySelector('.dd-icon-job');
var jobdd = document.querySelector('.dd-job');
var skillsbtn = document.querySelector('.dd-icon-skills');
var skillsdd = document.querySelector('.dd-skills');
var careerbtn = document.querySelector('.dd-icon-career');
var careerdd = document.querySelector('.dd-career');
var gettingjobbtn = document.querySelector('.dd-icon-gettingjob');
var gettingjobdd = document.querySelector('.dd-gettingjob');
var showhideBtn = document.querySelector('.show-hide-text');
var showhidedd = document.querySelector('.main-col-4');
var showhideicon = document.querySelector('.fontt');


basicsbtn.addEventListener("click", ()=>{
    basicsdd.classList.toggle('dis-basics-open');

})

jobbtn.addEventListener("click", ()=>{
    jobdd.classList.toggle('dis-jobs-open');

})
skillsbtn.addEventListener("click", ()=>{
    skillsdd.classList.toggle('dis-skills-open');

})
careerbtn.addEventListener("click", ()=>{
    careerdd.classList.toggle('dis-career-open');

})
gettingjobbtn.addEventListener("click", ()=>{
    gettingjobdd.classList.toggle('dis-gettingjob-open');

})

showhideBtn.addEventListener("click", ()=>{
    if (showhideBtn.innerHTML === 'Hide Table of contents') {
        showhidedd.classList.toggle('dis-open');
        showhideicon.classList.toggle('trans');
        showhideBtn.innerHTML = 'Show Table of contents';
    } else {
        showhidedd.classList.toggle('dis-open');
        showhideicon.classList.toggle('trans');
        showhideBtn.innerHTML = 'Hide Table of contents';
    }
    // showhidedd.classList.toggle('dis-open');

})