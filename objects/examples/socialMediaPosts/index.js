var socialMediaPosts = [
  {
    title:"Why are carrots healthy?",
    date:"November 17, 2014",
    content:"I don't know but they sure are tasty."
  },
  {
    title:"Robots or humans",
    date:"October 22, 2014",
    content:"Who would win in a fight: a human or a robot?"
  }
]

function getPosts(posts){
  for(var i=0; i<posts.length; i++){
    console.log('Title: ', posts[i].title)
    console.log('Date: ', posts[i].date)
    console.log('Content: ', posts[i].content)
  }
}

getPosts(socialMediaPosts)

document.body.innerHTML = "Open your browser console!"