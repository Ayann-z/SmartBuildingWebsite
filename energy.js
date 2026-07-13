const data={


pv:[
0,0,0,0,0,
5,12,20,35,45,
55,60,65,60,50,
40,25,10,0,0,
0,0,0,0,0
],


load:[
15,14,14,13,14,
18,25,30,40,45,
50,55,60,58,55,
50,45,40,35,30,
25,20,18,16,15
],


soc:[
90,88,86,84,82,
80,75,70,65,60,
55,50,55,60,70,
80,85,90,92,95,
94,93,92,91,90
]


};



let index=6;


let canvas=document.getElementById(
"energyChart"
);


let ctx=canvas.getContext("2d");


canvas.width=1000;

canvas.height=300;



function draw(){


ctx.clearRect(
0,
0,
1000,
300
);



drawLine(data.pv,"#00ffff");

drawLine(data.load,"#00ff99");

drawLine(
data.soc.map(x=>x/2),
"#ffd000"
);



let x=index/24*1000;


ctx.fillStyle="white";

ctx.beginPath();

ctx.arc(
x,
150,
8,
0,
Math.PI*2
);


ctx.fill();


}




function drawLine(arr,color){


ctx.beginPath();


arr.forEach((v,i)=>{


let x=i/24*1000;


let y=260-v/70*220;



if(i==0)

ctx.moveTo(x,y);

else

ctx.lineTo(x,y);


});



ctx.strokeStyle=color;

ctx.lineWidth=3;

ctx.stroke();


}




function update(){


let pv=data.pv[index];

let load=data.load[index];

let soc=data.soc[index];



pvPower.innerHTML=pv+" kW";


batterySOC.innerHTML=
"SOC "+soc+"%";


buildingLoad.innerHTML=
load+" kW";



pvTotal.innerHTML=
pv+" kWh";


socTotal.innerHTML=
soc+"%";


loadTotal.innerHTML=
load+" kW";



clock.innerHTML=
index+":00";





if(pv>load)

{


strategy.innerHTML=
"☀ 光伏富余 → 储能充电";


battery.classList.add(
"activeNode"
);


}

else

{


strategy.innerHTML=
"🔋 储能放电 → 建筑供能";


battery.classList.remove(
"activeNode"
);


}



draw();


}







setInterval(()=>{


index++;


if(index>24)

index=6;


update();


},1500);







timeSlider.oninput=function(){


index=this.value;


update();


};








pvBtn.onclick=function(){


strategy.innerHTML=
"☀ 光伏系统实时运行";


};



batteryBtn.onclick=function(){


strategy.innerHTML=
"🔋 储能SOC智能管理";


};



loadBtn.onclick=function(){


strategy.innerHTML=
"🏠 建筑负荷响应控制";


};



hvacBtn.onclick=function(){


strategy.innerHTML=
"❄ HVAC智能调节";


};





update();
