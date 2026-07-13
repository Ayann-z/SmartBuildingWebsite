let chart;



window.onload=function(){


const ctx=document.getElementById("energyChart");


chart=new Chart(ctx,{

type:"bar",

data:{


labels:[

"优化前",

"优化后"

],


datasets:[{


label:"建筑能耗",

data:[151.1,151.1],


backgroundColor:[

"#777",

"#00eaff"

]


}]

},



options:{


animation:{


duration:1500


},



scales:{


y:{


beginAtZero:true,


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



}



//滑块显示


energy.oninput=function(){

energyValue.innerHTML=this.value+"%";

}


cost.oninput=function(){

costValue.innerHTML=this.value+"%";

}



carbon.oninput=function(){

carbonValue.innerHTML=this.value+"%";

}





function generatePlan(){


let e = Number(energy.value);

let c = Number(cost.value);

let co = Number(carbon.value);



// =====================
// 模拟多目标优化计算
// =====================


let improve =

e * 0.35 +
co * 0.25 +
c * 0.05;



let after =

151.1 * (1 - improve / 100);



// 最低能耗限制

if(after < 55){

    after = 55;

}




// 节能率

let saving =

((151.1-after)/151.1*100)
.toFixed(1);




// =====================
// 中间方案显示
// =====================


document.getElementById("result").innerHTML = `


<div class="solution">


<h2>
方案A：动态优化方案
</h2>



<p>
🏠 外墙：
120mm XPS保温层
</p>


<p>
🪟 门窗：
Low-E三玻窗
</p>


<p>
🏗 屋面：
高性能保温系统
</p>


<p>
☀ 光伏：
建筑一体化光伏
</p>



<hr>



<h2>
优化计算结果
</h2>



<p>
综合能耗：

151.1 →

${after.toFixed(1)}

kWh/(㎡·a)

</p>



<p>

节能率：

${saving}%

</p>



<p>

当前优化权重：

节能 ${e}%

&nbsp;

成本 ${c}%

&nbsp;

碳排 ${co}%

</p>



</div>


`;





// =====================
// 更新柱状图
// =====================


chart.data.datasets[0].data=[

151.1,

after

];


chart.update();






// =====================
// 更新综合评价
// =====================


let level;

let stars;



let saveNumber = Number(saving);




if(saveNumber >= 50){


    level="A+";

    stars="★★★★★";


}

else if(saveNumber >=35){


    level="A";

    stars="★★★★☆";


}

else if(saveNumber >=20){


    level="B";

    stars="★★★☆☆";


}

else{


    level="C";

    stars="★★☆☆☆";


}






// 节能潜力

document.getElementById("saving")
.innerHTML =

saving + "%";




// 碳减排

document.getElementById("carbonReduce")
.innerHTML =

(co*0.6).toFixed(1)+"%";




// 等级

document.getElementById("level")
.innerHTML =

level;



// 星级

document.getElementById("stars")
.innerHTML =

stars;



}