const posts = [
    {title:'post one',body:'this is post one',createdAt: new Date().getTime()},
    {title:'post two',body:'this is post two',createdAt: new Date().getTime()}
];
//let intervalId;
function getPosts(){
    //clear interval(intervalId);
    //intervalId =setinterval()=>{
    //let output='';
    //setTimeout(()=>{
    setInterval(()=>{
        let output='';
        posts.forEach((post,index)=>{
            output+=`<li>${post.title} - last updated ${(new Date().getTime() - post.createdAt)/1000} seconds ago</li>`;
        });
        document.body.innerHTML=output;
    },1000);
}

function createPost(post,callback){
    setTimeout(()=>{
        posts.push({...post,createdAt: new Date().getTime()});
        callback();
    },2000);
}

createPost({title:'post three',body:'this is post three'},getPosts);

function creat4thPost(post,callback){
    setTimeout(()=>{
        posts.push({...post,createdAt: new Date().getTime()});
        callback();
    },4000);
}
creat4thPost({title:'post four',body:'this is post four'},getPosts);
