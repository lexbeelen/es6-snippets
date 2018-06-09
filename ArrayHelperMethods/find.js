/* ECMAScript 2016 (ES6) - Example 1 */
const users = [
    {name: 'Lex'},
    {name: 'Lauren'},
    {name: 'Boaz'}
];

const user = users.find(function (user) {
    return user.name === 'Lex';
});

console.log(user);

/* ECMAScript 2016 (ES6) - Example 2 */
const posts = [
    {id: 1, title: 'New Post'},
    {id: 2, title: 'Old Post'}
];

const comment = {postId: 1, content: 'Great Post'};

function postForComment(posts, comment){
    return posts.find(function(post){
       return post.id === comment.postId;
    });
}

const post = postForComment(posts, comment);

console.log(post);
