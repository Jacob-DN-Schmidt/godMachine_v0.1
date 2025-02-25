let narratorf;
let dogf;
let manf;
let wispf;
let surgf;
let pizzaf;
let cleof;
let koif;

let cbg;
let cimage;
let imageHeightRez;
let imageWidthRez;
let bear;
let chain;
let cleopatra;
let doctor;
let doctor2;
let dog;
let bgaend;
let bgbend;
let bgcend;
let fetus;
let fish;
let girl;
let meal;
let m1;
let m2;
let ocean;
let oldman;
let pizza;
let sea;

let babys;
let bangs;
let birds;
let breathes;
let chains;
let chairs;
let growls;
let heartbeats;
let heartmonitors;
let pizzas;
let screams;
let whispers;
let winds;

let op;

let a;
let a1;
let a2;
let a11;
let a12;
let a21;
let a22;

let b;
let b1;
let b2;
let b11;
let b12;
let b21;
let b22;

let end;
let enda;
let endb;
let endc;

let texts = "";
let currentTexts;
let index = 1;
let subt = "WARNING:\nThis text-adventure contains grotesque images and grotesque scenarios\ndepicted in a crude manner that some may find disturbing or offensive.\nIf you are uncomfortable with this type of media and find it upsetting,\nit is advised you click off now.\n\nThis game features three endings\nbased on the decisions you make throughout the story.\nThere are no wrong choices, so choose based on your heart’s desire.\nWhile there are only 3 endings,\nthere are multiple paths you can take during the story.\n\nAre you sure you want to continue?\n1. Yes  2. No";
let task = false;
let done = false;
let startTime;
let currentLine = 0;
let choice = true;
let storyTime = false;
let debounce;
let cname = "";
let c1 = "";
let c2 = "";
let pLean = 0;

function preload() {
  narratorf = loadFont("fonts/Nunito-VariableFont_wght.ttf");
  dogf = loadFont("fonts/SpaceMono-Regular.ttf");
  manf = loadFont("fonts/Pangolin-Regular.ttf");
  wispf = loadFont("fonts/EduSABeginner-VariableFont_wght.ttf");
  surgf = loadFont("fonts/CrimsonText-Regular.ttf");
  pizzaf = loadFont("fonts/Mynerve-Regular.ttf");
  cleof = loadFont("fonts/SedgwickAveDisplay-Regular.ttf");
  koif = loadFont("fonts/PatrickHandSC-Regular.ttf");
  
  cbg = 'black';
  bear = loadImage("pics/Bear.png");
  chain = loadImage("pics/Chain.png");
  cleopatra = loadImage("pics/Cleopatra.png");
  doctor = loadImage("pics/Doctor.png");
  doctor2 = loadImage("pics/Doctor2.png");
  dog = loadImage("pics/Dog.png");
  bgaend = loadImage("pics/Ending_A.png");
  bgbend = loadImage("pics/Ending_B.png");
  bgcend = loadImage("pics/Ending_C.png");
  fetus = loadImage("pics/Fetus.png");
  fish = loadImage("pics/Fish.png");
  girl = loadImage("pics/Girl.png");
  meal = loadImage("pics/Meal.png");
  m1 = loadImage("pics/Mirror1.png");
  m2 = loadImage("pics/Mirror2.png");
  ocean = loadImage("pics/Ocean.png");
  oldman = loadImage("pics/Oldman.png");
  pizza = loadImage("pics/Pizza.png");
  sea = loadImage("pics/Sea.png");
  
  babys = loadSound("sounds/baby.mp3");
  bangs = loadSound("sounds/bang.wav");
  birds = loadSound("sounds/bird.wav");
  breathes = loadSound("sounds/breathe.wav");
  chains = loadSound("sounds/chain.wav");
  chairs = loadSound("sounds/chair.wav");
  growls = loadSound("sounds/growl.wav");
  heartbeats = loadSound("sounds/heartbeat.wav");
  heartmonitors = loadSound("sounds/heartmonitor.wav");
  pizzas = loadSound("sounds/pizza.mp3");
  screams = loadSound("sounds/scream.mp3");
  whispers = loadSound("sounds/whisper.wav");
  winds = loadSound("sounds/wind.mp3");
  
  op = loadStrings("resource/op.txt");
  
  a = loadStrings("resource/a.txt");
  a1 = loadStrings("resource/a1.txt");
  a2 = loadStrings("resource/a2.txt");
  a11 = loadStrings("resource/a11.txt");
  a12 = loadStrings("resource/a12.txt");
  a21 = loadStrings("resource/a21.txt");
  a22 = loadStrings("resource/a22.txt");
  
  b = loadStrings("resource/b.txt");
  b1 = loadStrings("resource/b1.txt");
  b2 = loadStrings("resource/b2.txt");
  b11 = loadStrings("resource/b11.txt");
  b12 = loadStrings("resource/b12.txt");
  b21 = loadStrings("resource/b21.txt");
  b22 = loadStrings("resource/b22.txt");
  
  end = loadStrings("resource/end.txt");
  enda = loadStrings("resource/enda.txt");
  endb = loadStrings("resource/endb.txt");
  endc = loadStrings("resource/endc.txt");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill('white');
  textSize(24);
  imageHeightRez = height-(height/4);
  imageWidthRez = imageHeightRez*(683/512);
  console.log(imageHeightRez);
  console.log(imageWidthRez);
}

function draw() {
  background(cbg);
  if(cimage != null){
    cimage.resize(imageWidthRez,imageHeightRez);
    image(cimage,(width/2)-(imageWidthRez/2),0);
  }
  if(!storyTime){
    textAlign(CENTER,CENTER);
    text(subt,width/2,height/2);
  }
  if(storyTime){
    textAlign(LEFT,TOP);
    text(cname,50,imageHeightRez+25);
    textAlign(CENTER,TOP);
    text(subt,50,imageHeightRez+75, width-100, height);
    if(!done && task){
      texts = currentTexts[currentLine];
      subt = texts.substring(0, index);
      index++;
      done = true;
      startTime = millis();
    }
    else if(done && millis() - startTime > 25){
      done = false;
    }
    if(index > texts.length){
      task = false;
      currentLine++;
      index = 0;
    }
    if(choice){
      textAlign(CENTER,TOP)
      text(c1,width/2,imageHeightRez+100);
      text(c2,width/2,imageHeightRez+125);
    }
  }
}

function keyPressed(){
  if(keyCode === 49 && !storyTime && choice){
    storyTime = true;
    choice = false;
    task = true;
    currentLine = 0;
    currentTexts = op;
    debounce = millis();
  }
  pressStartup();
  if (keyCode === 32 && currentLine < currentTexts.length && !choice && !task){
    task = true;
    debounce = millis();
  }
  else if (keyCode === 32 && task && millis() - debounce >= 100){
    index = texts.length;
  }
  if(keyCode === 49 && choice && storyTime){
    if(currentTexts === end){
      pLean-=2;
    }
    else{
      pLean--;
    }
    currentTexts = textHelper(currentTexts[currentLine]);
    currentLine = 0;
    choice = false;
    pressStartup();
    console.log(pLean);
  }
  if(keyCode === 50 && choice && storyTime){
    if(currentTexts === end){
      pLean+=2;
    }
    else{
      pLean++;
    }
    currentTexts = textHelper(currentTexts[currentLine+1]);
    currentLine = 0;
    choice = false;
    pressStartup();
    console.log(pLean);
  }
}

function soundHelper(sfile){
 babys;
 bangs;
 birds;
 breathes;
 chains;
 chairs;
 growls;
 heartbeats;
 heartmonitors;
 pizzas;
 screams;
 whispers;
 winds;
}

function pictureHelper(pfile){
  if(pfile === "bear"){return bear;}
  if(pfile === "chain"){return chain;}
  if(pfile === "Cleopatra"){return cleopatra;}
  if(pfile === "Eccentric Surgeon1"){return doctor;}
  if(pfile === "Eccentric Surgeon2"){return doctor2;}
  if(pfile === "Omniscient Dog?"||pfile === "Deus E. Machina"){return dog;}
  if(pfile === "bgaend"){return bgaend;}
  if(pfile === "bgbend"){return bgbend;}
  if(pfile === "bgcend"){return bgcend;}
  if(pfile === "fetus"){return fetus;}
  if(pfile === "Koi Fish Carcass"){return fish;}
  if(pfile === "girl"){return girl;}
  if(pfile === "meal"){return meal;}
  if(pfile === "m1"){return m1;}
  if(pfile === "m2"){return m2;}
  if(pfile === "ocean"){return ocean;}
  if(pfile === "Fleshy Old Man"){return oldman;}
  if(pfile === "Pizza Puppeteer"){return pizza;}
  if(pfile === "sea"){return sea;}
  if(pfile === "clear"){clear(); subt = "";}
}

function fontHelper(ffile){
  cname = ffile;
  if(ffile === "Narrator"){return narratorf;}
  if(ffile === "Omniscient Dog?"||ffile === "Deus E. Machina"){return dogf;}
  if(ffile === "Fleshy Old Man"){return manf;}
  if(ffile === "Will o’ Wisp"){return wispf;} 
  if(ffile === "Eccentric Surgeon"){return surgf;}
  if(ffile === "Pizza Puppeteer"){return pizzaf;}
  if(ffile === "Cleopatra"){return cleof;}
  if(ffile === "Koi Fish Carcass"){return koif;} 
}

function textHelper(tfile){
  console.log(tfile);
  if(tfile === "a"){return a;}
  if(tfile === "a1"){return a1;}
  if(tfile === "a2"){return a2;}
  if(tfile === "a11"){return a11;}
  if(tfile === "a12"){return a12;}
  if(tfile === "a21"){return a21;}
  if(tfile === "a22"){return a22;}
  
  if(tfile === "b"){return b;}
  if(tfile === "b1"){return b1;}
  if(tfile === "b2"){return b2;}
  if(tfile === "b11"){return b11;}
  if(tfile === "b12"){return b12;}
  if(tfile === "b21"){return b21;}
  if(tfile === "b22"){return b22;}
  
  if(tfile === "end"){return end;}
  if(tfile === "endh"){return endHelper();}
}

function endHelper(){
  if(pLean < 0){return enda;}
  if(pLean === 0){return endb;}
  if(pLean > 0){return endc;}
}

function pressStartup(){
  while(currentTexts[currentLine].substring(0,1) === "/"){
    if(currentTexts[currentLine] === "/p"){
      cimage = pictureHelper(currentTexts[currentLine+1])
      currentLine+=2;
    }
    if(currentTexts[currentLine] === "/s"){
      currentLine+=2;
    }
    if(currentTexts[currentLine] === "/f"){
      textFont(fontHelper(currentTexts[currentLine+1]));
      currentLine+=2;
    }
    if(currentTexts[currentLine] === "/c"){
      choice = true;
      textFont(narratorf);
      c1 = currentTexts[currentLine+1];
      c2 = currentTexts[currentLine+2];
      cname = "";
      subt = "What will you do?";
      currentLine+=3;
    }
    if(currentTexts[currentLine] === "/end"){
      storyTime = false;
    }
  }
}
