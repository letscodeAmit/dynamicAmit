const posts = [
  { title: "post one", body: "this is post one" },
  { title: "post two", body: "this is post two" },
];
function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;//if true reject will work
      if(!error){
        resolve();
      }else{
        reject('Error:Something went wrong');
      }
      }, 2000);
  });
}
// function deletepost(post){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       if(posts.length>0){
//         resolve(posts.pop());
//       }else{
//         reject('Array is empty now')
//       }

//     },1000);
//   });
// }
// createPost({title: "post three", body: "this is post three"})//.then(getPosts);
// .then(() => {
//   getPosts()
//   deletepost().then((deletedElement)=>{
//     console.log(deletedElement)
//     getPosts();
//     deletepost().then(() =>{
//       getPosts();
//       deletepost().then(() =>{
//         getPosts()
//         deletepost().then(() =>{})
//         .catch((err) =>{
//           console.log('inside catch block',err)
//         })

//     }).catch((err)=>{console.log(err)})
//   }).catch((err) =>{console.log(err)})
// })
// })
// .catch(err => console.log(err))

//promise.all
const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve,reject)=>
setTimeout(resolve,2000,'Goodbye')
);
Promise.all([promise1,promise2,promise3]).then(values=>console.log(values));


