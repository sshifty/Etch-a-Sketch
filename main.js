const container=document.querySelector(".container");
const resetButton=document.querySelector("#reset");
const range=document.querySelector("#rangeInput");
const rangeText=document.querySelector(".range-value");
const colorPicker=document.querySelector("#color");
const rainbow=document.querySelector("#rainbow");
const eraser=document.querySelector("#eraser");
const clear=document.querySelector("#clear");
const optionList=document.querySelectorAll(".option");
let modePick="color";
let buttonActive="color";

console.log(optionList);


let color=colorPicker.value;
let rangeValue=50;


optionList.forEach(option=>{
    option.addEventListener("click",e=>{
        modePick=option.id;
        buttonActive=option.id;  
              
       
             
                
    });
});


colorPicker.addEventListener("change",function(e){
    color=colorPicker.value;
    console.log(color);
})
range.addEventListener("change",function(e){
    rangeText.textContent=e.target.value;
    rangeValue=e.target.value;
    createGrid(rangeValue);
})

function colorChange(e){
    if(modePick==="color"){
        e.target.style.backgroundColor=color;
    }else if(modePick==="rainbow"){
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    }else if(modePick==='eraser'){
        e.target.style.backgroundColor='#fefefe';
    }
}



function createGrid(rangeValue){    
    
    container.style.setProperty('--gridRow',rangeValue);
    container.style.setProperty('--gridCol',rangeValue);

    for(let i=0;i<(rangeValue*rangeValue);i++){
        let newDiv=document.createElement("div");              
        container.appendChild(newDiv);

        newDiv.addEventListener('mouseover',colorChange);        
    };  
    
};

function makeCleanGrid(){
    clearGrid();
    createGrid(rangeValue);
}
function clearGrid(e){
    container.innerHTML='';
    modePick="color"
    createGrid(rangeValue); 
}



clear.addEventListener('click',makeCleanGrid);

createGrid(50);