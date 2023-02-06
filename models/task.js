//Importar el modulo de js para trabajar bases de MySQL
const mysql = require('mysql');

let model = {};

const hostVar = 'localhost';
const userVar = 'root';
const userPort = "3306";
const passwordVar = 'bytheswordslash';
const databaseVar = 'vacante_bap';

model.getAllTask = function(callback)
{
    // ==== ESTABLECER UN OBJETO DE CONEXION A LA BD
    var connection = mysql.createConnection(
      {
        host: hostVar,
        user: userVar,
        port: userPort,
        password: passwordVar,
        database: databaseVar
      });

    // ====== SE VERIFICA SI HAY UN ERROR EN LA CONEXION
    connection.connect((err) =>
    {
        if (err)
        {
            throw err;
        }
    });

    // ====== SI LA CONEXION SE REALIZÓ CORRECTAMENTE, CONTINUA EL PROCESO
    if(connection)
    {
        //====== SE CREA UNA CONSULTA SQL
      var sql = "select * from tareas";

      // ======= SE EJECUTA LA CONSULTA
      connection.query(sql, function(err, data)
      {
          // ===== SE VERIFICA SI HAY UN ERROR AL EJECUTAR LA CONSULTA Y SE DEVUELVE UN MENSAJE DE ERROR AL USUARIO
        if(err)
        {
          console.log(err);
          callback(null, {status: 'Error', mensaje: err});
        }
        // ====== SI NO HAY ERROR
        else
        {
            // ===== SE CIERRA LA CONEXION A LA BD
            connection.end((err) =>
            {
                console.log("DB connection closed");
            });

            // ===== SE DEVUELVEN LOS DATOS OBTENIDOS DE LA BD AL USUARIO EN FORMATO JSON
            callback(null, {status: 'OK', data: data});
        }
      });
    }
}

model.getTaskById = function(id, callback)
{
    // ==== ESTABLECER UN OBJETO DE CONEXION A LA BD
    var connection = mysql.createConnection(
      {
        host: hostVar,
        user: userVar,
        port: userPort,
        password: passwordVar,
        database: databaseVar
      });

    // ====== SE VERIFICA SI HAY UN ERROR EN LA CONEXION
    connection.connect((err) =>
    {
        if (err)
        {
            throw err;
        }
    });

    // ====== SI LA CONEXION SE REALIZÓ CORRECTAMENTE, CONTINUA EL PROCESO
    if(connection)
    {
        //====== SE CREA UNA CONSULTA SQL
      var sql = "select * from tareas where id = '" + id + "'";

      // ======= SE EJECUTA LA CONSULTA
      connection.query(sql, function(err, data)
      {
          // ===== SE VERIFICA SI HAY UN ERROR AL EJECUTAR LA CONSULTA Y SE DEVUELVE UN MENSAJE DE ERROR AL USUARIO
        if(err)
        {
          console.log(err);
          callback(null, {status: 'Error', mensaje: err});
        }
        // ====== SI NO HAY ERROR
        else
        {
            // ===== SE CIERRA LA CONEXION A LA BD
            connection.end((err) =>
            {
                console.log("DB connection closed");
            });

            // ===== SE DEVUELVEN LOS DATOS OBTENIDOS DE LA BD AL USUARIO EN FORMATO JSON
            callback(null, {status: 'OK', data: data});

        }
      });

    }

}



model.addTask = function(data, callback)
{
    // ==== ESTABLECER UN OBJETO DE CONEXION A LA BD
    var connection = mysql.createConnection(
      {
        host: hostVar,
        user: userVar,
        port: userPort,
        password: passwordVar,
        database: databaseVar
      });

    // ====== SE VERIFICA SI HAY UN ERROR EN LA CONEXION
    connection.connect((err) =>
    {
        if (err)
        {
            throw err;
        }
    });

    // ====== SI LA CONEXION SE REALIZÓ CORRECTAMENTE, CONTINUA EL PROCESO
    if(connection)
    {
        //====== SE CREA UNA CONSULTA SQL
      var sql = "insert into tareas(id, title, status, delivery_date, comments, description, assigned_to) values('" + data.id + "', '" + data.title + "', '" + data.status + "', '" + data.delivery_date + "', '" + data.comments + "', '" + data.description + "', '" + data.assigned_to + "')";

      // ======= SE EJECUTA LA CONSULTA
      connection.query(sql, function(err, data)
      {
          // ===== SE VERIFICA SI HAY UN ERROR AL EJECUTAR LA CONSULTA Y SE DEVUELVE UN MENSAJE DE ERROR AL USUARIO
        if(err)
        {
          console.log(err);
          callback(null, {status: 'Error', mensaje: err});
        }
        // ====== SI NO HAY ERROR
        else
        {
            // ===== SE CIERRA LA CONEXION A LA BD
            connection.end((err) =>
            {
                console.log("DB connection closed");
            });
            // ===== SE DEVUELVEN LOS DATOS OBTENIDOS DE LA BD AL USUARIO EN FORMATO JSON
            callback(null, {status: 'OK', data: data});
        }
      });
    }
}

model.updateTask = function(data, callback)
{
    // ==== ESTABLECER UN OBJETO DE CONEXION A LA BD
    var connection = mysql.createConnection(
      {
        host: hostVar,
        user: userVar,
        port: userPort,
        password: passwordVar,
        database: databaseVar
      });

    // ====== SE VERIFICA SI HAY UN ERROR EN LA CONEXION
    connection.connect((err) =>
    {
        if (err)
        {
            throw err;
        }
    });

    // ====== SI LA CONEXION SE REALIZÓ CORRECTAMENTE, CONTINUA EL PROCESO
    if(connection)
    {
        //====== SE CREA UNA CONSULTA SQL
      var sql = "update tareas set title = '" + data.title + "', status = '" + data.status + "', delivery_date = '" + data.delivery_date + "', comments = '" + data.comments + "', description = '" + data.description + "', assigned_to = '" + data.assigned_to + "' where id ='" + data.id + "'";

      // ======= SE EJECUTA LA CONSULTA
      connection.query(sql, function(err, data)
      {
          // ===== SE VERIFICA SI HAY UN ERROR AL EJECUTAR LA CONSULTA Y SE DEVUELVE UN MENSAJE DE ERROR AL USUARIO
        if(err)
        {
          console.log(err);
          callback(null, {status: 'Error', mensaje: err});
        }
        // ====== SI NO HAY ERROR
        else
        {
            // ===== SE CIERRA LA CONEXION A LA BD
            connection.end((err) =>
            {
                console.log("DB connection closed");
            });
            // ===== SE DEVUELVEN LOS DATOS OBTENIDOS DE LA BD AL USUARIO EN FORMATO JSON
            callback(null, {status: 'OK', data: data});
        }
      });
    }
}

model.deleteTask = function(id, callback)
{
    // ==== ESTABLECER UN OBJETO DE CONEXION A LA BD
    var connection = mysql.createConnection(
      {
        host: hostVar,
        user: userVar,
        port: userPort,
        password: passwordVar,
        database: databaseVar
      });

    // ====== SE VERIFICA SI HAY UN ERROR EN LA CONEXION
    connection.connect((err) =>
    {
        if (err)
        {
            throw err;
        }
    });

    // ====== SI LA CONEXION SE REALIZÓ CORRECTAMENTE, CONTINUA EL PROCESO
    if(connection)
    {
        //====== SE CREA UNA CONSULTA SQL
      var sql = "delete from tareas where id = '" + id + "'";

      // ======= SE EJECUTA LA CONSULTA
      connection.query(sql, function(err, data)
      {
          // ===== SE VERIFICA SI HAY UN ERROR AL EJECUTAR LA CONSULTA Y SE DEVUELVE UN MENSAJE DE ERROR AL USUARIO
        if(err)
        {
          console.log(err);
          callback(null, {status: 'Error', mensaje: err});
        }
        // ====== SI NO HAY ERROR
        else
        {
            // ===== SE CIERRA LA CONEXION A LA BD
            connection.end((err) =>
            {
                console.log("DB connection closed");
            });
            // ===== SE DEVUELVEN LOS DATOS OBTENIDOS DE LA BD AL USUARIO EN FORMATO JSON
            callback(null, {status: 'OK', data: data});
        }
      });
    }

}


//----------- EXPORTAR EL MODELO PARA QUE SEA UTILIZABLE DESDE EL CONTROLADOR
module.exports = model;
