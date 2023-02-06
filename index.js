const express = require('express');

const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const { v4: uuid } = require('uuid');
const session = require('express-session');

const api = express();

const model = require('./models/task.js');

api.set("port", process.env.PORT || 4000);

api.use(cors({origin: '*'}));
api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: true}));

api.use(session(
{
  secret: "this_is_the_secret_key",
  saveUninitialized: true,
  resave: true,
}));


function checkSession(req, res, next)
{
    if(!req.session.userid)
    {
        req.session.userid = "u-" + uuid();
        console.log("Request from an unknown user. Setting ID: " + req.session.userid + " for this user");

        next();
    }
    else
    {
        console.log("Request from user " + req.session.userid);
        next();
    }
}

api.use(checkSession);

api.get("/", function(req, res)
{
  res.json(
    {
      status: "OK",
      message: "API running OK"
    })
});

api.get("/task/all", function(req, res)
{

  model.getAllTask(function(err, response)
  {
      if(err == null)
      {
          res.json(response);
      }
  });

});

api.get("/task/getById", function(req, res)
{
    let id = req.query.id || "";

  model.getTaskById(id, function(err, response)
  {
      if(err == null)
      {
          res.json(response);
      }
  });

});


api.post("/task/add", function(req, res)
{
    console.log(req.body);

    let taskData =
    {
        id: uuid().split("-").join(""),
        title: req.body.title,
        status: req.body.status,
        delivery_date: req.body.delivery_date,
        comments: req.body.comments,
        description: req.body.description,
        assigned_to: req.body.assigned_to
    };

    model.addTask(taskData, function(err, response)
    {
        if(err ==  null)
        {
            res.json(response);
        }
    });
});

api.delete("/task/delete", function(req, res)
{
    let id = req.body.id || "";

    model.deleteTask(id, function(err, response)
    {
        if(err == null)
        {
            res.json(response);
        }
    });
});

api.put("/task/update", function(req, res)
{
    let taskData =
    {
        id: req.body.id,
        title: req.body.title,
        status: req.body.status,
        delivery_date: req.body.delivery_date,
        comments: req.body.comments,
        description: req.body.description,
        assigned_to: req.body.assigned_to
    };

    model.updateTask(taskData, function(err, response)
    {
        if(err == null)
        {
            res.json(response);
        }
    });
});

// Poner a escuchar las peticiones al servidor mediante un puerto
api.listen(api.get("port"),()=>
{
    console.log(`API listening on port: ${api.get('port')}`);
});
