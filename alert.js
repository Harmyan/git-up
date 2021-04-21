
//alert( "Я JavaScript!" );//
//[1,2,3].forEach(alert)//

//const COLOR_ORANGE = "#FF7F00";
 //let use='Harut',
  //  mesage='hello world',
    //color='COLOR_ORANGE'
   // console.log(use);
    //console.log(mesage);
    //console.log(color);

    //var $=2;
     //  _=4;
     //console.log(_-$);//

     //let x=5;
     //   y=x+5;
     //   isGreater=y>x;
     // alert(isGreater);
     
     // let name='Harut';
     //  alert(`heloo ${name}`);
      
      
     // let fuNction;
     // alert(fuNction);

     // let age = prompt('Сколько тебе лет?', 50);
     //  console.log(`Тебе ${age} лет!`);
       
    
     //let value= true;
     //console.log(typeof value);

    // value= String(value);
     //console.log(typeof value);

     //let str= "156";
     //console.log(typeof str);
     //let num=Number(str);
     //console.log(typeof num);

   // let age=num;
   // console.log( age);//NAN;արժեքը սահմանված չէ։

  // console.log(Number("259"));//259
 //  console.log(Number("259y"));// NaN; Նիշի փոխարեն համարը կարդալու սխալ։
 //  console.log(Number(true)); //1
 //  console.log(Number(false)); //0 Այսպիսով, null- ը դառնում է զրո, երբ Undefined տրված է NaN- ին:

 //console.log(Boolean(8));//
//console.log(Boolean(0));//Այն արժեքները, որոնք 0-է, դատարկ տողը, զրոյական, null,Undefined և NaN- ը կեղծ են դառնում:

 /*let x=1;
     x=-x;
     console.log(x);*/


     /*let x=5;
        y=9;
        console.log(y-x);*/

        /*console.log(11%2);/1
        console.log(25%4);/1

        console.log(3**2);/9*/
        
       // console.log(4**1/2);/2

       //console.log('5'+ 9);/59

       //console.log(2+4+'5');/65

       //console.log(6-'3');/3

       //console.log(9/'3');/3


     /*  let apple='8';
            banan='5';
    console.log(apple+banan);/85*/

   /* let apple='5';
        banan='8';
        console.log(+apple+ +banan);/13*/

     /*   let x=7;
            y=8;
        let c= 10+ (x=y+8);
        console.log(x);/16
        console.log(c);/26*/

        /*let a, b, c ,d ;
            a=b=c=d=8+5+7-10;
        console.log(a);/10
        console.log(b);/10
        console.log(c);/10
        console.log(d);/10*/

       /* let a=7;
        a+=5;
        a*=7;
        console.log(a);/84*/

      /*  let b=6;
        b*=4+6;
        console.log(b);/60*/

       /* let counter=5;
        counter++;
        console.log(counter);/6/5+1/*/

       /* let counter= 7;
        counter--;
        console.log(counter);/6/7-1/*/

       /* let counter=0;
         counter++;
         ++counter;
         console.log(counter);/2*/

        // let counter=3;
         //console.log(2* ++counter);

        // console.log(2>5); false
        // console.log(3===3);true
        // console.log(3!==1);true
       // console.log('x'>'y');false
      //  console.log('2'>1);
      //  console.log(true ==1);/===false
      //  console.log(false ==0);/===fals

     // console.log(null== undefined);/true//===false
     //console.log(null<0);/false
     //console.log(null===0);/false
     //console.log(null>=0);/false


     /*let age = prompt('Возраст?', 18);

     let message = (age < 3) ? 'Здравствуй, малыш!' :
       (age < 18) ? 'Привет!' :
       (age < 100) ? 'Здравствуйте!' :
       'Какой необычный возраст!';
     
     console.log( message );*/
      
     /* let year=prompt("how old are you?")
      if(year=25){ console.log("yes.");
    }else{console.log("no");}*/
      
      /*let year=prompt("how old are you?");
      (year='25')?
      console.log(true): 
      console.log(false);*/

     /* let value = prompt('Какое "официальное" название JavaScript?', '');

    if (value == 'ECMAScript') {
      console.log('Верно!');
    } else {
      console.log('Не знаете? ECMAScript!');
    }*/

    /*console.log(true||true);/true
    console.log(true||false);/true
    console.log(false||true||false);/true
    console.log(true||false||false);/true
    console.log(false||false);/false*/


    /*let year=20;
    if(year<25||yaer>26){console.log("Erorr")
}*/

   /* let g;
    true|| (g=25);
    console.log(g);/undefined*/

    /*let g;
     false||(g=25);
     console.log(g);/25*/


     /*console.log(1 && 5 && undefined && 6);/undefined
     console.log(5 && 6 && 8 && 10);/10*/


     /*let userName = prompt("Кто там?", '');

      if (userName == 'Админ') {

       let pass = prompt('Пароль?', '');

       if (pass == 'Я главный') {
       console.log( 'Здравствуйте!' );
       } else if (pass == '' || pass == null) {
       console.log( 'Отменено' );
     } else {
       console.log( 'Неверный пароль' );
    }

    } else if (userName == '' || userName == null) {
     console.log( 'Отменено' );
    } else {
    console.log( "Я вас не знаю" );
    }*/

     /*let a;
     console.log(a ?? 'demo');/demo

     let x=2;
     console.log(x ??'demo');/x*/

    /* let user=null;
     let pass= undefined;
     let name='Harut';
     console.log(user ?? pass ?? name);//?? возвращает первое определённое значение.
     
     let user=null;
     let pass= undefined;
     let name='Harut';
     console.log(user || pass || name);/|| возвращает первое истинное значение.*/

     /*let width=0;
     console.log(width || 20);/width||20 проверяет, имеет ли переменная width ложное значение, что так и есть,
     поэтому результатом является второй аргумент 20:
     console.log(width ?? 20);/ width??20  проверяет, что переменная width содержит null/undefined,
      а поскольку это не так,
     то результатом является сама переменная width,0:*/


     /*let x=null;
     let y=null;
    let z=(x ?? 50)*(y??2);
     console.log(z);//100*/

    /* let x=1;
     while(x<4){
         console.log(x);
         x++;
     }

     let y=5;
     while(y) console.log(y--);*/

    /* let z=3;
     do{ console.log(z);
        z++;
     } while(z<6);*/

     /*for(let x=0;
        x<4;
        x++){
            console.log(x);
        }*/

        /*let y = 0;

        while (true) {

        let x= +prompt("Введите число", '');

         if (!x) break; // (*)

        y += x;

        }
        console.log( 'Сумма: ' +y );*/

        /*for (a=5; a <20; a++) {
            if (a %  2==1) continue;
            console.log(a);
        }
        for(a=5;a<20;a++){
            if(a%2);
            console.log(a)
        }*/

        /*function showMesage(){
            let name="pargev";
            let mesage="barev,"+ name;
            console.log(mesage);
        }
        showMesage();*/


      /*  let userName = 'Andre';

     function showMessage() {
     userName = "Simon"; 

     let message = 'Привет, ' + userName;
     console.log(message);
     }

     console.log( userName ); 

     showMessage();

     console.log( userName ); */

     /*function showMesage(from, text='barev erkir'){
         console.log(from +":" + text);
     }
      showMesage('hayer');*/

      
                      /*... object....*/

     /*let user= {
        name: "harut",
        age: 25
     };
       let  key= prompt("Что вы хотите узнать о пользователе?", "name");
      alert(user[key]);*/

    
      /* let fruit= prompt("ինչ միրգ ուտել՞ ", "strawberry");
        let bag={
            [fruit]: 300
        };                       
        console.log(bag.strawberry);*/


       /* let obj={
            let:7,
            for:10,
            return:6
        };
        console.log(obj.let+obj.for+obj.return);*/
        
       /* let obj={
            0:"king"
        };
        console.log(obj[0]);///king*/

       /* let user={};
        console.log(user);//{}*/

      /*  let user={};
        console.log(user.noSuchproperty=== undefined);//true*/

       /* let user={
            age:40,
            width:50,
            height:100
        };
        console.log("age" in user);//true
        console.log("name" in user);//false*/

       /* let obj={
            for:undefined
        };
        console.log(obj.for);//undifined
        console.log("for" in obj);//true*/

       /* let codes= {
            "+4":"Hungary",
            "+7":"Russia",
            "+3":"Armenia",
            "+1":"Usa"
        };

         for (let code in codes) {
           console.log(codes[code]);
        };*/

       /* let user={
            name: "jvc",
            age:"15"
        };
        Object.assign(user,{name:"Shiwaki"});
        console.log(user.name);*/
     



        /*  678*/

     /*   let username= null;
        console.log(username?.adress);//undifined
        console.log(username?.adress?.street);//undifined*/

      /*  let user= null;
        let x=2;
        user?. sayHi(x++);
        console.log(x);*/

      /*  let user=56;
        let x=5;
        user?.sayHI(x++);
        console.log(x);*/

       /* let user={
            name(){
            console.log("Harut");
            }
        }
        let user1={};
        user.name?.();//Harut
        user1.name?.();*/


      /*  let user={
            name(){
                console.log("Harut");
            }
        }
        let user1={
            name(){
                console.log("NIGOL");
            }
        }
            user.name?.();//Harut
            user1.name?.();//NIGOL*/

            
          /*  let user={
                name(){
                    console.log("Harut");
                }
            }
            let user1={
                name(){
                    console.log("NIGOL");
                }
            }
                delete user?.name ;
                user1.name?.();*/

                /*let id1= Symbol("id");
                let id2= Symbol("id");

                console.log(id1===id2);//false*/

                /*let id=Symbol("id");
                let user={
                    age:40,
                    width:50,
                    height:100,
                    [id]: 60
                };
                for(let key in user)
                console.log(key);
                console.log(user[id]);*/

                /*let id=Symbol("id");
                let user={
                    [id]: 60
                };
                let clone= Object.assign({},user);
                console.log(clone[id]);*/

                /*let id1= Symbol.for("id");
                let id2=Symbol.for("id");
                console.log(id1===id2);//true*/


              /*  let user=Symbol.for("admin");

                let user1= Symbol.for("operator");

                console.log( Symbol.keyFor(user));//addmin
                console.log( Symbol.keyFor(user1));//operator*/


               /* let user={
                    name:"Andre",
                    age:24,

                  tostring(){
                      return this.name;
                  },
                  valueOf(){
                      return this.age;
                  }
                };
                console.log(user);
                console.log(+user);
                console.log("Andre"+user);*/

                
              /*  let billion= 7.3e9;
                console.log(7.3e9);//7,300,000,000*/


              /*  let num =346;
                console.log(num.toString(34)) ;//a6
                console.log(num.toString(14)) ; //1aa*/

               /* let num=5.6548445
                console.log(Math.floor(num*1000)/100);//56.54*/

               /* let num=12.546
                console.log(num.toFixed(2));//12.55*/

                
              //  console.log(0.4+0.2===0.6);//false
             //   console.log(0.4+0.2);// 0.6000000000000001

             /* let num=0.1+0.2;
              console.log(num.toFixed(1));//0.3*/
               // console.log((0.1*10+0.2*10)/10);//0.3
               // console.log(Math.pow(3,5));//243


             /*  function num( x,y) {
                   return x+y;
               }
               console.log(`2+3= ${num(2,3)}`);//2+3=5*/
               
               /*let names= ["Arman","Luiz","Ani"]
                console.log(names.pop());
                console.log(names);*/

               /* let names= ["Arman","Luiz","Ani"]
                names.push("sirushik");
                console.log(names);*/

              /*  let names= ["Arman","Luiz","Ani"]
                console.log(names.shift("Arman"));
                console.log(names);*/

               /* let names=["ARMENIA"]
                let arr=names;
                console.log(arr===names);
                arr.push("EREVAN");
                console.log(arr);*/

               
               /* let arr=["london","baku","ankara"];
                for(i=0; i<arr.length;i++){
                  console.log(arr[i]);
                }*/


               /* let arr=["Erevan","Tehran","Saribash"];
                for(let key in arr){
                console.log(arr[key]);
                }*/

               // let arr= new Array(2);
               // console.log(arr[0]);
               // console.log(arr.length);

               /*let arr= ["hello","I am","Harut"];
               arr.splice(1,1,"you are");
               console.log(arr);*/

               /*let users=[
                 {id:1, num:"2"},
                 {id:2,num:"3"},
                 {id:3,num:"4"},
               ];
               let user=users.find(item=>item.id===1);
               console.log(user.num);*/

               /*let army = {
                minAge: 18,
                maxAge: 27,
                canJoin(user) {
                  return user.age >= this.minAge && user.age < this.maxAge;
                }
              };
              
              let users = [
                {age: 16},
                {age: 20},
                {age: 23},
                {age: 30}
              ];
              
              // найти пользователей, для которых army.canJoin возвращает true
              let soldiers = users.filter(army.canJoin, army);
              
              console.log(soldiers.length); // 2
              console.log(soldiers[0].age); // 20
              console.log(soldiers[1].age); // 23*/

             /* function copySorted(arr) {
                return arr.slice().sort();
              }
              
              let arr = ["HTML", "JavaScript", "CSS"];
              
              let sorted = copySorted(arr);
              
              console.log( sorted );
              console.log( arr );*/

             /* let vasya = { name: "Вася", age: 25 };
              let petya = { name: "Петя", age: 30 };
              let masha = { name: "Маша", age: 28 };

              let users = [ vasya, petya, masha ];

              let names = users.map(item => item.name);

              console.log( names );*/

              /* let range={
                from:1,
                to:10
               };

               range[Symbol.iterator]=function(){
                
                return{
                  curent:this.from,
                  last:this.to,
                  next(){
                        if(this.curent <= this.last);{
                         return{done:false,value:this.curent++};
                        } 
                         else {
                          return {done:true};
                        }
                  }
                };
               };
                     for(let num of range){
                     console.log(num);
                     }*/

                     /*let str = '𝒳😂';
                        for (let char of str) {
                         console.log( char );
                          }*/

                         /* let recipeMap = new Map([
                            ["fish", 500],
                            ["wolf", 350],
                            ["bird",    50]
                          ]);
                          
                          
                          for (let animals of recipeMap.keys()) {
                            console.log(animals); 
                          }
                          
                          
                          for (let amount of recipeMap.values()) {
                            console.log(amount); 
                          }
                          
                        
                          for (let entry of recipeMap) { 
                            console.log(entry); 
                          }*/

                          /*let map=new Map();
                          map.set("name","karlen");
                          let keys=Array.from(map.keys());
                          keys.push("Andre");
                          console.log(keys);*/

                        /*  let user={
                            name:"valer",
                            age:"19",
                            height:"1.78"
                          }
                          for(let value of Object.values(user)){
                            console.log(value)
                          }*/

                         /* let salaries = {
                            "John": 100,
                            "Pete": 300,
                            "Mary": 250
                          };
                          function sumSalaries(salaries) {
                            return Object.values(salaries).reduce((a, b) => a + b, 0) // 650
                          }
                          console.log( sumSalaries(salaries) );*/

                          /*let user = {
                            name: "John",
                            age: 30,
                          
                            toString() {
                              return `{name: "${this.name}", age: ${this.age}}`;
                            }
                          };
                          
                          console.log(user);*/

                          /*let user = {
                            name: 'Aram',
                            age: 30,
                            isAdmin: false,
                            courses: ['html', 'css', 'js'],
                            wife: null
                          };
                          
                          let json = JSON.stringify(user);
                          
                          console.log(typeof json); 
                          
                          console.log(json);*/

                          /*let room = {
                            number: 23
                          };
                          
                          let meetup = {
                            title: "Conference",
                            date: new Date(Date.UTC(2021, 2, 4)),
                            room
                          };
                          
                          console.log( JSON.stringify(meetup) );*/

                          /*let user = {
                            name: "Andranik",
                            age: 35
                          };
                          
                          let user2 = JSON.parse(JSON.stringify(user));
                          console.log(user2);*/

                         /* let room = {
                            number: 23
                          };
                          
                          let meetup = {
                            title: "conferans",
                            occupiedBy: [{name: "Nikol"}, {name: "Pashinyan"}],
                            place: room
                          };
                          
                          room.occupiedBy = meetup; 
                          meetup.self = meetup;
                          
                          console.log( JSON.stringify(meetup, function replacer(key, value) {
                            return (key != "" && value == meetup) ? undefined : value;
                          }));*/

                          /*let user = {
                            name: true
                          };
                          let admin = {
                            age: true
                          };
                          
                          admin.__proto__ = user; 
                          console.log( admin.name );
                          console.log( admin.age ); */

                          /*let animal = {
                            eats: true
                          };
                          
                          function Rabbit(name) {
                            this.name = name;
                          }
                          
                          Rabbit.prototype = animal;
                          
                          let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal
                          
                          console.log( rabbit.eats ); // true*/

                         /* let obj = {};

                          console.log(obj.__proto__ === Object.prototype); // true
                        // obj.toString === obj.__proto__.toString == Object.prototype.toString*/

                        /* let arr = [1, 2, 3];

                          console.log( arr.__proto__ === Array.prototype ); // true

                          
                          console.log( arr.__proto__.__proto__ === Object.prototype ); // true

                          console.log( arr.__proto__.__proto__.__proto__ ); // null*/

                          /*Function.prototype.defer = function(ms) {
                            setTimeout(this, ms);
                          };
                          
                          function f() {
                            console.log("Hello!");
                          }
                          
                          f.defer(1000);*/

                         /* Function.prototype.defer = function(ms) {
                            let f = this;
                            return function(...args) {
                              setTimeout(() => f.apply(this, args), ms);
                            }
                          };
                        
                          function f(a, b) {
                            console.log( a + b );
                          }
                          
                          f.defer(1000)(1, 2); */

                         /* let animal = {
                            eats: true
                          };
                          
                          // создаём новый объект с прототипом animal
                          let rabbit = Object.create(animal);
                          
                          alert(rabbit.eats); // true
                          
                          alert(Object.getPrototypeOf(rabbit) === animal); // получаем прототип объекта rabbit
                          
                          Object.setPrototypeOf(rabbit, {}); // заменяем прототип объекта rabbit на {}*/


                          /*let animal = {
                                eats: true
                              };

                              let rabbit = Object.create(animal, {
                                jumps: {
                                  value: true
                                }
                              });

                              console.log(rabbit.jumps); // true*/


                              /*let dictionary = Object.create(null, {
                                toString: { // определяем свойство toString
                                  value() { // значение -- это функция
                                    return Object.keys(this).join();
                                  }
                                }
                              });
                              
                              dictionary.apple = "Apple";
                              dictionary.__proto__ = "test";
                              
                              // apple и __proto__ выведены в цикле
                              for(let key in dictionary) {
                                console.log(key); // "apple", затем "__proto__"
                              }
                              
                              // список свойств, разделённых запятой, выведен с помощью toString
                              console.log(dictionary); // "apple,__proto__"*/


                              function addmin(name) {
                                this.name = name;
                              }
                                addmin.prototype.sayHi = function() {
                                console.log( this.name );
                              }
                              
                              let addmin = new addmin("addmin");
                              
                              addmin.sayHi();                        // addmin
                              addmin.prototype.sayHi();              // undefined
                              Object.getPrototypeOf(addmin).sayHi(); // undefined
                              addmin.__proto__.sayHi();              // undefined


                          



              

                




                
                












                

















    


    

       

