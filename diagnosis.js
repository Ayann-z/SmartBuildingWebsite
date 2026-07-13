let ctx =
document.getElementById("radar");



let radar =
new Chart(ctx,{


type:"radar",


data:{


labels:[

"保温性能",
"结构安全",
"耐久性",
"节能水平",
"舒适性"

],


datasets:[{


label:"健康指数",


data:[0,0,0,0,0],


borderColor:"#00eaff",


backgroundColor:
"rgba(0,200,255,0.2)"


}]


},


options:{


scales:{


r:{


min:0,

max:100,


ticks:{


color:"#aaa"

}


}


},


plugins:{


legend:{


labels:{


color:"white"

}


}

}



}

});







function update(

name,

score,

risk,

problem,

solution,

data

){



document.getElementById("part")
.innerHTML=name;



document.getElementById("score")
.innerHTML=score;



document.getElementById("risk")
.innerHTML=risk;



document.getElementById("problem")
.innerHTML=
"问题："+problem;



document.getElementById("solution")
.innerHTML=
"建议："+solution;



radar.data.datasets[0].data=data;


radar.update();



}




// 屋顶


function roof(){


update(

"01 屋顶系统",

76,

"🟡 中等风险",

"保温层厚度不足，冬季热损失较大",

"增加高性能保温材料",

[70,80,85,65,75]

);


}




//结构


function structure(){


update(

"02 结构体系",

92,

"🟢 安全",

"主体结构稳定",

"保持现状，定期检测",

[95,95,90,80,85]

);


}





//外墙


function wall(){


update(

"03 外墙系统",

68,

"🟠 高风险",

"外围护结构传热系数偏高",

"增加120mm XPS保温层",

[55,85,70,60,65]

);


}






//室内


function wallInside(){


update(

"04 室内空间",

82,

"🟢 良好",

"空间功能基本满足",

"优化空间布局",

[80,85,80,75,85]

);


}






//机电


function machine(){


update(

"05 机电管线",

60,

"🔴 风险",

"设备老化，能源利用效率低",

"升级智慧机电控制系统",

[55,70,65,50,60]

);


}





//基础


function foundation(){


update(

"06 基础结构",

90,

"🟢 安全",

"基础承载能力良好",

"保持维护",

[90,95,90,80,85]

);


}
