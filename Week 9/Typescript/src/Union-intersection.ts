//Union types (OR)

type Status =  "Pending" | "approved" | "rejected"
function setStatus(status:Status):void {
    console.log(`Status set to $ {status}`);
}
setStatus("approved");

//Intersection type (AND)
interface Colorful{
    color : string;
}
interface Circle{
    radius : number;
}
type ColorfulCircle = Colorful & Circle

let myCircle:ColorfulCircle = {
    color:"red",
    radius:10,
}