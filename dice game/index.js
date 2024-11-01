var randomnumber1=(Math.floor(Math.random()*6))+1;
document.querySelector(".img1").setAttribute("src","./images/dice"+randomnumber1+".png");
var randomnumber2=(Math.floor(Math.random()*6))+1;
document.querySelector(".img2").setAttribute("src","./images/dice"+randomnumber2+".png");
var greater=0;
if(randomnumber1!=randomnumber2)
{
if(randomnumber1>randomnumber2)
{
    greater=1;
}

else
{
    greater=2;
}
document.querySelector("h1").innerHTML=" Player "+greater+" wins"
}