JSON or Array minimizer
=========

It minimize the size of json object or array by removing invalid values like undefined, null, empty array [] and empty json object {} AND RETURN THE NEW FILTERED JSONOBEJCT OR ARRAY

## Installation

  `npm install jsonarray_minimizer`

## Usage

    var ja_minimizer = require('jsonarray_minimizer');

    var object = {
        a:{a:"abc", b:{}, c:{a:"a", b:{a:{a:{a:null,b:undefined,c:{},d:"d"}}}}},
        b:[1,2,"",null],
        c:"nafis",
        d:null,
        e:undefined,
        f:"",
        g:[[],{}],
        h:"",
        i:null,
        j:"nafis ahmed",
        k:["abc",null,[],{},["a","b"],undefined],
        l:{
            a:["av"],
            b:{
                "hi":{}
            },
            c:{},
            d:{
                a:"a"
            },
            e:[undefined]

        }

    }
    var output = ja_minimizer(object);
    console.log(output);

  ### Output

  {"a":{"a":"abc","c":{"a":"a","b":{"a":{"a":{"d":"d"}}}}},"b":[1,2],"c":"nafis","j":"nafis ahmed","k":["abc",["a","b"]],"l":{"a":["av"],"d":{"a":"a"}}}

  ## Contributing

  I have built this code for saving storage and minimize scrap data.