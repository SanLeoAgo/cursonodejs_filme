import { horaAtual } from "./dateTimeUtils.js";

global.logError = function logError(error){
    console.log(horaAtual() + ' ERROR --> '+ error.message);    
}; 