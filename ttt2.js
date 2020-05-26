if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/sw.js')
  .then((reg) => console.log('działa',reg))
  .catch((err) => console.log('dupa',err))
}


var player=1;
var bigplayer=1;
var p2;
var i=1,a=1;
var s1,s2,s3,s4;
var tab = new Array(5);
var wynik1=0,wynik2=0;
function kosno()
{
  document.body.innerHTML="<div >kosno to chuj, nie graj w te gre</div>";
  document.body.style.backgroundColor = "pink";
  document.body.style.fontSize = "100px";
  document.body.style.color = "blue";

}
 function clearkosno(){

   //alert("kosno cipa");

  for (i = 0; i < tab.length; i++) {
   for (j = 0; j < tab[0].length; j++) {
    tab[i][j] = new Array(5);
   }
 }
 for (i = 1; i <=4; i++) {
  for (j = 1; j<= 4; j++) {
   for(q=1;q<=4;q++)
   {
     if(tab[i][j][q]!=1&&tab[i][j][q]!=2)
     {
       document.getElementById("p"+i+"x"+j+"y"+q).innerHTML="";

     }

   }
  }
}

  add_onclick_and_hover();
   if(a==2){
     player=1;
     a=1;
   }
   else{
     player=2;
     a=2;
   }
   //console.log(player);

   document.getElementById(s1).style.color="var(--second)";
   document.getElementById(s2).style.color="var(--second)";
   document.getElementById(s3).style.color="var(--second)";
   document.getElementById(s4).style.color="var(--second)";
   s1="";
   s2="";
   s3="";
   s4="";
   document.getElementById('plansze').style.opacity = 1;
   document.getElementById('gracz').style.opacity = 1;
   document.getElementById('graczwygral').style.pointerEvents = "none";
   document.getElementById("graczwygral").innerHTML='' ;
   document.getElementById('graczwygral').style.opacity = 0;
   if(player==1) document.getElementById('gracz').innerHTML = "Player1(o)";
   else document.getElementById('gracz').innerHTML = "Player2(x)";
 }


for (i = 0; i < tab.length; i++) {
 tab[i] = new Array(5);
}
// create 3D
for (i = 0; i < tab.length; i++) {
 for (j = 0; j < tab[0].length; j++) {
  tab[i][j] = new Array(5);
 }
}
for(var a=1;a<=4;a++)
{
  for(var b=1;b<=4;b++)
  {
    for(var c=1;c<=4;c++)
    {
      tab[a][b][c]=0;
    }
  }
}

function add_onclick_and_hover()
{
  for(var a=1;a<=4;a++)
  {
    for(var x=1;x<=4;x++)
    {
      for(var y=1;y<=4;y++)
      {
        document.getElementById("p"+a+"x"+x+"y"+y).setAttribute("onclick","mark(" + a + "," + x + "," + y + ");");
        if(x==1&&y==1) document.getElementById("p"+a+"x"+x+"y"+y).setAttribute("class","c4");
        if((x==2||x==3)&&y==1) document.getElementById("p"+a+"x"+x+"y"+y).setAttribute("class","b");
        if(x==4&&y==1) document.getElementById("p"+a+"x"+x+"y"+y).setAttribute("class","c3");
        if(x==1&&(y==2||y==3)) document.getElementById("p"+a+"x"+x+"y"+y).setAttribute("class","l");
        if((x==2||x==3)&&(y==2||y==3)) document.getElementById("p"+a+"x"+x+"y"+y).setAttribute("class","m");
        if(x==4&&(y==2||y==3)) document.getElementById("p"+a+"x"+x+"y"+y).setAttribute("class","r");
        if(x==1&&y==4) document.getElementById("p"+a+"x"+x+"y"+y).setAttribute("class","c1");
        if((x==3&y==4)||(x==2&y==4)) document.getElementById("p"+a+"x"+x+"y"+y).setAttribute("class","t");
        if(x==4&&y==4) document.getElementById("p"+a+"x"+x+"y"+y).setAttribute("class","c2");
      }
    }
  }
}


function erase_onclick_and_hover()
{
  for(var a=1;a<=4;a++)
  {
    for(var x=1;x<=4;x++)
    {
      for(var y=1;y<=4;y++)
      {
        document.getElementById("p"+a+"x"+x+"y"+y).setAttribute("onclick",";");
        if(x==1&&y==1) document.getElementById("p"+a+"x"+x+"y"+y).setAttribute("class","c4a");
        if((x==2||x==3)&&y==1) document.getElementById("p"+a+"x"+x+"y"+y).setAttribute("class","ba");
        if(x==4&&y==1) document.getElementById("p"+a+"x"+x+"y"+y).setAttribute("class","c3a");
        if(x==1&&(y==2||y==3)) document.getElementById("p"+a+"x"+x+"y"+y).setAttribute("class","la");
        if((x==2||x==3)&&(y==2||y==3)) document.getElementById("p"+a+"x"+x+"y"+y).setAttribute("class","ma");
        if(x==4&&(y==2||y==3)) document.getElementById("p"+a+"x"+x+"y"+y).setAttribute("class","ra");
        if(x==1&&y==4) document.getElementById("p"+a+"x"+x+"y"+y).setAttribute("class","c1a");
        if((x==3&y==4)||(x==2&y==4)) document.getElementById("p"+a+"x"+x+"y"+y).setAttribute("class","ta");
        if(x==4&&y==4) document.getElementById("p"+a+"x"+x+"y"+y).setAttribute("class","c2a");
      }
    }
  }
}
function ms(p1,x1,y1,p2,x2,y2,p3,x3,y3,p4,x4,y4)
{
  s1="p"+p1+"x"+x1+"y"+y1;
  s2="p"+p2+"x"+x2+"y"+y2;
  s3="p"+p3+"x"+x3+"y"+y3;
  s4="p"+p4+"x"+x4+"y"+y4;
  return 0;
}
function eq(a,b,c,d)
{
  if(a==b&&b==c&&c==d&&c>0) return 1;
  else return 0;
}
function checkwin()
{
  //2D PROSTE I SKOS
  for(var a=1;a<5;a++)
  {

    if(eq(tab[a][1][1],tab[a][1][2],tab[a][1][3],tab[a][1][4])==1) {ms(a,1,1,a,1,2,a,1,3,a,1,4); return 1;}
    if(eq(tab[a][2][1],tab[a][2][2],tab[a][2][3],tab[a][2][4])==1) {ms(a,2,1,a,2,2,a,2,3,a,2,4); return 1;}
    if(eq(tab[a][3][1],tab[a][3][2],tab[a][3][3],tab[a][3][4])==1) {ms(a,3,1,a,3,2,a,3,3,a,3,4); return 1;}
    if(eq(tab[a][4][1],tab[a][4][2],tab[a][4][3],tab[a][4][4])==1) {ms(a,4,1,a,4,2,a,4,3,a,4,4); return 1;}

    if(eq(tab[a][1][1],tab[a][2][1],tab[a][3][1],tab[a][4][1])==1) {ms(a,1,1,a,2,1,a,3,1,a,4,1); return 1;}
    if(eq(tab[a][1][2],tab[a][2][2],tab[a][3][2],tab[a][4][2])==1) {ms(a,1,2,a,2,2,a,3,2,a,4,2); return 1;}
    if(eq(tab[a][1][3],tab[a][2][3],tab[a][3][3],tab[a][4][3])==1) {ms(a,1,3,a,2,3,a,3,3,a,4,3); return 1;}
    if(eq(tab[a][1][4],tab[a][2][4],tab[a][3][4],tab[a][4][4])==1) {ms(a,1,4,a,2,4,a,3,4,a,4,4); return 1;}

    if(eq(tab[a][1][1],tab[a][2][2],tab[a][3][3],tab[a][4][4])==1) {ms(a,1,1,a,2,2,a,3,3,a,4,4); return 1;}
    if(eq(tab[a][1][4],tab[a][2][3],tab[a][3][2],tab[a][4][1])==1) {ms(a,1,4,a,2,3,a,3,2,a,4,1); return 1;}
  }

  //PIONOWE KRESKI
  if(eq(tab[1][1][1],tab[2][1][1],tab[3][1][1],tab[4][1][1])) {ms(1,1,1,2,1,1,3,1,1,4,1,1); return 1;}
  if(eq(tab[1][1][2],tab[2][1][2],tab[3][1][2],tab[4][1][2])) {ms(1,1,2,2,1,2,3,1,2,4,1,2); return 1;}
  if(eq(tab[1][1][3],tab[2][1][3],tab[3][1][3],tab[4][1][3])) {ms(1,1,3,2,1,3,3,1,3,4,1,3); return 1;}
  if(eq(tab[1][1][4],tab[2][1][4],tab[3][1][4],tab[4][1][4])) {ms(1,1,4,2,1,4,3,1,4,4,1,4); return 1;}
  if(eq(tab[1][2][1],tab[2][2][1],tab[3][2][1],tab[4][2][1])) {ms(1,2,1,2,2,1,3,2,1,4,2,1); return 1;}
  if(eq(tab[1][2][2],tab[2][2][2],tab[3][2][2],tab[4][2][2])) {ms(1,2,2,2,2,2,3,2,2,4,2,2); return 1;}
  if(eq(tab[1][2][3],tab[2][2][3],tab[3][2][3],tab[4][2][3])) {ms(1,2,3,2,2,3,3,2,3,4,2,3); return 1;}
  if(eq(tab[1][2][4],tab[2][2][4],tab[3][2][4],tab[4][2][4])) {ms(1,2,4,2,2,4,3,2,4,4,2,4); return 1;}
  if(eq(tab[1][3][1],tab[2][3][1],tab[3][3][1],tab[4][3][1])) {ms(1,3,1,2,3,1,3,3,1,4,3,1); return 1;}
  if(eq(tab[1][3][2],tab[2][3][2],tab[3][3][2],tab[4][3][2])) {ms(1,3,2,2,3,2,3,3,2,4,3,2); return 1;}
  if(eq(tab[1][3][3],tab[2][3][3],tab[3][3][3],tab[4][3][3])) {ms(1,3,3,2,3,3,3,3,3,4,3,3); return 1;}
  if(eq(tab[1][3][4],tab[2][3][4],tab[3][3][4],tab[4][3][4])) {ms(1,3,4,2,3,4,3,3,4,4,3,4); return 1;}
  if(eq(tab[1][4][1],tab[2][4][1],tab[3][4][1],tab[4][4][1])) {ms(1,4,1,2,4,1,3,4,1,4,4,1); return 1;}
  if(eq(tab[1][4][2],tab[2][4][2],tab[3][4][2],tab[4][4][2])) {ms(1,4,2,2,4,2,3,4,2,4,4,2); return 1;}
  if(eq(tab[1][4][3],tab[2][4][3],tab[3][4][3],tab[4][4][3])) {ms(1,4,3,2,4,3,3,4,3,4,4,3); return 1;}
  if(eq(tab[1][4][4],tab[2][4][4],tab[3][4][4],tab[4][4][4])) {ms(1,4,4,2,4,4,3,4,4,4,4,4); return 1;}



  //PRZEKATNE 3D
  if(eq(tab[1][1][1],tab[2][2][2],tab[3][3][3],tab[4][4][4])==1) {ms(1,1,1,2,2,2,3,3,3,4,4,4); return 1;}
  if(eq(tab[1][4][4],tab[2][3][3],tab[3][2][2],tab[4][1][1])==1) {ms(1,4,4,2,3,3,3,2,2,4,1,1); return 1;}
  if(eq(tab[4][1][4],tab[3][2][3],tab[2][3][2],tab[1][4][1])==1) {ms(4,1,4,3,2,3,2,3,2,1,4,1); return 1;}
  if(eq(tab[1][1][4],tab[2][2][3],tab[3][3][2],tab[4][4][1])==1) {ms(1,1,4,2,2,3,3,3,2,4,4,1); return 1;}

  //PRZEKATNE 2D ALE INNE
  for(var a=1;a<=4;a++)
  {
    if(eq(tab[1][a][1],tab[2][a][2],tab[3][a][3],tab[4][a][4])==1) {ms(1,a,1,2,a,2,3,a,3,4,a,4); return 1;}
    if(eq(tab[1][a][4],tab[2][a][3],tab[3][a][2],tab[4][a][1])==1) {ms(1,a,4,2,a,3,3,a,2,4,a,1); return 1;}
  }
  for(var a=1;a<=4;a++)
  {
    if(eq(tab[1][1][a],tab[2][2][a],tab[3][3][a],tab[4][4][a])==1) {ms(1,1,a,2,2,a,3,3,a,4,4,a); return 1;}
    if(eq(tab[1][4][a],tab[2][3][a],tab[3][2][a],tab[4][1][a])==1) {ms(1,4,a,2,3,a,3,2,a,4,1,a); return 1;}
  }
  return 0;
}


function mark(p, x, y)
{

  i++;
  if(player==1) player=2;
  else player=1;

  if(player==1) document.getElementById("p"+p+"x"+x+"y"+y).innerHTML= "x";

  if(player==2) document.getElementById("p"+p+"x"+x+"y"+y).innerHTML= "o";

  tab[p][x][y]=player;


  document.getElementById("p"+p+"x"+x+"y"+y).setAttribute("onclick",";");

  if(x==1&&y==1) document.getElementById("p"+p+"x"+x+"y"+y).setAttribute("class","c4a");
  if((x==2||x==3)&&y==1) document.getElementById("p"+p+"x"+x+"y"+y).setAttribute("class","ba");
  if(x==4&&y==1) document.getElementById("p"+p+"x"+x+"y"+y).setAttribute("class","c3a");
  if(x==1&&(y==2||y==3)) document.getElementById("p"+p+"x"+x+"y"+y).setAttribute("class","la");
  if((x==2||x==3)&&(y==2||y==3)) document.getElementById("p"+p+"x"+x+"y"+y).setAttribute("class","ma");
  if(x==4&&(y==2||y==3)) document.getElementById("p"+p+"x"+x+"y"+y).setAttribute("class","ra");
  if(x==1&&y==4) document.getElementById("p"+p+"x"+x+"y"+y).setAttribute("class","c1a");
  if((x==3&y==4)||(x==2&y==4)) document.getElementById("p"+p+"x"+x+"y"+y).setAttribute("class","ta");
  if(x==4&&y==4) document.getElementById("p"+p+"x"+x+"y"+y).setAttribute("class","c2a");


  if(checkwin()==1)
  {
    var q;
    if(player==1) q=2;
    else q=1;
    win(q,player);

  }else if(i==69) remis();
  var x;
  if(player==1) x="(o)";
  else x="(x)";
document.getElementById("gracz").innerHTML= "Player"+player+x;


}
function remis()
{

  document.getElementById('plansze').style.opacity = 0.2;
  document.getElementById('gracz').style.opacity = 0;

  document.getElementById("graczwygral").innerHTML='Remis!   <div class="reset" onclick="clearkosno()">JESZCZE RAZ?</div>' ;
  document.getElementById('graczwygral').style.opacity = 1;
  document.getElementById('graczwygral').style.pointerEvents = "all";
}
function win(a,b)
{
  erase_onclick_and_hover();
  document.getElementById(s1).style.color="green";
  document.getElementById(s2).style.color="green";
  document.getElementById(s3).style.color="green";
  document.getElementById(s4).style.color="green";
  document.getElementById('plansze').style.opacity = 0.2;
  document.getElementById('gracz').style.opacity = 0;

  if(b==1) document.getElementById("gracz").innerHTML= "player"+b+"(o)";
  else document.getElementById("gracz").innerHTML= "player"+b+"(x)";
  if(player==1) wynik2++;
  else wynik1++;
  //console.log(wynik1+":"+wynik2);
  document.getElementById('tabelaw').innerHTML = "<div class='dr'>Player1: "+wynik1+" </div><div class='dr'> Player2: "+wynik2+"</div>";
  //document.getElementById('tabelaw').innerHTML =  wynik1+":"+wynik2;
  if(bigplayer==1)
  {
    bigplayer++;
    player=1;
  }else {
    bigplayer--;
    player=2;
  }
  document.getElementById("graczwygral").innerHTML='Player'+a+' won!   <div class="reset" onclick="clearkosno()">PLAY AGAIN?</div>' ;
  document.getElementById('graczwygral').style.opacity = 1;
  document.getElementById('graczwygral').style.pointerEvents = "all";
}

function kosnoo(s){
  const element = document.getElementById(s);
  element.style.color = "grey";
  if(player==2) element.innerHTML = "x";
  else element.innerHTML = "o";
}
function kosnoe(s){
  const element = document.getElementById(s);
  element.style.color = "lightgrey";
  element.innerHTML = "";
}



var button = document.querySelector('a');
var root = document.querySelector(':root');
var theme= "dark";
var dupabartosza = () =>{
  console.log('dupa');
  if(theme=="dark"){
    root.style.setProperty('--bg','#EEEEEE');
    root.style.setProperty('--second','#111111');
    root.style.setProperty('--hover','#CCCCCC');
    theme="light";
  }
  else{
    root.style.setProperty('--bg','#111111');
    root.style.setProperty('--second','lightgrey');
    root.style.setProperty('--hover','#333333');
    theme="dark";
  }



}

const ohujchodzi = () =>{
  document.querySelector('#plansze').classList.toggle('ohh');
}
