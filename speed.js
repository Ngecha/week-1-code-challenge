let speed = prompt('Enter Speed');
let points =((speed - 70) / 5);
function speedDetector (speed){
    if(speed <=70){
        return "OK";
    }if( points > 12){
        return "!!License Suspended!!";
    } else{
        return `Demerit points : ${points}`
    }
}
let results = alert(speedDetector(speed));