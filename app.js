let express = require('express')
let cors = require('cors')
let blogsRouter = require('./routes/blog.router')
const userRouter = require('./routes/user.route')
const authenMiddleware = require('./midleware/authen.middleware')

let corsOptions = {
   origin: 'http://localhost:3000/',
   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

let app = express()
app.use(cors())
app.use(express.json())

app.use("/api/v1/user", userRouter)

app.use(authenMiddleware)
app.use('/api/v1/blogs', blogsRouter)




module.exports = app
