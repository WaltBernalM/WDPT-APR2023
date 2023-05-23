// // PokeMon

// const pakachu = {
//     name: "pakachu",
//     type: "⚡️",
//     attack: 60,
//     life: 300,
//     stamina: 1000,
//     voltTackle: function(enemy) {
//         console.log(this.type.repeat(10))
//         this.stamina -= 100;
//         enemy.life -= this.attack;
//         console.log(`${enemy.name} receives an attack and has ${enemy.life} life points left`)
//     }
// }


// const caharaxard = {
//     name: "caharaxard",
//     type: "🔥",
//     attack: 90,
//     life: 500,
//     stamina: 700,
    // fireBreath: function(enemy) {
    //     console.log(this.type.repeat(10))
    //     this.stamina -= 100;
    //     enemy.life -= this.attack;
    //     console.log(`${enemy.name} receives an attack and has ${enemy.life} life points left`)
    // }
// }

// // una funcion dentro de un objeto se llama metodo

// // this keyword (o palabra reservada)
// // Como funciona this en un objeto de javascript

// // const a = {
// //     name: 'lo que sea'
// // }   // this = { name: 'lo que sea' }

// // const pakachu = {
// //     name: "pakachu",
// //     type: "⚡️",
// //     attack: 60,
// //     life: 300,
// //     stamina: 1000,
// //     voltTackle: function(enemy) {
// //         this.stamina -= 100;
// //         // enemy.life - 60
// //         this.attack
// //         console.log('this: ', this)
// //     },
// //   subNivel: {
// //     power: 100,
// //     electroVolt: function() {
// //        console.log('this: ', this)
// //     }
// //   }
// // }


// // Turno 1 - pakachu
// // Antes de iniciar un ataque cada jugador puede llamar a su metodo llamado luck
// pakachu.voltTackle()

// // Turno 1 - caharaxard
// caharaxard.fireBreath()

// console.log(pakachu)
// console.log(caharaxard)

// // Como interactua un objeto con metodos con funciones
// // Items 
// // 🍰 == +50 life points
// // 💀 == -50 life points
// // 🍺 == +100 life points, +25 attack, +200 stamina
// // 🌶 == +70 attack
// // 🥦 == -30 life points, -35 attack, -100 stamina

// const items = ['🍰', '💀', '🍺', '🌶', '🥦'] 


// pakachu.luck = function () {
//     const itemIndex = Math.floor(Math.random()*(items.length));
//     const item = items[itemIndex]
//     console.log(`${this.name} got: ${item}`)
//     switch (item) {
//         case '🍰':
//             this.life += 50;            
//             break;
//         case '💀':
//             this.life -= 50;            
//             break;
//         case '🍺':
//             this.life += 100;
//             this.attack += 25;
//             this.stamina += 200;            
//             break;
//         case '🌶':
//             this.attack += 70;
//             break;
//         case '🥦':
//             this.life -= 30;
//             this.attack -= 35;
//             this.stamina -= 100;              
//             break;
//         default:
//             break;
//     }
// }

// caharaxard.luck = function () {
//     const itemIndex = Math.floor(Math.random()*(items.length));
//     const item = items[itemIndex]
//     console.log(`${this.name} got: ${item}`)
//     switch (item) {
//         case '🍰':
//             this.life += 50;            
//             break;
//         case '💀':
//             this.life -= 50;            
//             break;
//         case '🍺':
//             this.life += 100;
//             this.attack += 25;
//             this.stamina += 200;            
//             break;
//         case '🌶':
//             this.attack += 70;
//             break;
//         case '🥦':
//             this.life -= 30;
//             this.attack -= 35;
//             this.stamina -= 100;              
//             break;
//         default:
//             break;
//     }
// }



// // Turno 2 - pakachu
// pakachu.luck()
// pakachu.voltTackle(charaxard)
// // Turno 2 - charaxard
// charaxard.luck()
// charaxard.fireBreath(pakachu)

// status
// console.log('pakachu: ', pakachu)
// console.log('charaxard: ', charaxard)





// //// POO

// // class

// //palabra     nombre de
// //reservada   la clase
// //    👇        👇   
//     class      Car    {
//     // metodo 
//     // reservado    paramtros (tantos como queramos)       
//     //      👇        👇  
//         constructor(params) {

//         }
//     }



// {
//     name: "pakachu",
//     type: "⚡️",
//     attack: 60,
//     life: 300,
//     stamina: 1000,
//    items: 
// }

class PokeMon {
    items = ['🍰', '💀', '🍺', '🌶', '🥦'] 
    constructor(name, type, attack, life, stamina) {
        this.name = name;
        this.type = type;
        this.attack = attack;
        this.life = life;
        this.stamina = stamina;
    }

    luck() {
        const itemIndex = Math.floor(Math.random()*(items.length));
        const item = items[itemIndex]
        console.log(`${this.name} got: ${item}`)
        switch (item) {
            case '🍰':
                this.life += 50;            
                break;
            case '💀':
                this.life -= 50;            
                break;
            case '🍺':
                this.life += 100;
                this.attack += 25;
                this.stamina += 200;            
                break;
            case '🌶':
                this.attack += 70;
                break;
            case '🥦':
                this.life -= 30;
                this.attack -= 35;
                this.stamina -= 100;              
                break;
            default:
                break;
        }  
    }
}



// Herencia

class Pakachu extends PokeMon {
    constructor(name, type, attack, life, stamina) {
        super(name, type, attack, life, stamina)
    }

    voltTackle(enemy) {
        console.log(this.type.repeat(10))
        this.stamina -= 100;
        enemy.life -= this.attack;
        console.log(`${enemy.name} receives an attack and has ${enemy.life} life points left`)
    }
}

class Charaxard extends PokeMon {
    constructor(name, type, attack, life, stamina) {
        super(name, type, attack, life, stamina)
    }

    fireBreath(enemy) {
        console.log(this.type.repeat(10))
        this.stamina -= 100;
        enemy.life -= this.attack;
        console.log(`${enemy.name} receives an attack and has ${enemy.life} life points left`)
    }

}


const pakachu = new Pakachu("pakachu", "⚡️", 60, 300, 1000);
const charaxard = new Charaxard("caharaxard", "🔥", 90, 500, 700);

console.log(pakachu)
console.log(charaxard)