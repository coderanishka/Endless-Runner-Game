var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["93077ea1-2cdc-4523-8523-f9d86b645555","31eb6886-8fcc-4f5f-b5f1-e66509216068","2923fb6c-1c15-4b04-b138-e29dc3d6524f","a5a1e079-fd19-4bf2-b7ff-c9aa506d584a","4fc7ea72-9e39-4d7f-b684-19653c0e1547","da96661f-42be-4799-9b08-d9d5af8436f4","8491c8a6-1202-4c70-be91-affddb948375","6e93a7f8-a3c7-4d10-9799-3f721da2095e","da1579f3-7ef9-4739-b0f1-d8e739d636df","240d8230-26c9-4134-ac31-1f38668606bb","dbc463ea-3e1c-4f3e-a58f-dcf7394467bf","6f218102-390a-4520-9185-7c00939f78f4","9614604e-ca48-49ae-ac4f-e3eaf2cc5469"],"propsByKey":{"93077ea1-2cdc-4523-8523-f9d86b645555":{"name":"friend1","sourceUrl":"assets/api/v1/animation-library/gamelab/TNPvA7Go6TT91VPFgHBl4Uih6TX8PB3G/category_characters/asterisk_stretching.png","frameSize":{"x":144,"y":144},"frameCount":8,"looping":true,"frameDelay":2,"version":"TNPvA7Go6TT91VPFgHBl4Uih6TX8PB3G","loadedFromSource":true,"saved":true,"sourceSize":{"x":432,"y":432},"rootRelativePath":"assets/api/v1/animation-library/gamelab/TNPvA7Go6TT91VPFgHBl4Uih6TX8PB3G/category_characters/asterisk_stretching.png"},"31eb6886-8fcc-4f5f-b5f1-e66509216068":{"name":"friend2","sourceUrl":"assets/api/v1/animation-library/gamelab/aTEW8AtEEdRuAHf5uRFooQ6hPUC2kqr9/category_characters/bubbly.png","frameSize":{"x":82,"y":130},"frameCount":4,"looping":true,"frameDelay":2,"version":"aTEW8AtEEdRuAHf5uRFooQ6hPUC2kqr9","loadedFromSource":true,"saved":true,"sourceSize":{"x":82,"y":520},"rootRelativePath":"assets/api/v1/animation-library/gamelab/aTEW8AtEEdRuAHf5uRFooQ6hPUC2kqr9/category_characters/bubbly.png"},"2923fb6c-1c15-4b04-b138-e29dc3d6524f":{"name":"friend3","sourceUrl":"assets/api/v1/animation-library/gamelab/N7EDXzluLibOYB7Yrdow.KK4Nd70AlRQ/category_characters/happy_critter.png","frameSize":{"x":262,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"N7EDXzluLibOYB7Yrdow.KK4Nd70AlRQ","loadedFromSource":true,"saved":true,"sourceSize":{"x":262,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/N7EDXzluLibOYB7Yrdow.KK4Nd70AlRQ/category_characters/happy_critter.png"},"a5a1e079-fd19-4bf2-b7ff-c9aa506d584a":{"name":"friend4","sourceUrl":"assets/api/v1/animation-library/gamelab/4IFTei3Gq0QMZolfKwQlhft6jltKM7N5/category_characters/purple_monster.png","frameSize":{"x":280,"y":290},"frameCount":1,"looping":true,"frameDelay":2,"version":"4IFTei3Gq0QMZolfKwQlhft6jltKM7N5","loadedFromSource":true,"saved":true,"sourceSize":{"x":280,"y":290},"rootRelativePath":"assets/api/v1/animation-library/gamelab/4IFTei3Gq0QMZolfKwQlhft6jltKM7N5/category_characters/purple_monster.png"},"4fc7ea72-9e39-4d7f-b684-19653c0e1547":{"name":"ground","sourceUrl":"assets/api/v1/animation-library/gamelab/eTXwJZViNVcExVWDN7Mj0aO3j19hENz8/category_environment/ground_cake.png","frameSize":{"x":380,"y":94},"frameCount":1,"looping":true,"frameDelay":2,"version":"eTXwJZViNVcExVWDN7Mj0aO3j19hENz8","loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":94},"rootRelativePath":"assets/api/v1/animation-library/gamelab/eTXwJZViNVcExVWDN7Mj0aO3j19hENz8/category_environment/ground_cake.png"},"da96661f-42be-4799-9b08-d9d5af8436f4":{"name":"player2","sourceUrl":"assets/api/v1/animation-library/gamelab/Q06Mtp7OA9HZ97lXOvJ7J59dO3jcjyLu/category_animals/bunny2_walk1.png","frameSize":{"x":152,"y":193},"frameCount":2,"looping":true,"frameDelay":2,"version":"Q06Mtp7OA9HZ97lXOvJ7J59dO3jcjyLu","loadedFromSource":true,"saved":true,"sourceSize":{"x":304,"y":193},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Q06Mtp7OA9HZ97lXOvJ7J59dO3jcjyLu/category_animals/bunny2_walk1.png"},"8491c8a6-1202-4c70-be91-affddb948375":{"name":"player-2","sourceUrl":null,"frameSize":{"x":152,"y":193},"frameCount":1,"looping":true,"frameDelay":12,"version":"xLze9i7T6ruEOsL9RJ5.i3kNy376lLcG","loadedFromSource":true,"saved":true,"sourceSize":{"x":152,"y":193},"rootRelativePath":"assets/8491c8a6-1202-4c70-be91-affddb948375.png"},"6e93a7f8-a3c7-4d10-9799-3f721da2095e":{"name":"coin1","sourceUrl":null,"frameSize":{"x":86,"y":86},"frameCount":6,"looping":true,"frameDelay":12,"version":"cqTrQ4LlBxmbm9KWCfnv4NvjN8GQkhNM","loadedFromSource":true,"saved":true,"sourceSize":{"x":172,"y":258},"rootRelativePath":"assets/6e93a7f8-a3c7-4d10-9799-3f721da2095e.png"},"da1579f3-7ef9-4739-b0f1-d8e739d636df":{"name":"coin2","sourceUrl":"assets/api/v1/animation-library/gamelab/dZ98jetKnt5ZogX102g5XO3252U0D8oc/category_gameplay/bronze.png","frameSize":{"x":86,"y":86},"frameCount":6,"looping":true,"frameDelay":2,"version":"dZ98jetKnt5ZogX102g5XO3252U0D8oc","loadedFromSource":true,"saved":true,"sourceSize":{"x":516,"y":86},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dZ98jetKnt5ZogX102g5XO3252U0D8oc/category_gameplay/bronze.png"},"240d8230-26c9-4134-ac31-1f38668606bb":{"name":"coin3","sourceUrl":null,"frameSize":{"x":86,"y":86},"frameCount":6,"looping":true,"frameDelay":12,"version":"OXfEPGMgoR._2TZkcjxyPoM32J78zrhJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":172,"y":258},"rootRelativePath":"assets/240d8230-26c9-4134-ac31-1f38668606bb.png"},"dbc463ea-3e1c-4f3e-a58f-dcf7394467bf":{"name":"player_jump","sourceUrl":null,"frameSize":{"x":152,"y":193},"frameCount":1,"looping":true,"frameDelay":12,"version":"DTOeNnnMSS1Wfd6aYG9.Z6a11RyD7.hh","loadedFromSource":true,"saved":true,"sourceSize":{"x":152,"y":193},"rootRelativePath":"assets/dbc463ea-3e1c-4f3e-a58f-dcf7394467bf.png"},"6f218102-390a-4520-9185-7c00939f78f4":{"name":"restart","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"_wal72GkvYYh7CLQYAzaDPmLiYOMwDEm","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/6f218102-390a-4520-9185-7c00939f78f4.png"},"9614604e-ca48-49ae-ac4f-e3eaf2cc5469":{"name":"bg","sourceUrl":"assets/v3/animations/d3Ds5QUJlCKnIKjDmI1EexxWchqJ06fyIqje9apTpBY/9614604e-ca48-49ae-ac4f-e3eaf2cc5469.png","frameSize":{"x":471,"y":148},"frameCount":1,"looping":true,"frameDelay":4,"version":"BqxJ3XalsFZtxH1CMHqMVneX8WwBJOUE","loadedFromSource":true,"saved":true,"sourceSize":{"x":471,"y":148},"rootRelativePath":"assets/v3/animations/d3Ds5QUJlCKnIKjDmI1EexxWchqJ06fyIqje9apTpBY/9614604e-ca48-49ae-ac4f-e3eaf2cc5469.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//gamestates
var PLAY = 1;
var OVER = 0;
var gamestate = PLAY;

//create background
var bg = createSprite(250,250);
bg.setAnimation("bg");
bg.scale=1.2;



//create player
var player = createSprite(50,200);
player.setAnimation("player2");
player.scale=0.5;
player.setCollider("rectangle",0,0,100,190);
//player.debug=true;

//create ground
var ground = createSprite(200,400);
ground.setAnimation("ground");
ground.scale=1.9;
ground.x= ground.width /2;

//create Groups
var FriendsGroup=createGroup();

// create score
var score = 0;

//reset botton
 var reset = createSprite(190,120);
 reset.setAnimation("restart");
 reset.visible=false;
 
//set text
textSize(18);
textFont("Georgia");
fill("black");

function draw() {
  
  background(rgb(255, 225 ,225));
  //dont let the player fall down
  player.collide(ground);
 
  //display text 
  text ("Score: "+score,300,50);
  
    if(gamestate === PLAY){
  //make the ground move
     ground.velocityX=-(6+3*score/100);
     if (ground.x < 60){
      ground.x = ground.width/2;
     }
   
  //update the score
  score =score+ Math.round((World.frameRate/70)*1.3) ;
  
  //make the player jump
   if (keyDown("space") && player.y >= 213){
    player.velocityY=-15;
    playSound("assets/category_jump/arcade_game_jump_1.mp3");
   }
    //add gravity
    player.velocityY=player.velocityY+0.8;  
    
  spawnFriends();
  //if a friend touches the player
   if( FriendsGroup.collide(player)){
      playSound("assets/category_alerts/playful_game_error_sound_4.mp3");
      gamestate=OVER;
    }
  }
  else if (gamestate === OVER){
  //stop all the moving objects  
    ground.velocityX=0;
    FriendsGroup.setVelocityYEach(0);
    player.velocityY=0;
  
  //reset lifetime so that it doesn't disappear
  FriendsGroup.setLifetimeEach(-1);
    
  //change the animation
  player.setAnimation("player-2");

  //add text
   text("Game Over!!",150,80);
   
   //display the reset button
   reset.visible=true;
  } 
 
 if (mousePressedOver(reset)){
   restart();
    }
 
 drawSprites();  
}

function spawnFriends(){
  if (World.frameCount% 100===0){
    var friend = createSprite(400,310);
    friend.velocityX=-(5+3*score/100);
    var rand = randomNumber(1,4);
    friend.setAnimation("friend"+rand);
    friend.scale=0.3;
    friend.collide(ground);
    //set lifetime
    friend.lifetime=100;
    
   // create group
    FriendsGroup.add(friend);
  }
}
function restart(){
 gamestate= PLAY;
 reset.visible=false;
 FriendsGroup.destroyEach();
 player.setAnimation("player2");
 score=0;
}
console.log(gamestate);






// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
