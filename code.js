onEvent("jRoom1","click",function(){
  setScreen("jRoom2");
  playSound("assets/category_alerts/vibrant_game_correct_answer_hit.mp3");
});

//Selecting Game\\
onEvent("tfStart","click",function(){
  setScreen("tf");
  playSound("assets/category_alerts/vibrant_game_correct_answer_hit.mp3");
});

onEvent("valStart","click",function(){
  setScreen("valorant");
  playSound("assets/category_alerts/vibrant_game_correct_answer_hit.mp3");
});

//TITANFALL GAME FUNCTIONS\\
onEvent("tfA1","click",function(){
  setScreen("wrong");
  playSound("assets/category_male_voiceover/wrong_male.mp3");
});

onEvent("tfA2","click",function(){
  setScreen("wrong");
  playSound("assets/category_male_voiceover/wrong_male.mp3");
});

onEvent("tfA3","click",function(){
  setScreen("right");
  playSound("assets/category_male_voiceover/correct_male.mp3");
});

onEvent("tfA4","click",function(){
  setScreen("wrong");
  playSound("assets/category_male_voiceover/wrong_male.mp3");
});

//VALORANT GAME FUNCTIONS\\
onEvent("valA1","click",function(){
  setScreen("wrong");
  playSound("assets/category_male_voiceover/wrong_male.mp3");
});

onEvent("valA2","click",function(){
  setScreen("valorantRight");
  playSound("assets/category_male_voiceover/correct_male.mp3");
});

onEvent("valA3","click",function(){
  setScreen("wrong");
  playSound("assets/category_male_voiceover/wrong_male.mp3");
});

onEvent("valA4","click",function(){
  setScreen("wrong");
  playSound("assets/category_male_voiceover/wrong_male.mp3");
});

//RETURN FUNCTIONS\\
onEvent("returnMenu1","click",function(){
  setScreen("jRoom2");
  playSound("assets/category_alerts/vibrant_game_correct_answer_hit.mp3");
});

onEvent("returnMenu2","click",function(){
  setScreen("jRoom2");
  playSound("assets/category_alerts/vibrant_game_correct_answer_hit.mp3");
});

onEvent("returnMenu3","click",function(){
  setScreen("jRoom2");
  playSound("assets/category_alerts/vibrant_game_correct_answer_hit.mp3");
});

//HOVER TREAT FEEDBACK functionality\\
onEvent("mmTreat","mouseover",function(){
  setProperty("mmTreat","width",80);
  playSound("assets/category_objects/switch.mp3");
});

onEvent("mmTreat","mouseover",function(){
  setProperty("mmTreat","height",80);
  playSound("assets/category_objects/switch.mp3");
});

onEvent("mmPet","mouseover",function(){
  setProperty("mmPet","width",80);
  playSound("assets/category_objects/switch.mp3");
});

onEvent("mmPet","mouseover",function(){
  setProperty("mmPet","height",80);
  playSound("assets/category_objects/switch.mp3");
});


   // resets mmTreat ui after mouseoff\\

onEvent("mmTreat","mouseout",function(){
  setProperty("mmTreat","width",75);
});

onEvent("mmTreat","mouseout",function(){
  setProperty("mmTreat","height",75);
});

onEvent("mmPet","mouseout",function(){
  setProperty("mmPet","width",75);
});

onEvent("mmPet","mouseout",function(){
  setProperty("mmPet","height",75);
});



//Takes you to pet and treat dialogues\\
onEvent("mmTreat","click",function(){
  setScreen("jRoomTreats");
  playSound("assets/category_alerts/vibrant_game_correct_answer_hit.mp3");
});

onEvent("mmPet","click",function(){
  setScreen("jRoomPet1");
  playSound("assets/category_alerts/vibrant_game_correct_answer_hit.mp3");
});

//Petting dialogue progression\\
onEvent("jRoomPet1","click",function(){
  setScreen("jRoomPet2");
  playSound("assets/category_alerts/vibrant_game_correct_answer_hit.mp3");
});

onEvent("jRoomPet2","click",function(){
  setScreen("jRoomPet3");  
  playSound("assets/category_alerts/vibrant_game_correct_answer_hit.mp3");
});

onEvent("jRoomPet3","click",function(){
  setScreen("jRoom2"); 
  playSound("assets/category_alerts/vibrant_game_correct_answer_hit.mp3");
});

//REturn to menur from treats dialogue \\
onEvent("jRoomTreats","click",function(){
  setScreen("jRoom2");
  playSound("assets/category_alerts/vibrant_game_correct_answer_hit.mp3");
});

//Hovering over buttons makes sound\\
onEvent("tfStart","mouseover",function(){
  playSound("assets/category_objects/switch.mp3");
});

onEvent("valStart","mouseover",function(){
  playSound("assets/category_objects/switch.mp3");
});

onEvent("returnMenu1","mouseover",function(){
  playSound("assets/category_objects/switch.mp3");
});

onEvent("returnMenu2","mouseover",function(){
  playSound("assets/category_objects/switch.mp3");
});

onEvent("returnMenu3","mouseover",function(){
  playSound("assets/category_objects/switch.mp3");
});

onEvent("tfA1","mouseover",function(){
  playSound("assets/category_objects/switch.mp3");
});

onEvent("tfA2","mouseover",function(){
  playSound("assets/category_objects/switch.mp3");
});

onEvent("tfA3","mouseover",function(){
  playSound("assets/category_objects/switch.mp3");
});

onEvent("tfA4","mouseover",function(){
  playSound("assets/category_objects/switch.mp3");
});

onEvent("valA1","mouseover",function(){
  playSound("assets/category_objects/switch.mp3");
});

onEvent("valA2","mouseover",function(){
  playSound("assets/category_objects/switch.mp3");
});

onEvent("valA3","mouseover",function(){
  playSound("assets/category_objects/switch.mp3");
});

onEvent("valA4","mouseover",function(){
  playSound("assets/category_objects/switch.mp3");
});




