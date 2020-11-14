//let is block level
let currentScore=0;
let playing=false //This button gets true when user clicks on Play button
let shape1;
let shape2;
var countTime=0;
const matchBtn=document.getElementById('match')

const shapes=[
    {color: '#FF595E', width: 250, height : 160},
    {color: '#FF595E', width: 270, height : 150},
    {color: '#FFCA3A', width: 320, height : 170},
    {color: '#FFCA3A', width: 310, height : 180},
    {color: '#8AC926', width: 190, height : 160},
    {color: '#8AC926', width: 200, height : 175},
    {color: '#1982C4', width: 380, height : 185},
    {color: '#1982C4', width: 400, height : 120},
    {color: '#6A4C93', width: 370, height : 145},
    {color: '#6A4C93', width: 440, height : 160}

]
let randomSelection=()=>{
    let rand=Math.floor(Math.random()*shapes.length)
    return shapes[rand]
}

const repeatRandomShape=()=>{
    setInterval(()=>{
        matchBtn.disabled=false
        shape1=randomSelection()
        shape2=randomSelection()
       
        const shape1Styles=`width:${shape1.width+'px'};
                           background:${shape1.color};
                           height:${shape1.height+'px'};`
        const shape2Styles=`width:${shape2.width+'px'};
                            background:${shape2.color};
                            height:${shape2.height+'px'};
                            `
        document.getElementById('shape1').style.cssText=shape1Styles
        document.getElementById('shape2').style.cssText=shape2Styles
       countTime++;
       document.getElementById('time').innerHTML=countTime
       if(countTime===30)
       {
            
           alert("Game Finished Your Score is : "+currentScore)
           location.reload()
       }

    },1000);
}
//Start Game
document.getElementById("play").onclick=()=>{
    playing=true;
    /**
     * Disable the play button when playing because if not disabled then during
     * playing if pressed multiple times then it will lead to generate multiple shapes
     * */
    document.getElementById('play').disabled=true
    repeatRandomShape()
}
//Reset Game

document.getElementById("reset").addEventListener('click',()=>{
    currentScore=0;
    playing=false;
   location.reload()

})

//Compare

document.getElementById('match').onclick=()=>{
    if(playing)
    {
        matchBtn.disabled=true
        if(Object.is(shape1,shape2))
        {
            currentScore++
            document.getElementById('score').innerHTML=currentScore
        }
        else
        {
            currentScore--;
            document.getElementById('score').innerHTML=currentScore
        }
    }
}

/**
 * ES6 Feature 
 * 
 * 1. Arrow Function
 * 2. Const and Let
 * 3. Object.is
 */