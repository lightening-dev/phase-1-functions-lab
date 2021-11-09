// Code your solution in this file!

function distanceFromHqInBlocks(street) {

    if (street >=42) { 
        return (street - 42);
    } else {
       return 42 - street 
    }
}
     
    

    
function distanceFromHqInFeet(street) {
    return distanceFromHqInBlocks(street) * 264;
}


function distanceTravelledInFeet(startingBlockNum, endingBlockNum) {
    // What happens if ending is larger than starting?
    if (startingBlockNum < endingBlockNum) {
    return (endingBlockNum - startingBlockNum) * 264;
    }
    else {
        return (startingBlockNum - endingBlockNum) * 264
    }



}

function calculatesFarePrice(startingBlockNum, endingBlockNum)  {
   let distance = distanceTravelledInFeet(startingBlockNum, endingBlockNum)
   
   if (distance < 400)
   {    return 0
    }
    
    else if (distance >= 400 && distance <=2000) {
        return (distance - 400) * .02
    }
    else if (distance > 2000 && distance < 2500) {
        return 25 }

    else 
        return "cannot travel that far"

}
 