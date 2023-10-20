export function MapFunction() {
    let numberArray1 = [1, 2, 3, 4, 5, 6];
const square = a => a * a;

const squares = numberArray1.map(square);
const cubes = numberArray1.map(a => a * a * a);
return <div>
    <h3>MapFunction</h3>
    squares {squares}
    cubes {cubes}
</div>
}