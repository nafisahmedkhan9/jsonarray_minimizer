module.exports = function obj_converter(obj){

    // check input for array[]
    if(obj.constructor == [].constructor){
        for(var ind=0; ind< obj.length; ind++){
            var dt = typeof obj[ind];
            if(dt === "undefined" || obj[ind] === null || obj[ind] === ""){
                obj.splice(ind,1);
                obj_converter(obj);
            }else if(dt === "object"){
                if(obj[ind].constructor == [].constructor){
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
        }
        // check input for json object
    }else if(obj.constructor === {}.constructor){
        for (var key in obj){
            var dt = typeof obj[key];
            if(dt === "undefined" || obj[key] === null || obj[key] === ""){
                delete obj[key];
                obj_converter(obj);
            }else if(dt === "object"){
                if(obj[key].constructor == [].constructor){
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
        }
        //check if input is not json and not array
    }else{
        console.log("Function obj_converter only take Arrays and JSONObject")
    }
    return JSON.stringify(obj);
}