
//Opgave 1

//a

$("#div111").css('background-color', 'blue');
$("#div222").css('background-color', 'yellow');
$("#div333").css('background-color', 'green');


//b
$(document).ready(function () {
    $("#hide").click(function () {
        $("#hover").first().hide();
    });
});

//c
$("#div222").hover(function () {
    $(this).css('borderWidth', '4px');
});

//d
$("#div333").click(function () {
    $(this).css('font-size', '50px');
});


//Opgave 2

var divs = document.getElementsByClassName("opg2");

for (var i = 0; i < divs.length; i++)
{
    $(divs[i]).click(function () {
        var newValue;
        newValue = $(this).text();
        parseInt(newValue);
        $(this).text(newValue * 2);
    });
}

//Opgave 3

$("li").filter(":odd").css("background-color", "lightgrey");

var lis = document.getElementsByTagName("li");

for (var i = 0; i < lis.length; i++)
{
    $(lis[i]).click(function () {
        $(this).css('font-size', $(this).prev().css('font-size'));
        $(this).css('font-size', '+=1');
    });
}

//Opgave 5
$('.next').click(function(){
   var  emptyInputs = $(this).parent().find('input[type="text"]').filter(function(){
      return $(this).val() === "";
  });
  if(emptyInputs.length)
  {
      alert('Fail!');
  }
});

//Opgave 6
var person = new Object();
person.persons = new Array();

person.persons.push({"FirstName":"Louise","LastName":"Nielsen"});
person.persons.push({"FirstName":"Siff","LastName":"Carlsen"});

$.each(person.persons, function(index1, index2){
    console.log(index2.FirstName + ", " + index2.LastName);
    
});

//TABLE ROWS MANGLER O_X ...

//Opgave 1
//Opgaven som før hen var linket på opgaveformuleringen 'Study Point Exercise-4-JavaScript, JQuery, AJAX and REST'

function submitMyForm()
{
    document.getElementById("div1").innerText = document.getElementById("myForm").elements[0].value;
    document.getElementById('div2').innerText = document.getElementById("myForm").elements[1].value;
    document.getElementById('div3').innerText = document.getElementById("myForm").elements[2].value;
    document.getElementById('div4').innerText = document.getElementById("myForm").elements[3].value;
}

function textToDiv(divElement, text)
{
    divElement.innerText = text;
}

var students = new Array();
function testAdminStud()
{
    var student1 = {id: 1, name: "Louise", classroom: 123};
    adminStud(student1, logItem);
    adminStud(student1, registerItem);
    var student2 = {id: 2, name: "Farmanden", classroom: 123};
    adminStud(student2, logItem);
    adminStud(student2, registerItem);
}

function adminStud(student, callbackFunction)
{
    callbackFunction(student);
}

function logItem(student)
{
    console.log("Student id: " + student.id + ", Student name: "
            + student.name + ", Classroom" + student.classroom);
}

function registerItem(student)
{
    students[student];
}


