const express = require('express')
const app = express()

//config puerto
const PORT =8001

app.listen(PORT,()=>{
    console.log(`Server Runing on port ${PORT}`);
})

//para poder mandar json en el body de la request
app.use(express.json())
///
app.get('/',(req,res)=>{
    res.send('Directorio Principal')
});

//routing
