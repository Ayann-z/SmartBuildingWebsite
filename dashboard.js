const ctx=document.getElementById("health");


new Chart(ctx,{

type:"doughnut",

data:{


labels:[
"健康",
"风险"
],


datasets:[{

data:[
72,
28
],


backgroundColor:[

"#00eaff",
"#12304c"

]


}]

},


options:{


plugins:{


legend:{


labels:{


color:"#fff"

}

}

}

}

});
