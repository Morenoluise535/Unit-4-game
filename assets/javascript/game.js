$(document).ready(function() {

var curentnum = 0
var wins = 0
var losses = 0


var targetnumber = Math.floor(Math.random() * 199) +40;
console.log(targetnumber);

$(".rannum").html("<h1>" + targetnumber + "</h1>");

var numberoptions1 = Math.floor(Math.random() * 20) + 5;
var numberoptions2 = Math.floor(Math.random() * 20) + 5;
var numberoptions3 = Math.floor(Math.random() * 40) + 20;
var numberoptions4 = Math.floor(Math.random() * 40) + 20;

$('#numwins').text(wins);
$('#numlosses').text(losses);

function reset(){
    targetnumber = Math.floor(Math.random() * 60) +40;
    $(".rannum").text(targetnumber);
    numberoptions1 = Math.floor(Math.random() * 10) + 1;
    numberoptions2 = Math.floor(Math.random() * 10) + 1;
    numberoptions3 = Math.floor(Math.random() * 15) + 10;
    numberoptions4 = Math.floor(Math.random() * 15) + 10;
    curentnum = 0
    $("#curentnum").text(curentnum)
    }

function victory() {
    wins++;
    $(".numwins").html("<h2>" + "Wins: "+ wins + "</h2>");
    reset();
}

function failier() {
    losses++
    $(".numlosses").html("<h2>" + "Losses: "+ losses + "</h2>");
    reset();
}

$("#mgrey").on ('click', function(){
    curentnum = curentnum + numberoptions1;
    console.log("New userTotal= " + curentnum);
    $(".curentnum").html("<h3>" + curentnum + "</h3>"); 
        
    if (curentnum == targetnumber){
        victory();
    }
    else if ( curentnum > targetnumber){
        failier();
    }
})

$("#wgaur").on ('click', function(){
    curentnum = curentnum + numberoptions2;
    console.log("New userTotal= " + curentnum);
    $(".curentnum").html("<h3>" + curentnum + "</h3>");
    if (curentnum == targetnumber){
        victory();
    }
    else if ( curentnum > targetnumber){
        failier();
    }
})

$("#wgrey").on ('click', function(){
    curentnum = curentnum + numberoptions3;
    console.log("New userTotal= " + curentnum);
    $(".curentnum").html("<h3>" + curentnum + "</h3>"); 
    if (curentnum == targetnumber){
        victory();
    }
    else if ( curentnum > targetnumber){
        failier();
    }
})
        
$("#mgaur").on ('click', function(){
    curentnum = curentnum + numberoptions4;
    console.log("New userTotal= " + curentnum);
    $(".curentnum").html("<h3>" + curentnum + "</h3>"); 
    if (curentnum == targetnumber){
        victory();
    }
    else if ( curentnum > targetnumber){
        failier();
    }


});


});