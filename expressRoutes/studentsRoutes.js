// studentsRoutes.js

var express = require('express');
var app = express();
var studentsRoutes = express.Router();

// Require Item model in our routes module
var Student = require('../models/student');

// Defined store route
studentsRoutes.route('/add').post(function (req, res) {
  var Student = new Student(req.body);
   Student.save()
    .then(item => {
    res.status(200).json({'coin': 'Student added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
studentsRoutes.route('/').get(function (req, res) {
   Student.find(function (err, students){
    if(err){
      console.log(err);
    }
    else {
      res.json(students);
    }
  });
});

// Defined edit route
studentsRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Student.findById(id, function (err, student){
      res.json(student);
  });
});

//  Defined update route
studentsRoutes.route('/update/:id').post(function (req, res) {
   Student.findById(req.params.id, function(err, student) {
    if (!student)
      return next(new Error('Could not load Document'));
    else {
      student.id = req.body.id;
      student.name = req.body.name;
      student.phone = req.body.phone;
      student.URL = req.body.URL;
      student.degree = req.body.degree;
      student.committee = req.body.committee;

      student.save().then(student => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
studentsRoutes.route('/delete/:id').get(function (req, res) {
   Student.findByIdAndRemove({_id: req.params.id}, function(err, student){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = studentsRoutes;