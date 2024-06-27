require('dotenv').config()


let app = require('./app')
const db = require('./model')
let port = process.env.PORT

if (process.env.NODE_ENV == "development") {

   db.sequelize.sync({ force: false})
      .then(() => {
         console.log(`database: ${process.env.DB_NAME} connected successfully`)
      })
      .catch(error => console.log(error.message + "Erroe while connectig database"))

}


app.listen(port, (error) => {
   if (error) {
      console.log("eror while starting server")
   }

   return console.log("server started sucessfully")
})