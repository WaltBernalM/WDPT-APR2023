require('../db')

const User = require('../models/User.model')
const mongoose = require('mongoose');
const users = [{
    "username": "dthorold0",
    "email": "pdrieu0@opera.com",
    "password": "H3yPOa2W6k"
  }, {
    "username": "pproschek1",
    "email": "fcotmore1@digg.com",
    "password": "wKS8nM3KpVFQ"
  }, {
    "username": "tbuttrum2",
    "email": "rbeyn2@elpais.com",
    "password": "aeshven"
  }, {
    "username": "starbard3",
    "email": "pedgeller3@surveymonkey.com",
    "password": "SxbxuvcHp"
  }, {
    "username": "jreany4",
    "email": "ptolumello4@gravatar.com",
    "password": "t8htIyT"
  }, {
    "username": "bcolly5",
    "email": "achang5@example.com",
    "password": "XLbjkUW5"
  }, {
    "username": "lnasi6",
    "email": "acamies6@github.com",
    "password": "z6nugEw"
  }, {
    "username": "mhouseago7",
    "email": "ahamshaw7@omniture.com",
    "password": "Bn2cVUw"
  }, {
    "username": "gaddicote8",
    "email": "tcastiblanco8@umn.edu",
    "password": "uWipAsGQQy"
  }, {
    "username": "dmaps9",
    "email": "lkintzel9@xinhuanet.com",
    "password": "hojEbb"
  }, {
    "username": "btollowa",
    "email": "gtrevascusa@google.cn",
    "password": "oZwMoV"
  }, {
    "username": "bcristofanob",
    "email": "scurnowb@nhs.uk",   "password": "PnPIJOQSYmeu"
  }, {
    "username": "mbauntonc",
    "email": "rconradc@shareasale.com",
    "password": "IhyYcktsF5J"
  }, {
    "username": "ntrettd",
    "email": "tgeraudeld@wsj.com",
    "password": "u6yv0s7"
  }, {
    "username": "jclementse",
    "email": "apetrashove@statcounter.com",
    "password": "OJj4js7"
  }, {
    "username": "nwilkensonf",
    "email": "sgasperif@issuu.com",
    "password": "RdLS6ItuiKXt"
  }, {
    "username": "fordeltg",
    "email": "pnaveing@utexas.edu",
    "password": "8uSOVq0zv"
  }, {
    "username": "lbrigdaleh",
    "email": "shuntingdonh@cam.ac.uk",
    "password": "WqG8Jz"
  }, {
    "username": "ctailbyi",
    "email": "ltheseirai@illinois.edu",
    "password": "rS2oFXirjDvi"
  }, {
    "username": "fgonzalesj",
    "email": "mgreslyj@army.mil",
    "password": "x25MZVmorQ8"
  }]


User.insertMany(users)
.then(userCreated => {
    console.log('se crearon ', userCreated.length, 'usuarios')
    mongoose.connection.close()
})
.catch(error => console.log('error during seeding', error));