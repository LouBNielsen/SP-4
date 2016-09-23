/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//Opgave 1
var listOfDiv = document.getElementsByTagName("div");
listOfDiv.length;
listOfDiv[0].style.backgroundColor = "blue";
listOfDiv[1].style.backgroundColor = "yellow";
listOfDiv[2].style.backgroundColor = "green";

//Opgave 2
document.write("<h2><b>Opgave 2</b></h2>");

function person(firstName, lastName, phone, email)
{
    this.first = firstName;
    this.last = lastName;
    this.phoneNr = phone;
    this.emailAdd = email;

    this.firstName = function ()
    {
        return  this.first;
    };
    this.lastName = function ()
    {
        return this.last;
    };
    this.phone = function ()
    {
        return this.phoneNr;
    };
    this.email = function ()
    {
        return this.emailAdd;
    };
}

var person1 = new person("Louise", "Nielsen", 41100532, "l@hotmail.com");
var person2 = new person("Emilie", "Nielsen", 56854598, "e@hotmail.com");
var person3 = new person("Peter", "Lange", 45972122, "p@hotmail.com");

var personArr = [person1, person2, person3];

document.write('<table>');
document.write('<th><Firstname></th>');
document.write('<th><Lastname></th>');
document.write('<th><Phone></th>');
document.write('<th><Email></th>');

for (var i = 0; i < personArr.length; i++)
{
    document.write('<tr><td>' + personArr[i].firstName() + '</td><td>' +
            personArr[i].lastName() + '</td><td>' +
            personArr[i].phone() + '</td><td>' +
            personArr[i].email() + '</td></tr>');
}

document.write('</table>');

//Opgave 3

function divCon1()
{
    document.getElementById("div1").innerHTML = "I am div 1";
}

function divCon2()
{

    document.getElementById("div2").innerHTML = "I am div 2";

}

function divCon3()
{
    document.getElementById("div3").innerHTML = "I am div 3";
}

//Opgave 4

function omo1()
{
    document.getElementById("div4").innerHTML = "I am div 6";
}

function omo2()
{
    document.getElementById("div5").innerHTML = "I am div 6";
}

function omo3()
{
    document.getElementById("div6").innerHTML = "I am div 6";
}

//Opgave 5
var textbox;
var radiobutton;
var checkbox;

function submitForm()
{
    textbox = document.getElementById("myForm").elements[0].value;
    radiobutton = document.getElementById("myForm").elements[1].value;
    checkbox = document.getElementById("myForm").elements[2].value;
    console.log(textbox);
    console.log(radiobutton);
    console.log(checkbox);

    document.write('<table>');
    document.write('<th><Textbox></th>');
    document.write('<th><Radiobutton></th>');
    document.write('<th><Checkbox></th>');

    
    var submitArr = [textbox, radiobutton, checkbox];

    for (var i = 0; i < submitArr.length; i++)
    {
        document.write('<tr><td>' + submitArr[i] + '</td><td>' + 
                submitArr[i] + '</td><td>' + submitArr[i] + '</td></tr>');
    }
    
    document.write('</table>');
}

