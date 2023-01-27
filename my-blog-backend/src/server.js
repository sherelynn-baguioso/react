import express from 'express'

let articlesinfo = [
  {
    name: 'learn-react',
    upvotes: 0,
  },
  {
    name: 'learn-node',
    upvotes: 0,
  },
  {
    name: 'mongodb',
    upvotes: 0,
  },
]

const app = express()

app.use(express.json())

app.put('/api/articles/:name/upvote', (req, res) => {
  const { name } = req.params
  const article = articlesinfo.find((a) => a.name === name)
  article.upvote += 1
  if (article) {
    article.upvotes += 1
    res.send(`The ${name} article now has ${article.upvotes} upvotes.`)
  } else {
    res.send("That article doesn't exist")
  }
})

app.listen(8000, () => {
  console.log('Server is listening on port 8000')
})