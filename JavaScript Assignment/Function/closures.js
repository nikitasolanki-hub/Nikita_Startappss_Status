function  makeCounter(start = 0 ){
    let count = start;

    return {
        increment(){
            count++;
            return count;
        },
        decrement(){
            count-- ;
            return count ;
        },
        reset(){
            count = start;
            return count;
        },
        value() {
            return count;
        },
    };
}
const c = makeCounter(10);

c.increment();
c.increment();
c.decrement();
c.reset();

//console.log(c.value());

console.log(c.count) //undefined  (count is not accessible directly:)

