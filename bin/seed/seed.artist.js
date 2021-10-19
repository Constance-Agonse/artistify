

const artistdata = [
    {
        name: 'Kanye West',
        isBand: 'false',
        desciption: 'crazy guy, hip hop',
        picture: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.elle.fr%2FPeople%2FLa-vie-des-people%2FNews%2FKim-Kardashian-et-Kanye-West-leur-divorce-est-toujours-en-cours-3967232&psig=AOvVaw0wBRNyOUtbOWstpPzD0ufB&ust=1634634250418000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPjMrKHN0_MCFQAAAAAdAAAAABAD'
    } , 
    {
        name: 'David Bowie',
        isBand: 'false',
        desciption: 'pop rock',
        picture: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gqmagazine.fr%2Fmode%2Fstyle%2Fdiaporama%2Fles-styles-de-david-bowie%2F4383&psig=AOvVaw0Fgyql4QxWBwGW8kNF-oR5&ust=1634634330589000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKjlgMfN0_MCFQAAAAAdAAAAABAD'
    } , 
    {
        name: 'Beach Boys',
        isBand: 'true',
        desciption: 'pop psychadelic',
        picture: 'http://rock6070.e-monsite.com/medias/images/beach-boys-1.jpg' } , 
    
]

const mongoose = require('mongoose');
const artistModel = require ('../../model/Artists');


mongoose
  .connect("mongodb://localhost/artistify", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }, )
.then(async(x)=>{
    console.log(`connected to Monto Database name:${x.connections[0].name}`);
    await artistModel.deleteMany();
    const res = await artistModel.create(artistdata);
    console.log(res.length + "artists inserted in database!") 
})
.catch((err) => console.error("Error connnecting to Mongo", err));
