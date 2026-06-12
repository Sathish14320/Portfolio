AOS.init({
duration:1200
});

const texts=[
"Software Developer",
"Java Developer",
"ML Enthusiast",
"Web Developer"
];

let count=0;
let index=0;
let currentText='';
let letter='';

(function type(){

if(count===texts.length){
count=0;
}

currentText=texts[count];

letter=currentText.slice(0,++index);

document.querySelector('.typing').textContent=letter;

if(letter.length===currentText.length){

count++;
index=0;

setTimeout(type,1500);

}else{

setTimeout(type,100);

}

})();

particlesJS("particles-js",{
particles:{
number:{value:80},
color:{value:"#ff3b3b"},
shape:{type:"circle"},
opacity:{value:0.5},
size:{value:3},
move:{enable:true,speed:2}
}
});