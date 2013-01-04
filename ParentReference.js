use TreeMongo;
db.categoriesPCO.insert({_id:"Electronics",parent:null});
db.categoriesPCO.insert({_id:"Cameras_and_Photography",parent:"Electronics", order:10});
db.categoriesPCO.insert({_id:"Digital_Cameras",parent:"Cameras_and_Photography", order:10});
db.categoriesPCO.insert({_id:"Camcorders",parent:"Cameras_and_Photography", order:20});
db.categoriesPCO.insert({_id:"Lenses_and_Filters",parent:"Cameras_and_Photography", order:30});
db.categoriesPCO.insert({_id:"Tripods_and_supports",parent:"Cameras_and_Photography", order:40});
db.categoriesPCO.insert({_id:"Lighting_and_studio",parent:"Cameras_and_Photography", order:50});
db.categoriesPCO.insert({_id:"Shop_Top_Products",parent:"Electronics", order:20});
db.categoriesPCO.insert({_id:"IPad",parent:"Shop_Top_Products", order:10});
db.categoriesPCO.insert({_id:"IPhone",parent:"Shop_Top_Products", order:20});
db.categoriesPCO.insert({_id:"IPod",parent:"Shop_Top_Products", order:30});
db.categoriesPCO.insert({_id:"Blackberry",parent:"Shop_Top_Products", order:40});
db.categoriesPCO.insert({_id:"Cell_Phones_and_Accessories",parent:"Electronics", order:30});
db.categoriesPCO.insert({_id:"Cell_Phones_and_Smartphones",parent:"Cell_Phones_and_Accessories", order:10});
db.categoriesPCO.insert({_id:"Headsets",parent:"Cell_Phones_and_Accessories", order:20});
db.categoriesPCO.insert({_id:"Batteries",parent:"Cell_Phones_and_Accessories", order:30});
db.categoriesPCO.insert({_id:"Cables_And_Adapters",parent:"Cell_Phones_and_Accessories", order:40});
db.categoriesPCO.insert({_id:"Nokia",parent:"Cell_Phones_and_Smartphones", order:10});
db.categoriesPCO.insert({_id:"Samsung",parent:"Cell_Phones_and_Smartphones", order:20});
db.categoriesPCO.insert({_id:"Apple",parent:"Cell_Phones_and_Smartphones", order:30});
db.categoriesPCO.insert({_id:"HTC",parent:"Cell_Phones_and_Smartphones", order:40});
db.categoriesPCO.insert({_id:"UkrTelecom",parent:"Cell_Phones_and_Smartphones", order:50});

