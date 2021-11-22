let i = 0;
let a = 0;
let rand;
let size = 3;

const RightEdge = [
    1055,
    1007,
    959,
    911,
    863,
    815,
    767,
    719,
    671,
    623,
    575,
    527,
    479,
    431,
    382,
    335,
    287,
    239,
    191,
    143,
    95,
    47
]

const LeftEdge = [
    1008,
    960,
    912,
    864,
    816,
    768,
    720,
    672,
    624,
    576,
    528,
    480,
    432,
    384,
    336,
    288,
    240,
    192,
    144,
    96,
    48,
    0
]


const BottomEdge = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
]


const TopEdge = [
    1008,
    960,
    912,
    864,
    816,
    768,
    720,
    672,
    624,
    576,
    528,
    480,
    432,
    384,
    336,
    288,
    240,
    192,
    144,
    96,
    48,
    0
]

const foodposition = []

const positionArr = []

function position(){
    let deathzone = positionArr[positionArr.length - size]
    a;
    console.log(a)
    document.querySelectorAll("td")[a].style.backgroundColor = "red"
    positionArr.push(a)
    document.querySelectorAll("td")[positionArr[(i++ - size)]].style.backgroundColor = "rgb(225, 225, 225)"
    if (a === rand)
    {
        size++
        deathzone = positionArr[positionArr.length - size]
        console.log("Head position:" + a + " Tail position:" + deathzone)

        food()
    }

    if (a === deathzone && positionArr.length >= 4)
    {
        alert("you died")
    }

   

}


window.addEventListener("keydown", (e) =>{
    document.body.onkeydown = function(e){
        if(e.keyCode == 40 && a < 1008){
            // document.querySelectorAll("td")[a].style.backgroundColor = "rgb(225, 225, 225)"
            a = (a + 48);
            position()
        }
        if(e.keyCode == 39){
            if (!RightEdge.includes(a)){
                // document.querySelectorAll("td")[a].style.backgroundColor = "rgb(225, 225, 225)"
                    a = (a + 1);
                    position()             }
                if (RightEdge.includes(a)){
                    // document.querySelectorAll("td")[a].style.backgroundColor = "rgb(225, 225, 225)"
                    a = (a - 47);
                    position()            }
            
        }
        if(e.keyCode == 37 && a > 0){
            if (!LeftEdge.includes(a)){
                // document.querySelectorAll("td")[a].style.backgroundColor = "rgb(225, 225, 225)"
                    a = (a - 1);
                    position()             }
                if (LeftEdge.includes(a)){
                    // document.querySelectorAll("td")[a].style.backgroundColor = "rgb(225, 225, 225)"
                    a = (a + 47);
                    position()            }
        }
        if(e.keyCode == 38 && a > 47){
            // document.querySelectorAll("td")[a].style.backgroundColor = "rgb(225, 225, 225)"
            a = (a - 48);
            position()
        }
    
    }

    

    




})

function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function food() {
    rand = generateRandomIntegerInRange(1, 1055);
    document.querySelectorAll("td")[rand].style.backgroundColor = "green"
    foodposition.push(rand)

}

food()
