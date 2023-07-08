const express = require('express');
const app = express();
// Telecharger le fichier JSON
const equipes = require('./equipe.json')

// Le middleware pour peut modifier le body d'une requet et pour l'utiliser dans le post
app.use(express.json())

// Afficher tout l'equipe
app.get('/equipes',(req,res)=>{
    res.send(equipes);
});

// Afficher une seule equipe avec sa id
app.get('/equipes/:id',(req,res)=>{
    const id = req.params.id
    const equipe = equipes.find(equipe => equipe.id == id);
    res.send(equipe);
})

// Ajouter une equipe
app.post('/equipes',(req,res)=>{
    equipes.push(req.body);
    res.send(equipes);
})

// Modifier une equipe
app.put('/equipes/:id',(req,res)=>{
    const id = req.params.id;
    const equipe = equipes.find(equipe => equipe.id == id);
    equipe.name = req.body.name;
    equipe.country = req.body.country;
    res.send(equipes)
})

// Pour supprimer une equipe
app.delete('/equipes/:id',(req,res)=>{
    const id = req.params.id;
    const equipe = equipes.find(equipe => equipe.id == id);
    equipes.splice(equipes.indexOf(equipe),1);
    res.send(equipes)

})


const port = 3000;
app.listen(port,()=>{
    console.log(`Server listen on http://localhost:${port} ` )
})