const express = require("express")
const supabase = require("@supabase/supabase-js")

const app = express()
const PORT = 3211 || process.env.PORT

const SUPABASE_URL = "https://grehcjfmhfvqycwwuifg.supabase.co"
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdyZWhjamZtaGZ2cXljd3d1aWZnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxOTA4MzcyMSwiZXhwIjoyMDM0NjU5NzIxfQ.J8Vh96KS4vlioo1Cty-aCxI7F4WVFm56ObgGnctXTag" 

const db = supabase.createClient(SUPABASE_URL, SUPABASE_KEY)

app.get("/", async(request, response) => {
    const getData = await db.from("blog").select()
    console.log(getData)
    response.send("ini adalah route utama")
})

app.listen(PORT, () => {
    console.log("Server running on port ", PORT)
})