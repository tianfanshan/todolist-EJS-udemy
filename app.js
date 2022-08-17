const express = require("express")
const bodyParser = require("body-parser")
const PORT = 3000

const date = require("./date")


const app = express()


app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"))
app.set("view engine", "ejs")



let newItems = ["Buy Food", "Cook Food", "Eat food"]
let workItems = []



app.get("/", (req, res) => {
    const date2 = date.getDate()
    const day = date.getDay()
    const fullDate = day + "," + date2
    res.render("list", { listTitle: fullDate, newListItems: newItems })
})

app.post("/", (req, res) => {
    if (req.body.list === "Work") {
        let item = req.body.newItem
        workItems.push(item)
        res.redirect("/work")
    } else {
        newItems.push(req.body.newItem)
        res.redirect("/")
    }
})

app.get("/work", (req, res) => {
    res.render("list", { listTitle: "Work List", newListItems: workItems })
})

app.get("/about", (req, res) => {
    res.render("about")
})


app.listen(PORT, () => { console.log(`Server running on port ${PORT}`) })