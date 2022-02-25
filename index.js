// Code your solution in this file!
function distanceFromHqInBlocks(passenger) {
let blocks = passenger - 42 
if (passenger < 42){
    let blocks = 42 - passenger 
    return blocks
}
return blocks

}

function distanceFromHqInFeet(someValue) {
    let feet = distanceFromHqInBlocks(someValue) * 264;
    return feet;
    
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,

    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }

  function distanceTravelledInFeet( start , end ) {
      let dist = (end - start) * 264;
      if (dist < 264){
        let dis = (start - end) * 264
        return dis
      }
      return dist
      
    }

    function calculatesFarePrice(start, end) {
        //returns the fare for the customer
        let dist = Math.abs((start - end)) * 264;
        if (dist < 400) {
            return 0
        } 
        if (dist >400 && dist <2000) {
            return ((dist - 400) * .02)    
        }
        if (dist > 2000 && dist < 2500) {
            return 25 
        }
        if (dist > 2500 ){
            return 'cannot travel that far' 
        }
    
    
 
      }






