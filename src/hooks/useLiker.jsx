function UseLiker(postId) {
  console.log("added");
  let likedPosts;
  if (localStorage.getItem("liked-posts") == null) {
    localStorage.setItem("liked-posts", JSON.stringify([]));
  } else {
    likedPosts = JSON.parse(localStorage.getItem("liked-posts"));
  }
  localStorage.setItem("liked-posts", JSON.stringify([...likedPosts, postId]));
  console.log(likedPosts);
}

export default UseLiker;
