// Your Task
// Create 2 new child classes from the Traveler class:

// The Doctor Class
// The Doctor class will extend the Traveler class and have one additional method:
class Doctor extends Traveler{
    constructor(name){
        super(name)
    }
    heal(traveler){
        return traveler.isHealthy = true
    }
}
// heal(traveler) - set the traveler's isHealthy property to true.