// The Traveler class (blueprint) should set the following properties for each instance:

// a name, which must be provided as a parameter to the constructor.
// an amount of food, with an initial value of 1.
// an isHealthy property, with an initial value of true, which indicates whether a traveler is sick.
// The Traveler class should also have the following methods:

class Traveler{
    constructor(name){
        this.name = name
        this.food = 1
        this.isHealthy = true
    }

    hunt(){
      this.food += 2
    }

    eat(){
        if(this.food >= 1){
            this.food -= 1
        }else if(this.food <= 0){
           this.isHealthy = false
        }
    }
}

// hunt()  Increases the traveler's food by 2.
// eat()  Consumes 1 unit of the traveler's food. If the traveler doesn't have any food left to eat, the traveler is no longer healthy (set isHealthy to false).