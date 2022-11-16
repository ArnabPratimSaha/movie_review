require('dotenv').config();
const express = require('express');
const { err } = require('./middleware/error');
const app = express();
const port = process.env.PORT || 5000;


// let arr=['arnab','dawdawd'];
// let newda=JSON.stringify(arr)
// console.log(JSON.parse(newda))

const movie = require('./routes/movie');

app.use(express.json());

app.use('/movie', movie);

app.get('/', (req, res) => res.send('ROOT ROUTE'));

const movier = require('movier');
const { spawn } = require('child_process');
const python = spawn('python', ['code.py', 'dadd']);
const fs=require('fs/promises');



python.stdout.on('data', async(data) => {
    let res=[];
    const movies = JSON.parse(data.toString());
    const file=await fs.readFile('myjsonfile.json');
    if(file.toString())
        res=JSON.parse(file);
    let index=res.length;
    for (let i = index; i < movies.length; i++) {
        const m = movies[i];
        await fs.writeFile('error.json', JSON.stringify(`${m} -> ${i}`), 'utf8');
        const data=await movier.getTitleDetailsByName(m);
        res.push({
            index:i,
            title:data.name,
            genres:data.genres,
            poster:data.posterImage.url,
            languages:data.languages,
            casts:data.casts.map(c=>{
                return { name :c.name,pic:c.thumbnailImageUrl}
            }).slice(0,5),
            runtime:data.runtime.title,
            description:data.plot,
            year:data.titleYear,
        })
        console.log(`done ${i} of ${movies.length}`);
        if(i%50===0){
            await fs.writeFile('myjsonfile.json', JSON.stringify(res), 'utf8');
            console.log(`Saved upto ${i}th index `);
        }
    }
    await fs.writeFile('myjsonfile.json', JSON.stringify(res), 'utf8');
    console.log(`File updated completely`);
})
python.stderr.on('data', err => {
    console.log(`Error__` + err);
})
python.stdout.on('close', () => {
    // console.log('closed');
})

// movier.getTitleDetailsByName('REC 2').then(res=>{
//     console.log('got it');
// }).catch(e=>{
//     console.log(e);
// });
app.use(err);

app.listen(port, () => console.log(`App listening on port ${port}!`))




