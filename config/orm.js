/* * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

     * `selectAll()`
     * `insertOne()`
     * `updateOne()`

   * Export the ORM object in `module.exports`. */

var connection = require("../config/connection");



function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  };

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
var arr = [];

// loop through the keys and push the key/value as a string int arr
for (var key in ob) {
  var value = ob[key];
  // check to skip hidden properties
  if (Object.hasOwnProperty.call(ob, key)) {
    // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
    if (typeof value === "string" && value.indexOf(" ") >= 0) {
      value = "'" + value + "'";
    }
    // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
    // e.g. {sleepy: true} => ["sleepy=true"]
    arr.push(key + "=" + value);
  }
}

// translate array of strings to a single comma-separated string
return arr.toString();
}

let orm = {

    all: function(tableInput, cb) {
        let queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    create: function(table, cols, vals, cb){
        let queryString = "INSERT INTO " + table + " (" + cols.toString() + ") VALUES (" + printQuestionMarks(vals.length) + ") ";
        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    update: function(table, objColVal, condition, cb) {
        let queryString = "UPDATE " +table + " SET " + objToSql(objColVal) + " WHERE " + condition;
        console.log(queryString);

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
                console.log('put error');
            }

            cb(result);
        });
    },

};


/* function selectAll(){
    console.log('selectAll');
};

function insertOne(){
    console.log("insertOne");
};

function updateOne(){
    console.log("updateOne");
}; */


module.exports= orm;