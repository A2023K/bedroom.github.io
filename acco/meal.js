
let breakfast_db = [
    {
        img_src:"",
        name:"breakfast1",
        infor:"English on toast",
        id:"m1"
    },
    {
        img_src:"",
        name:"breakfast2",
        infor:"Waffle breakfast",
        id:"m2" 
    },
    {
        img_src:"",
        name:"breakfast3",
        infor:"Bacon & Egg breakfast",
        id:"m3"
    },
    {
        img_src:"",
        name:"breakfast4",
        infor:"Quiche 7 Egg breakfast",
        id:"m4"
    },
    {
        img_src:"",
        name:"breakfast5",
        infor:"Fruit Pancake",
        id:"m5"
    },
    {
        img_src:"",
        name:"breakfast6",
        infor:"Egg on toast with bacon",
        id:"m6"
    }
]
for(bre in breakfast_db);
console.log(bre);
let bre_cards = $('.meal-card');
console.log(bre_cards);
bre_cards = breakfast_db;
bre_cards.id = breakfast_db.id;
 bre_cards.length = breakfast_db.length;

  
      



 

 



