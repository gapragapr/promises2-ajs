import json from './parser';
import read from './render';

export default class GameSavingLoader{
    static async load(){
        try{
            const data = await read();
            const result = await json(data);

            try{
                return JSON.parse(result);
            }
            catch(error){
                return Promise.reject(error)
            }
        }
        catch(error){
            return error
        }

    }
}