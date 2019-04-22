const fs = require('fs')
const ejs = require('ejs')

// Carrega dados de dados.json
const data = JSON.parse(fs.readFileSync("data.json"))


ejs.renderFile('templates/index.ejs', data, function(err, str){
  
    if(err)
        throw err

    // Gravar em Novo arquivo index.html
    fs.writeFile("./build/index.html", str, (err) => {
    
        if(err)
            throw err

        console.log('Arquivo Html gerado')

    })

})
