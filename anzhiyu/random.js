var posts=["posts/3eeb.html","posts/7737.html","posts/64332.html","posts/123c.html","posts/13178.html","posts/10219.html","posts/38054.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };