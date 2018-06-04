/* ECMAScript 2016 (ES6) - Example 1 */
let products = [
    {name: 'cucumber', type: 'vegetable'},
    {name: 'banana', type: 'fruit'},
    {name: 'celery', type: 'vegetable'},
    {name: 'orange', type: 'fruit'}
];

let filteredProducts = products.filter(function (product) {
    return product.type === 'fruit';
});

console.log(filteredProducts);

/* ECMAScript 2016 (ES6) - Example 2 */
let products = [
    {name: 'cucumber', type: 'vegetable', quantity: 0, price: 1},
    {name: 'banana', type: 'fruit', quantity: 10, price: 15},
    {name: 'celery', type: 'vegetable', quantity: 30, price: 9},
    {name: 'orange', type: 'fruit', quantity: 3, price: 5}
];

let filteredProducts = products.filter(function (product) {
    return product.type === 'vegetable'
        && product.quantity > 0
        && product.price < 10
});

console.log(filteredProducts);

/* ECMAScript 2016 (ES6) - Example 3 */
let post = {id: 4, title: 'New Post'};
let comments = [
    {postId: 4, content: 'awesome post'},
    {postId: 3, content: 'it was ok'},
    {postId: 4, content: 'neat'}
];

function commentsForPost(post, comments) {
    return comments.filter(function (comment) {
        return comment.postId === post.id;
    });
}

let commentsResults = commentsForPost(post, comments);

console.log(commentsResults);
