const express = require("express")
const supabase = require("@supabase/supabase-js")

const app = express()
app.use(express.json())

const PORT = 3211 || process.env.PORT

const SUPABASE_URL = "https://grehcjfmhfvqycwwuifg.supabase.co"
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdyZWhjamZtaGZ2cXljd3d1aWZnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxOTA4MzcyMSwiZXhwIjoyMDM0NjU5NzIxfQ.J8Vh96KS4vlioo1Cty-aCxI7F4WVFm56ObgGnctXTag" 

const db = supabase.createClient(SUPABASE_URL, SUPABASE_KEY)

app.get("/", async(request, response) => {
    const getBlog = await db.from("blog").select()
    response.json({ getBlog })
})

app.post("/", async(request, response) => {
    const { title, description } = request.body
    console.log(title, description)

    response.send("ok")
})

app.listen(PORT, () => {
    console.log("Server running on port ", PORT)
})