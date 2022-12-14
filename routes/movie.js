const Router = require('express').Router();
const { spawn } = require('child_process');
const fs =require('fs/promises');
const { CustomError } = require('../middleware/error');
Router.post('/', (req, res, next) => {
    try {
        const name=req.body.name;
        const python = spawn('python', ['code.py',name.toString()]);
        console.log(name.toString());
        if(!name)return next(new CustomError(404,'no name'));
        python.stdout.on('data',async(data)=>{
            try {
                let file=[];
                console.log('reached here 1');
                const movies=JSON.parse(data.toString());
                file=JSON.parse((await fs.readFile('myjsonfile.json')).toString());
                
                const mainMovie=file[movies[0].index];
                if(!mainMovie)return next(new CustomError('404','Movie Does not exist in database'));
                let recommendedMovies=[];
                for (let i = 1; i < movies.length; i++) {
                    let m = movies[i];
                    recommendedMovies.push({title:file[m.index].title,poster:file[m.index].poster});
                }
                const resData={res:mainMovie,rec:recommendedMovies};
                return res.status(200).json(resData);
                
            } catch (error) {
                next(error);
            }
        })
        python.stderr.on('data',err=>{
            console.log('reached here 2');
            next(err.toString());
        })
        python.stdout.on('close',()=>{
            console.log('reached here 3');
            // console.log('closed');
        })
    } catch (error) {
        next(error);
    }
})
Router.get('/:name',async(req,res,next)=>{
    try {
        const name=req.params.name;
        const expr=new RegExp(req.params.name,'ig');
        const file=JSON.parse((await fs.readFile('myjsonfile.json')).toString());

        const validMovies=file.filter(m=>expr.test(m.title)).map(m=>m.title).slice(0,5)||[];
        res.status(200).json(validMovies);
    } catch (error) {
        next(error);
    }
})

module.exports = Router;