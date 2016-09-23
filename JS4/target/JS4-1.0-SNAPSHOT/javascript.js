
//Opgave 1

$(document).ready(function(){
        
    $("#button").click(function(){
        $("#div").load("Servlet"); 
    });
//Opgave 2    
    $("#button2").click(function(){
        $("#div2").load("Servlet2"); // $("#div").load("Servlet" , "metodekald her");
    });
    
    $("#registrer").click(function(){
        $("#div2").load("Servlet3");
    });

});

//Opgave 2
// Jeg ville have lavet én servlet med flere metoder, i stedet for at lave flere servlets med én metode i hver
// Dog har jeg ikke kunnet finde syntaks for, hvordan man loader en servlet og kalder dens forkellige metoder

//For at kunne tilføje til  listen af personer, ville jeg lave en request på html sidens form tekst felter
//Person pers3 = new Person(request af text felt1, request af text felt2); 

        
