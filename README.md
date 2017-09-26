JSON or Array minimizer
=========

it minimize the size of json object or array by removing invalid values like undefined, null, empty array [] and empty json object {}

## Installation

  `npm install jsonarray_minimizer`

## Usage

    var ja_minimizer = require('../index');

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

  console.log(ja_minimizer(object));


  Output should be {"a":{"a":"abc","c":{"a":"a","b":{"a":{"a":{"d":"d"}}}}},"b":[1,2],"c":"nafis","j":"nafis ahmed","k":["abc",["a","b"]],"l":{"a":["av"],"d":{"a":"a"}}}

  ## Contributing

  I have built this code for ignoring code logic for deleting empty values and object . You can test as above mentioned