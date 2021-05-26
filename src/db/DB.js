// dependencies
const mysql = require("mysql");
const init = require("../utils/init");

class Db {
  constructor(database) {
    // object containing our connection setup
    const dbOptions = {
      host: "localhost",
      port: 3306,
      user: "root",
      password: "password",
      database,
    };
    // we create a connection using the object containing all of our connection data (port, host, password, database and user)
    this.database = database;
    this.connection = mysql.createConnection(dbOptions);
  }
  start() {
    const onConnect = async (err) => {
      try {
        if (err) throw err;
        console.log(
          `Connection to ${this.database} database was successful with id ${this.connection.threadId}`
        );
        await init();
        // this will end the connection
        this.connection.end();
      } catch (error) {
        console.log(error.message);
      }
    };

    this.connection.connect(onConnect);
  }

  selectAll() {}

  selectOne() {}

  deleteAll() {}

  deleteOne() {}

  insert() {}

  update() {}
}

module.exports = Db;
