/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Opgave1
console.log("Opgave 1");

var myBoolean = true;
var myString = "Hello";
var myNumber = 13;
var myArray = ["Hej", "med", "dig"];
var myObject = {firstName: "Louise", lastName: "Nielsen"};
console.log(myBoolean, myString, myNumber, myArray, myObject);

//Opgave 2
console.log("Opgave 2");

var myArray2 = [myBoolean, myString, myNumber, myObject];
console.log(typeof myArray2[0]);
console.log(typeof myArray2[1]);
console.log(typeof myArray2[2]);
console.log(typeof myArray2[3]);


//Opgave 3
console.log("Opgave 3");

function student(studentId, studentName)
{
    this.studentId = studentId;
    this.studentName = studentName;
    this.toString = function () {
        return this.studentId + " " + this.studentName;
    };
}
var s0 = new student("5", "Hanne");
console.log(s0.toString());

console.log("Opgave 3.1");

var s1 = new student("1", "Louise");
var s2 = new student("2", "Maria");
var s3 = new student("3", "Bolette");
var sArray = [s1, s2, s3];

for (i = 0; i < sArray.length; i++)
{
    console.log(sArray.toString());
}
;

//Opgave 4
console.log("Opgave 4");

function studentTwo(studentName, age, isFemale)
{
    this.name = studentName;
    this.age = age;
    this.isFemale = isFemale;

    this.toString = function () {
        return this.name;
    };
}

function studentList()
{
    var st1 = new studentTwo("A", 15, false);
    var st2 = new studentTwo("B", 16, true);
    var st3 = new studentTwo("C", 14, true);
    var st4 = new studentTwo("D", 15, false);
    var st5 = new studentTwo("E", 17, false);

    var stArray = [st1, st2, st3, st4, st5];

    this.toString = function ()
    {
        for (i = 0; i < stArray.length; i++)
        {
            if (stArray[i].isFemale)
            {
                var st = stArray[i].toString();
                console.log(st);

            }
        }
    };
    this.findMin = function ()
    {

        var min = 200;
        var youngest;
        for (i = 0; i < stArray.length; i++) {
            if (stArray[i].age < min) {
                min = stArray[i].age;
                youngest = stArray[i].name;
            }
        }
        console.log(youngest);
    };
}
var stList = new studentList();
console.log("Opgave 4: Females");
stList.toString();
console.log("Opgave 4: Youngest");
stList.findMin();

console.log("Opgave 5");
console.log("Opgave 6");

//Opgave 7
console.log("Opgave 7");

function max(arg)
{
    var index = arg[0];
    for (i = 1; i < arg.length; i++)
    {
        if (arg[i] > index)
        {
            index = arg[i];
        }
    }
    return index;
}
var arr = [2, 9];

console.log(max(arr));

//Opgave 8
console.log("Opgave 8");

function getWeekDay()
{
    var d = new Date();
    switch (d.getDay())
    {
        case 1:
            console.log("Mandag");
            break;
        case 2:
            console.log("Tirsdag");
            break;
        case 3:
            console.log("Onsdag");
            break;
        case 4:
            console.log("Torsdag");
            break;
        case 5:
            console.log("Fredag");
            break;
        case 6:
            console.log("Lørdag");
            break;
        case 7:
            console.log("Søndag");
            break;
    }
}

getWeekDay();


//Opgave 9
console.log("Opgave 9");

function animal(type, age, isMammel, name)
{
    this.type = type;
    this.age = age;
    this.isMammel = isMammel;
    this.name = name;

    this.toString = function ()
    {
        return " Type: " + this.type + ", age: " + this.age + ", isMammel: " + this.isMammel + ", name: " + this.name;
    };

    this.checkIsMammel = function ()
    {
        if (animal.isMammel === true)
        {
            return animal;
        }
    };
}

var dog = new animal("Dog", 4, true, "Wuffie");
var cat = new animal("Cat", 2, false, "Cattie");
var horse = new animal("Horse", 9, true, "Horsie");

var animalArr = [dog, cat, horse];

for (i = 0; i < animalArr.length; i++)
{
    console.log(animalArr.toString());
}

//Opgave 10
//function checkIsMammel(animal)
//{
//    //for (i = 0; i < animalArr.length; i++)
//    //{
//        if(animal.isMammel === true)
//        {
//            return animal;
//         }
//    //}
//}
console.log(animalArr.filter(animal.checkIsMammel));

