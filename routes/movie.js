const Router = require('express').Router();
const { spawn } = require('child_process');

Router.get('/:name', (req, res, next) => {
    try {
        const python = spawn('python', ['code.py',req.params.name.toString()]);
        
        python.stdout.on('data',data=>{
            const movies=JSON.parse(data.toString());
            return res.status(200).json({movies:movies});
        })
        python.stderr.on('data',err=>{
            console.log(`Error__` + err);
        })
        python.stdout.on('close',()=>{
            // console.log('closed');
        })
    } catch (error) {
        next(error);
    }
})

module.exports = Router;