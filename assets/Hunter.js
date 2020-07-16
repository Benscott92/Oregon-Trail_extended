// The Hunter Class
// The Hunter class will extend the Traveler class, but it will start with 2 food instead of 1. The Hunter class should also have the following methods:
class Hunter extends Traveler{
    constructor(name){
        super(name)
        this.food = 2
    }
    hunt(){
        return this.food += 5
    }
    eat(){
        if(this.food >= 2){
            return this.food -= 2
        } else{
            this.isHealthy = false
            return this.food = 0
        }
    }
    giveFood(traveler, numOfFoodUnits){
        if(this.food >= numOfFoodUnits){
            traveler.food += numOfFoodUnits
            return this.food -= numOfFoodUnits
        }
    
    }
}
// hunt() - Increase the hunter's food by 5. (A normal traveler gains only 2.)
// eat() - Consumes 2 units of food. If the hunter doesn't have 2 food when they are instructed to eat, they eat as much as they can (0 or 1 unit), but the hunter is no longer healthy.
// giveFood(traveler, numOfFoodUnits) - Transfers numOfFoodUnits from the hunter to the traveler. If the hunter doesn't have enough food, then no food should be transferred.