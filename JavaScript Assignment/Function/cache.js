function memoize(fn){
    //This object is private because of closure.
    const cache = {};

    return function(n){
        if(n in cache){
            console.log("cached");
            return cache[n];
        }
        console.log("computed");
        const result = fn (n);
        cache[n] = result;
        return result;
    };
}

const slowSquare = (n) => {
    return n * n;
};

const fastSquare = memoize(slowSquare);

console.log(fastSquare(5));
console.log(fastSquare(5)); // 5 already exists in cache, so it directly returns 25 without calling slowSquare again.



const {total,avg } = student