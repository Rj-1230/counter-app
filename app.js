console.log("This is a color counter app");
let clearBox = document.getElementById('clearBtn');
clearBox.onclick=()=>{
    squares.forEach(square=>{
        square.innerText="";
        timesClicked = {'red':0 , 'green':0, 'blue':0}
    });
}
var timesClicked = {'red':0 , 'green':0, 'blue':0}
const squares = document.querySelectorAll('.boxes');
squares.forEach(square => {
    square.onclick = ()=>{
        timesClicked[square.id]+=1;
        // console.log(timesClicked);
        square.innerText=timesClicked[square.id];
        
    }
});