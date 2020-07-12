let main = document.querySelector('main')
let buttonZone = document.querySelector('.buttons')
let inputZone = document.querySelector('.inputs')

let capacityInput = document.createElement('input')
capacityInput.placeholder= 'Wagon Capacity'
capacityInput.type = 'number'
inputZone.append(capacityInput)

let passengerNameInput = document.createElement('input')
passengerNameInput.placeholder = 'Passenger Name'
inputZone.append(passengerNameInput)


let wagonButton = document.createElement('button')
let passengerButton = document.createElement('button')
wagonButton.append('New Wagon')
passengerButton.append('New Passenger')
buttonZone.append(wagonButton, passengerButton)
// Add the wagons and the travelers to the DOM. ~_~

// Add buttons to your classes – for example: make a traveler eat, add a traveler to a wagon, check if a wagon should quarantine, etc.

wagonButton.addEventListener('click', function(){
    if(capacityInput.value > 0){
        return new Wagon(capacityInput.value)
    }
    return alert('Please Input A Capacity Greater Than Zero')

})

passengerButton.addEventListener('click', function(){
    if(passengerNameInput.value.length > 0){
        return toHTMLPassenger(new Traveler(passengerNameInput.value))
    }
    return alert('Please Input A Name')


})

// Add a button to create a new traveler based on a name the user inputs.
// Add animations simulating travel, etc.
// Generally just make your game feel more like the original Oregon Trail.