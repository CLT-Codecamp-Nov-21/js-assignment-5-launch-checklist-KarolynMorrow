// Write your helper functions here!
try{
    require('isomorphic-fetch');
} catch (e) {

}

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   document.getElementById("missionTarget").innerHTML=`
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`;
   
}

function validateInput(input) {
  //take in a string as parameter and return "empty" "nan" "is a number"
    if (input === "") {
        return "Empty";
    } else if (isNaN(Number(input))) {
        return "Not a number";
    } else {
        return "Is a number";
    }
}
   


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    const inputValues = [pilot, copilot, fuelLevel, cargoLevel];
    for (let i = 0; i < inputValues.length; i++) {
        if (validateInput(inputValues[i]) === "Empty") {
            alert("All fields are required!");
            return;
        }
    }
    if (validateInput(fuelLevel) === "Not a number" || validateInput(cargoLevel) === "Not a number") {
        alert("Enter a valid number.");
        return;
    }
    fuelLevel = Number(fuelLevel);
    cargoLevel = Number(cargoLevel);

    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");
    let ready = true;
    

    if (fuelLevel < 10000) {
        fuelStatus.innerHTML = `Fuel Level too low for Launch`;
        ready = false;

    } else {
        fuelStatus.innerHTML = `Fuel Level is high enough for Launch`;
    }

    if (cargoLevel > 10000 ) {
        cargoStatus.innerHTML = `Cargo mass to heavy for launch`;
        ready = false;

    } else {
        cargoStatus.innerHTML = `Cargo mass low enough for launch`;
    }

    if (!ready) {
        launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
        launchStatus.style.color = "rgb(199, 37, 78)";
        
    } else {
        launchStatus.innerHTML = `Shuttle is Ready for Launch`;
        launchStatus.style.color = "rgb(65, 159, 106)";
    }
// 3 if/else conditionals inside function 1: test fuel level amount(change inner html inside of fuelStatus if to low)
// and change ready to false else change fuelStatus html text to "Good to go". 2: test cargo level amount...."to heavy" 
// change ready to false else change cargoStatus html text to "good to go". 3: if(!ready) change launchStatus html text
// to "not good to go" and text change to red else launchStatus html text "launch is ready" and text change to green.

    list.style.visibility = "visible";
    };
     

       
   


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json"
    ).then( function(response) {
        return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random()*planets.length);
    return planets[index];
}



try {
module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
} catch (e) {

}