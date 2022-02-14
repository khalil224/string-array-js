const products = [
    'Dell hardcore 129 20GB laptop',
    'iphone 1TB camera flashlight phone',
    'yellow laptop with black camera',
    '1X59 Lenovo commercial  yoga laptop',
    'Dell LG supernova laptop',
    'HTC low price Phone',
    'Dell purple color phone with Laptop'
];
const searching = 'Dell';
//indexOf
const output = [];
for (const product of products) {
    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        output.push(product);
    }
}
//console.log(output);

//include use
for (const product of products) {
    if (product.toLowerCase().includes(searching.toLowerCase())) {
        output.push(product);
    }
};
//console.log(output);
//starts with
for (const product of products) {
    if (product.toLowerCase().startsWith(searching.toLowerCase())) {
        output.push(product);
    }
} console.log(output);