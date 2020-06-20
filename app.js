let date = new Date();
VIS = (n,s)=>{
    for(let i=1;i<5;i++){
      if(s.charAt(i-1)=='1'){
        document.getElementById("a"+i+n).style.backgroundColor = "white";
      }else{
        document.getElementById("a"+i+n).style.backgroundColor = "black";
      }
    }
}
div = (a,b)=>(a-a%b)/b;
f= (a)=>{
    if(a.length==4) return a;
    if(a.length==3) return "0"+a;
    if(a.length==2) return "00"+a;
    if(a.length==1) return "000"+a;
}
const toBin = (a)=>{
    let b=1;
    while(b<=a){
        b*=2;
    }
    if(b>a) b/=2;
    s="";
    while(b>0){
        if(b<=a){
            a-=b;
            s+="1";
        }else s+=0;
        b=div(b,2);
    }
    return s;
}
updateClock = ()=>{
  let currentTime = new Date ( );

  let currentHours = currentTime.getHours ( );
  let currentMinutes = currentTime.getMinutes ( );
  let currentSeconds = currentTime.getSeconds ( );
  currentHours = ( currentHours < 10 ? "0" : "" ) + currentHours;
  currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
  currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
  return{
      a1: div(currentHours,10),
      a2: currentHours%10,
      a3: div(currentMinutes,10),
      a4: currentMinutes%10,
      a5: div(currentSeconds,10),
      a6: currentSeconds%10
  }
}
setInterval(()=>{
    const timeString=updateClock();
    document.getElementById("time").innerHTML=
    `
    <h2 class="center col s2">${timeString.a1}<h2>
    <h2 class="center col s2">${timeString.a2}<h2>
    <h2 class="center col s2">${timeString.a3}<h2>
    <h2 class="center col s2">${timeString.a4}<h2>
    <h2 class="center col s2">${timeString.a5}<h2>
    <h2 class="center col s2">${timeString.a6}<h2>
    `
    const bin1 = f(toBin(timeString.a1));
    const bin2 = f(toBin(timeString.a2));
    const bin3 = f(toBin(timeString.a3));
    const bin4 = f(toBin(timeString.a4));
    const bin5 = f(toBin(timeString.a5));
    const bin6 = f(toBin(timeString.a6));
    
    VIS(1,bin1);
    VIS(2,bin2);
    VIS(3,bin3);
    VIS(4,bin4);
    VIS(5,bin5);
    VIS(6,bin6);
    
    
},1000);
