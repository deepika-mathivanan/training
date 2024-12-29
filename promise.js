const database = {
    posts: [],
    likes: {},
    shares: {}
  };
  
  const Async = (result, delay = 1000) =>
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(result), delay);
    });
  
  const post = (content) => {
    return Async().then(() => {
      const postId = database.posts.length + 1;
      database.posts.push({ id: postId, content });
      return "post created";
    });
  };
  
  const like = (postId, userId) => {
    return Async().then(() => {
      if (!database.posts.find(post => post.id === postId)) {
        throw new Error("Post not found");
      }
      if (!database.likes[postId]) database.likes[postId] = new Set();
      database.likes[postId].add(userId);
      return `Post ${postId} liked by ${userId}`;
    });
  };
  
  const unlike = (postId, userId) => {
    return Async().then(() => {
      if (!database.posts.find(post => post.id === postId)) {
        throw new Error("Post not found");
      }
      if (database.likes[postId] && database.likes[postId].has(userId)) {
        database.likes[postId].delete(userId);
        return `Post ${postId} unliked by ${userId}`;
      } else {
        throw new Error("Like not found ");
      }
    });
  };
  
  const share = (postId, userId) => {
    return Async().then(() => {
      if (!database.posts.find(post => post.id === postId)) {
        throw new Error("Post not found");
      }
      if (!database.shares[postId]) database.shares[postId] = new Set();
      database.shares[postId].add(userId);
      return `Post ${postId} shared by ${userId}`;
    });
  };
  
  const unshare = (postId, userId) => {
    return Async().then(() => {
      if (!database.posts.find(post => post.id === postId)) {
        throw new Error("Post not found");
      }
      if (database.shares[postId] && database.shares[postId].has(userId)) {
        database.shares[postId].delete(userId);
        return `Post ${postId} unshared by  ${userId}`;
      } else {
        throw new Error("not found");
      }
    });
  };
  
  post("Hello!")
    .then((message) => {
      console.log(message);
      return like(1, "deepi");
    })
    .then((message) => {
      console.log(message);
      return share(1, "deepi");
    })
    .then((message) => {
      console.log(message);
      return unlike(1, "deepi");
    })
    .then((message) => {
      console.log(message);
      return unshare(1, "deepi");
    })
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.error(error.message);
    });
  