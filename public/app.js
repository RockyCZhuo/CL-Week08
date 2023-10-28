//open and connect socket
let socket = io();
let r,g,b;
socket.on("connect", ()=> {
    console.log("Connected");
    
  }) 

  function setup(){
    createCanvas(400,400);
    background("#ff");
    r = random(0,255);
    g = random(0,255);
    b = random(0,255);
    let mousePos = {
      x: mouseX,
      y: mouseY,
      colorR: r,
      colorG: g,
      colorB: b,
      id: socket.id
  }


    socket.on("mouseDataServer", (data)=> {
    
        drawPos(data);
      })
  }

  function mouseMoved(){
    mousePos = {
        x: mouseX,
        y: mouseY,
        colorR: r,
        colorG: g,
        colorB: b,
        id: socket.id
    }

    //send data to server
    socket.emit("mouseData",mousePos);
  }


  function drawPos(data) {
    let c = color(data.colorR,data.colorG,data.colorB);
    fill(c);
    ellipse(data.x, data.y, 10,10);
    console.log(data.id);
  }