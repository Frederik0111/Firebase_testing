const endpoint = "https://testing-d15fa-default-rtdb.europe-west1.firebasedatabase.app";

window.addEventListener("load", getPosts);

async function getPosts() {
  const res = await fetch(`${endpoint}/posts.json`);
  const data = await res.json();
  const posts = preparePostData(data);
  console.log(posts);
  return posts;
}

function preparePostData(dataObject) {
    const postArray = [];
    for (const key in dataObject) {
        const post = dataObject[key];
        post.id = key;
        console.log(post);
        postArray.push(post);
    }
    console.log(postArray);
    return postArray;
}