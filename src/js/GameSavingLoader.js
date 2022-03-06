import json from './parser.js';
import read from './render.js';

export default class GameSavingLoader{
    static async load(){
        try{
            const data = await read();
            const result = await json(data);

            return Promise.reject(result)
        }
        catch(error){
            return error
        }

    }
}