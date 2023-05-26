const posts = [];
const user = {
    name: 'Varun',
    lastActivityTime: Date.now()
};

const createPost = (post) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            resolve(post);
        }, 1000);
    });
};

const updateLastUserActivityTime = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            user.lastActivityTime = Date.now()
            resolve(user.lastActivityTime);
        }, 1000);
    });
};

const deletePost = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(posts.length !=0 ) {
                posts.pop();
                resolve();
            }
            else
                reject('Error: Array is Empty');
        }, 1000);
    });
};

Promise.all([createPost({ title: 'Post1' }), createPost({ title: 'Post2' }), createPost({ title: 'Post3' }), createPost({ title: 'Post4' }), updateLastUserActivityTime()])
    .then(values => {
        values.forEach(value => console.log(value));
        deletePost()
            .then(() => {
                posts.forEach((post) => console.log(post));
            })
            .catch(err => console.log(err));
    });


