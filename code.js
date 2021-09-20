var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["ae66247c-4b00-4cb0-88c4-b6aea646f7fa","8cf7d043-1a05-458f-b409-ace5eec4ed54","60bce40a-3d82-4674-a339-806788c0423f","c4c884c3-d4bd-41ee-8686-028e8f7f5f77","a881d3f5-cfca-4226-af14-cd278dfd5b11"],"propsByKey":{"ae66247c-4b00-4cb0-88c4-b6aea646f7fa":{"name":"target_colored_1","sourceUrl":"assets/api/v1/animation-library/gamelab/BHo.Tqfae.IFcLjrX.GRK2qn5GaNPdSo/category_board_games_and_cards/target_colored.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"BHo.Tqfae.IFcLjrX.GRK2qn5GaNPdSo","categories":["board_games_and_cards"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/BHo.Tqfae.IFcLjrX.GRK2qn5GaNPdSo/category_board_games_and_cards/target_colored.png"},"8cf7d043-1a05-458f-b409-ace5eec4ed54":{"name":"sticker_27_1","sourceUrl":"assets/api/v1/animation-library/gamelab/wBEKDcgL5b8g5A6wxZLQFwn3w4yafsXs/category_stickers/sticker_27.png","frameSize":{"x":400,"y":242},"frameCount":1,"looping":true,"frameDelay":2,"version":"wBEKDcgL5b8g5A6wxZLQFwn3w4yafsXs","categories":["stickers"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":242},"rootRelativePath":"assets/api/v1/animation-library/gamelab/wBEKDcgL5b8g5A6wxZLQFwn3w4yafsXs/category_stickers/sticker_27.png"},"60bce40a-3d82-4674-a339-806788c0423f":{"name":"sticker_34_1","sourceUrl":"assets/api/v1/animation-library/gamelab/03rBgUkpKK_9hg1RkGHc820nxLAp_lB8/category_stickers/sticker_34.png","frameSize":{"x":244,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"03rBgUkpKK_9hg1RkGHc820nxLAp_lB8","categories":["stickers"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":244,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/03rBgUkpKK_9hg1RkGHc820nxLAp_lB8/category_stickers/sticker_34.png"},"c4c884c3-d4bd-41ee-8686-028e8f7f5f77":{"name":"background_landscape09_1","sourceUrl":"assets/api/v1/animation-library/gamelab/T167cO7veEolJu4MdK3thTgLhnqD_rJB/category_backgrounds/background_landscape09.png","frameSize":{"x":400,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"T167cO7veEolJu4MdK3thTgLhnqD_rJB","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/T167cO7veEolJu4MdK3thTgLhnqD_rJB/category_backgrounds/background_landscape09.png"},"a881d3f5-cfca-4226-af14-cd278dfd5b11":{"name":"space_1","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"GrKY4pMJcaZBygMgRv74brD6TpnTGyQF","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/a881d3f5-cfca-4226-af14-cd278dfd5b11.png"}}};
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

var target = createSprite(195,179,30,30);
target.shapeColor = "purple";
target.setAnimation("sticker_27_1");
target.scale=0.2;

var player  = createSprite(31,360,15,15);
player.shapeColor="dark grey";
player.setAnimation("sticker_34_1");
player.scale=0.125;

var line1=createSprite(30,330,580,10);
line1.shapeColor="white";


var borderdown=createSprite(217,400,600,20);
borderdown.shapeColor="white";


var borderleft=createSprite(4,196,10,400);
borderleft.shapeColor="white";


var borderight=createSprite(395,190,8,409);
borderight.shapeColor="white";

var bordertop=createSprite(190,2,410,15);
bordertop.shapeColor="white";


var line1=createSprite(30,330,580,10);
line1.shapeColor="white";

var line2=createSprite(316,208,10,250);
line2.shapeColor="white";

var line3=createSprite(200,88,230,10);
line3.shapeColor="white";

var line4=createSprite(85,173,10,180);
line4.shapeColor="white";

var line5=createSprite(163,265,165,10);
line5.shapeColor="white";

var line6=createSprite(244,205,10,130);
line6.shapeColor="white";

var line7= createSprite(199,140,100,10);
line7.shapeColor="white";

var line8 = createSprite(150,175,10,80);
line8.shapeColor="white";

var line9= createSprite(178,215,65,10);
line9.shapeColor="white";

var enemy1 = createSprite(140,360,10,10);
enemy1.shapeColor="pink";
enemy1.velocityY=5;

var enemy2=createSprite(289,369,10,10);
enemy2.shapeColor="pink";
enemy2.velocityY=5;

var enemy3=createSprite(353,293,10,10);
enemy3.shapeColor="pink";
enemy3.velocityX=5;

var enemy4 = createSprite(352,200,10,10);
enemy4.shapeColor="pink";
enemy4.velocityX=5;

var enemy5 = createSprite(350,92,10,10);
enemy5.shapeColor="pink";
enemy5.velocityX=5;

var enemy6 = createSprite(268,60,10,10);
enemy6.shapeColor="pink";
enemy6.velocityY=5;

var enemy7= createSprite(177,41,10,10);
enemy7.shapeColor="pink";
enemy7.velocityY=5;

var enemy8= createSprite(85,40,10,10);
enemy8.shapeColor="pink";
enemy8.velocityY=5;

var enemy9=createSprite(35,135,10,10);
enemy9.shapeColor="pink";
enemy9.velocityX=5;


var enemy10=createSprite(35,245,10,10);
enemy10.shapeColor="pink";
enemy10.velocityX=5;

var enemy11=createSprite(115,290,10,10);
enemy11.shapeColor="pink";
enemy11.velocityY=5;

var enemy12=createSprite(220,300,10,10);
enemy12.shapeColor="pink";
enemy12.velocityY=5;

var enemy13=createSprite(275,195,10,10);
enemy13.shapeColor="pink";
enemy13.velocityX=5;

var enemy14=createSprite(196,113,10,10);
enemy14.shapeColor="pink";
enemy14.velocityY=5;

var enemy15=createSprite(112,174,10,10);
enemy15.shapeColor="pink";
enemy15.velocityX=10;


var enemy16=createSprite(180,240,10,10);
enemy16.shapeColor="pink";
enemy16.velocityY=9;




var death=0;








function draw() {
  background("black");


  
  
enemy1.bounceOff(line1);
enemy1.bounceOff(borderdown);
enemy2.bounceOff(line1);
enemy2.bounceOff(borderdown);
enemy3.bounceOff(line2);
enemy3.bounceOff(borderight);
enemy4.bounceOff(line2);
enemy4.bounceOff(borderight);
enemy5.bounceOff(line2);
enemy5.bounceOff(borderight);
enemy6.bounceOff(line3);
enemy6.bounceOff(bordertop);
enemy7.bounceOff(line3);
enemy7.bounceOff(bordertop);
enemy8.bounceOff(line3);
enemy8.bounceOff(bordertop);
enemy9.bounceOff(line4);
enemy9.bounceOff(borderleft);
enemy10.bounceOff(line4);
enemy10.bounceOff(borderleft);
enemy11.bounceOff(line1);
enemy11.bounceOff(line5);
enemy12.bounceOff(line1);  
enemy12.bounceOff(line5);
enemy13.bounceOff(line2);
enemy13.bounceOff(line6);
enemy14.bounceOff(line3);
enemy14.bounceOff(line7);
enemy15.bounceOff(line4);
enemy15.bounceOff(line8);
enemy16.bounceOff(line5);
enemy16.bounceOff(line9);
  
  
  

if (keyDown("left")) {
 player.x=player.x-3;
 
}

if (keyDown("right")) {
  player.x=player.x+3;
 
  
}

if (keyDown("up")) {
  player.y=player.y-3;
  
}

if (keyDown("DOWN")) {
}

  
if (player.isTouching(target)) {
  textSize(45);
  text("You Won" ,196,46);
}
stroke("white");
textSize(20);
text("DEATH:"+death,218,118);

if (player.isTouching(enemy1)||player.isTouching(enemy2)||player.isTouching(enemy3)||player.isTouching(enemy4)||player.isTouching(enemy5)||player.isTouching(enemy6)||player.isTouching(enemy7)||player.isTouching(enemy8)||player.isTouching(enemy9)||player.isTouching(enemy10)) {
  player.x=40;
  player.y=360;
  death=death+1;
}
  
  
  drawSprites();
}

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
