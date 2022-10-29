const path = require("path")
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const adminRoutes = require("./routes/admin")
const shopRoutes = require("./routes/shop");

const rootDir = require("./utils/path");

app.use(bodyParser.urlencoded({extended: false}));
// serve content statically!
app.use(express.static(path.join(rootDir,"public")));
app.use("/admin",adminRoutes);
app.use(shopRoutes)


app.use((req,res,next) => {
    res.status(404).sendFile(path.join(rootDir,"views","404.html"));
})
app.listen(3000);
