const axios = require ('axios')

exports.list = (req,res) => {
    const uf = req.query.uf
    
    axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`)
    .then(response => {
        res.render('pages/lista', {
            cidades:response.data
        })
        console.log(response.data)
    }).catch(error => {
        console.log(error)
        res.send('erro')
    })
}