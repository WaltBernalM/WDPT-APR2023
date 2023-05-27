// ¿Como creamos un servidor de express?
// 1. importar el modulo de express y asignarlo a una variable
const express = require('express');
const hbs = require('hbs');

// 2. inicializar el modulo y asignarlo a una variable
const app = express();


app.set("views", __dirname + "/views")
app.set("view engine", "hbs")
// con esto activamos los partials de hbs dentro de la carpeta partials
hbs.registerPartials(__dirname + '/views/partials')

app.get('/players', (req, res, next) => {
    const players = [
        {
          name: "Rusell",
          lastName: "Westbrook",
          team: "OKC",
          photo: "https://thunderousintentions.com/wp-content/uploads/getty-images/2017/12/891998404-oklahoma-city-thunder-v-indiana-pacers.jpg.jpg",
          average: [
            { year: 2013, points: 82 },
            { year: 2014, points: 82 },
            { year: 2015, points: 60 },
            { year: 2016, points: 46 },
            { year: 2017, points: 67 },
            { year: 2018, points: 80 }
          ]
        },
        {
          name: "Kevin",
          lastName: "Durant",
          team: "GSW",
          photo: "https://img.bleacherreport.net/img/images/photos/003/670/482/hi-res-3c2473cd8600df96c4b94c93808562c8_crop_north.jpg?h=533&w=800&q=70&crop_x=center&crop_y=top",
          average: [
            { year: 2013, points: 76 },
            { year: 2014, points: 80 },
            { year: 2015, points: 65 },
            { year: 2016, points: 50 },
            { year: 2017, points: 67 },
            { year: 2018, points: 78 }
          ]
        },
        {
          name: "Lebron",
          lastName: "James",
          team: "CLE",
          photo: "https://usatftw.files.wordpress.com/2018/01/ap_cavaliers_timberwolves_basketball.jpg?w=1000&h=600&crop=1",
          average: [
            { year: 2013, points: 78 },
            { year: 2014, points: 82 },
            { year: 2015, points: 76 },
            { year: 2016, points: 84 },
            { year: 2017, points: 67 },
            { year: 2018, points: 60 }
          ]
        },
        {
          name: "Emanuel",
          lastName: "Ginóbilli",
          team: "SAS",
          photo: "https://cdn.vox-cdn.com/thumbor/Z9kR0HDJrzOzxOdwGe7Jwyxxvjk=/0x0:2802x4203/1200x800/filters:focal(1329x1158:1777x1606)/cdn.vox-cdn.com/uploads/chorus_image/image/57733525/usa_today_10429631.0.jpg",
          average: [
            { year: 2013, points: 82 },
            { year: 2014, points: 76 },
            { year: 2015, points: 74 },
            { year: 2016, points: 80 },
            { year: 2017, points: 66 },
            { year: 2018, points: 63 }
          ]
        },
        {
          name: "Kyrie",
          lastName: "Irving",
          team: "BOS",
          photo: "https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2017/11/11/kyrie-irving-mvp-case.jpg?itok=PWYqUSGf",
          average: [
            { year: 2013, points: 74 },
            { year: 2014, points: 72 },
            { year: 2015, points: 66 },
            { year: 2016, points: 82 },
            { year: 2017, points: 64 },
            { year: 2018, points: 61 }
          ]
        }
      ];
    res.render("players", { players })
})

app.get('/player', (req, res, next) => {

    const player = {
        name: "Kevin",
        lastName: "Duran",
        team: "Miami Heat",
        photo: "https://ca-times.brightspotcdn.com/dims4/default/a215e03/2147483647/strip/true/crop/5329x3553+0+0/resize/1200x800!/format/webp/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fd9%2F32%2F6eb05d13a73fd8697824aa5a2f22%2F3484691a6b1d4375a5b47040f4befca0",
        average: [
          { year: 2013, points: 82 },
          { year: 2014, points: 82 },
          { year: 2015, points: 60 },
          { year: 2016, points: 46 },
          { year: 2017, points: 67 },
          { year: 2018, points: 80 }
        ]
      }
    res.render('player', player)
})



// 3. hacemos que nuestro servidor empiece a escuchar requets
app.listen(3000, () => console.log('El servidor ya esta corriendo'))

