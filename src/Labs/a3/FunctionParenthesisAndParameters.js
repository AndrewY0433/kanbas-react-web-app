export function FunctionParenthesisAndParameters() {
    const square = a => a * a;
const plusOne = a => a + 1;
const twoSquared = square(2);
const threePlusOne = plusOne(3);
return( 
<div>
<h3>FunctionParenthesisAndParameters</h3>

    `twoSquared {twoSquared}`
    `threePlusOne {threePlusOne}`
</div>
)
}