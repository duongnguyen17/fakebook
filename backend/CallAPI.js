import axios from 'axios'
import {API_URL} from './API_URL'

const serverDomain = API_URL
export const post = async(path, params) => {

    try{
        var paramsSend='';
        for(var i in params){
            paramsSend += `&${i}=${params[i]}`;

        }
        
        return axios({
            url:serverDomain + path + '?' + paramsSend.substring(1),
            method:"POST",
        })
    }
    catch(err){
        console.log(err)
        return("error")
    }
}


export const get = async(path, params) => {
    try{
        var paramsSend='';
        for(var i in params){
            paramsSend=`&${i}=${params[i]}`;
        }
        return axios({
            url:serverDomain + path + '?' + paramsSend.substring(1),
            method:"GET",
        })
    }
    catch(err){
        console.log(err)
        return("error")
    }
}
