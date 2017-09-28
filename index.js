module.exports = function obj_converter(obj){
    if(obj.constructor === [].constructor){
    //check input for array[]
        for(var ind=0; ind< obj.length; ind++){
            if(!obj[ind]){
                obj.splice(ind,1);
                obj_converter(obj);
            }else if(obj[ind].constructor === [].constructor){
                    if(obj[ind].length <= 0){
                        obj.splice(ind,1);
                        obj_converter(obj);
                    }else{
                        obj_converter(obj[ind]);
                    }
            }else if(obj[ind].constructor === {}.constructor){
                    if( Object.keys(obj[ind]).length <= 0 ){
                        obj.splice(ind,1);
                        obj_converter(obj);
                    }else{
                        obj_converter(obj[ind]);
                    }
            }
        }
        
    }else if(obj.constructor === {}.constructor){
        //check input for json object
        for (var key in obj){
            if(!obj[key]){
                delete obj[key];
                obj_converter(obj);
            }else if(obj[key].constructor === [].constructor){
                if(obj[key].length <= 0){
                    delete obj[key];
                    obj_converter(obj);
                }else{
                    obj_converter(obj[key]);
                }
            }else if(obj[key].constructor === {}.constructor){
                if( Object.keys(obj[key]).length <= 0 ){
                    delete obj[key];
                    obj_converter(obj);
                }else{
                    obj_converter(obj[key]);
                }
            }
        }
    }else{
        //check if input is not json and not array
        console.log("Function obj_converter only take Arrays and JSONObject")
    }
    return obj;
}
