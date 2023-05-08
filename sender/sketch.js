// Sender
// By Chih-Yung Chang
// Github: https://github.com/ChihYungChang

let client;

function setup() {
  client = mqtt.connect("wss://test.mosquitto.org:8081");
  console.log("connecting......");
  client.on("connect", () => {
    console.log("connected.");
    client.publish("mee", "hello1");
  });

  createCanvas(600, 600);
  let b = createButton("sned");
  b.mousePressed(() => {
    client.publish("mee", "hello1");
  });
}

function draw() {
  background(0);
}
