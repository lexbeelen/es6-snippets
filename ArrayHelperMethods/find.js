/* ECMAScript 2016 (ES6) - Example 1 */
let users = [
    {name: 'Lex'},
    {name: 'Lauren'},
    {name: 'Boaz'}
];

let user = users.find(function (user) {
    return user.name === 'Lex';
});

console.log(user);

/* ECMAScript 2016 (ES6) - Example 2 */
let posts = [
    {id: 1, title: 'New Post'},
    {id: 2, title: 'Old Post'}
];

let comment = {postId: 1, content: 'Great Post'};

function postForComment(posts, comment){
    return posts.find(function(post){
       return post.id === comment.postId;
    });
}

let post = postForComment(posts, comment);

console.log(post);
