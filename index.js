require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const githubdata={
    "login": "PriyanshuR1234",
    "id": 140266349,
    "node_id": "U_kgDOCFxLbQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/140266349?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/PriyanshuR1234",
    "html_url": "https://github.com/PriyanshuR1234",
    "followers_url": "https://api.github.com/users/PriyanshuR1234/followers",
    "following_url": "https://api.github.com/users/PriyanshuR1234/following{/other_user}",
    "gists_url": "https://api.github.com/users/PriyanshuR1234/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/PriyanshuR1234/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/PriyanshuR1234/subscriptions",
    "organizations_url": "https://api.github.com/users/PriyanshuR1234/orgs",
    "repos_url": "https://api.github.com/users/PriyanshuR1234/repos",
    "events_url": "https://api.github.com/users/PriyanshuR1234/events{/privacy}",
    "received_events_url": "https://api.github.com/users/PriyanshuR1234/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Priyanshu Rajput",
    "company": null,
    "blog": "",
    "location": "INDIA UP",
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 16,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2023-07-22T16:11:26Z",
    "updated_at": "2025-01-25T09:24:04Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send('priyanshu.com')
})
app.get('/login',(req,res)=>{
    res.send('<h1>plese login at chai or code</h1>')
})
app.get('/youtube',(req,res)=>{
    res.send("<h2>Chai aur code</h2>")
})
app.get('github',(req,res)=>{
    res.json(githubdata)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})