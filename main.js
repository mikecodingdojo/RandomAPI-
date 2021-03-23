$(document).ready(function(){
    $.get("https://randomuser.me/api/?results=20", function(res){
        // console.log(res.results[0]);
        // //name
        // console.log(res.results[0].name.first); 
        // console.log(res.results[0].name.last); 
        // //age
        // console.log(res.results[0].dob.age); 
        // //email
        // console.log(res.results[0].email); 
        // //address
        
        // console.log(res.results[0].location.city);
        // console.log(res.results[0].location.country);
        // console.log(res.results[0].location.postcode);
        // console.log(res.results[0].location.state);
        // console.log(res.results[0].location.street.number);
        // console.log(res.results[0].location.street.name);
        
        // //picture

        // console.log(res.results[0].picture.medium);

        var firstname = ""; 
        var lastname = "";
        var age = 0; 
        var email = ""; 
        var city ="";
        var postcode = 0; 
        var state = ""; 
        var streetNumber = 0; 
        var streetName = ""; 
        var picture = ""; 

        var counter = 1; 
        

        for(var i = 0; i<res.results[i]; i++){

            firstname += res.results[i].name.first; 
            lastname += res.results[i].name.last; 
            age += res.results[i].dob.age; 
            email += res.results[i].email; 
            city += res.results[i].location.city; 
            postcode += res.results[i].location.postcode;
            state += res.results[i].location.state;
            streetNumber += res.results[i].location.street.number;
            streetName += res.results[i].location.street.name;
            picture += res.results[i].picture.medium;
            
            $("#test").html(firstname); 
            $().html(lastname); 
            $().html(age); 
            $().html(email); 
            $().html(city); 
            $().html(postcode); 
            $().html(state); 
            $().html(streetNumber); 
            $().html(streetName); 
            $().html(picture); 

            console.log(firstname); 

        }
        



    })


}, "json")