
// let button1 = document.getElementById('button1');


// // You want to access the value of the button1 ID
// // button1 contains the entire button1 tag
// console.log(button1);


// function one(){
//     // You have to get the value of the button1
//     // console.log(button1.value);

//     let value1 = button1.value;
// }
// function two(){
//     let value = "2";
//     console.log(value);
// }
// function three(){
//     let value = "3";
//     console.log(value);
// }
// function four(){
//     let value = "4";
//     console.log(value);
// }
// function five(){
//     let value = "5";
//     console.log(value);
// }
// function six(){
//     let value = "6";
//     console.log(value);
// }
// function seven(){
//     let value = "7";
//     console.log(value);
// }
// function eigth(){
//     let value = "8";
//     console.log(value);
// }
// function nine(){
//     let value = "9";
//     console.log(value);
// }
// function add(){
//     var v1; var v2;
// return v1+v2;
// }
// function add(){
//     var v1; var v2;
// return v1-v2;
// }
let values=document.getElementById("screen");
// function cancel(){
//     values.value=
// }

function Percentage(){
    values.value+="%";
}
function cut(){
    values.value=" ";
}
function Divide(){
    values.value+="/";
}
function seven(){
    values.value+=7;
}
function eight(){
    values.value+=8;
}
function nine(){
    values.value+=9;
}
function multi(){
    values.value+="*";
}
function four(){
    values.value+=4;
}
function five(){
    values.value+=5;
}
function six(){
    values.value+=6;
}
function diff(){
    values.value+="-";
}
function one(){
    values.value+=1;
}
function two(){
    values.value+=2;
}
function three(){
    values.value+=3;
}
function add(){
    values.value+="+";

}
function zero(){
    values.value+=0;
}
function clear(){
   let c="0";
   values.value=c;
}
function equal(){
    let x=   values.value;
    values.value=eval(x);
}
function decimal(){
    values.value+=".";
}
function cancel(){
    let x=values.value;
   let y= x.slice(0,-1);
    values.value=y;
}