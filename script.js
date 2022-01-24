// Write your JavaScript code here!

//const { pickPlanet, addDestinationInfo } = require("./scriptHelper");


window.addEventListener("load", function(){
    let list = document.getElementById("faultyItems");
    list.style.visibility = "hidden";
    let form = document.getElementById("the-form");
    form.addEventListener("submit", function(event){
        event.preventDefault();
        let pilotName = document.getElementById("pilotName").value;
        let copilotName = document.getElementById("copilotName").value;
        let fuelLevel = document.getElementById("fuelLevel").value;
        let cargoMass = document.getElementById("cargoMass").value;
       
        if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
            alert("All fields are required");

        }

        formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass);
    })




   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       let planet = pickPlanet(listedPlanets);
       console.log(planet);
       addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
//        console.log(listedPlanets);
//    }).then(function () {
//        console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});