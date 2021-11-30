import apiConfig from "./apiConfig"

const  GameSource={   // JS object creation literal
    apiCall(params) {
    return fetch("https://bing-image-search1.p.rapidapi.com/images/"+params, {
             "method": "GET",              // HTTP method
             "headers": {                  // HTTP headers
                "x-rapidapi-host": "bing-image-search1.p.rapidapi.com",
                "x-rapidapi-key": "cf8ac1b558msh36ec5f17b755ac9p17e886jsne8e050f791c1",
            }
     })
     .then(response=>{
            if(!response.ok){
                throw Error(response.statusText)
            }
            return response;

     })   
    // from HTTP headers to HTTP response data:
    .then(response => response.json());
    }
    ,   // comma between object entries
    searchDishes(){ 
        
        return GameSource.apiCall("search?q=where%20is%20waldo")
        .then(data=> data.value)
    }
    ,   
    getDishDetails(id){ return GameSource.apiCall("/recipes/"+id+"/information"); }
 };
 
 export default GameSource;