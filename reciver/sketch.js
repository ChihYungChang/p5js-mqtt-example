// Recipient
// By Chih-Yung Chang
// Github: https://github.com/ChihYungChang

let client;

function setup() {
  client = mqtt.connect("wss://test.mosquitto.org:8081");
  console.log("connecting......");
  client.on("connect", () => {
    console.log("connected.");
    client.subscribe("mee");
    client.on("message", function (topic, payload) {
      console.log(payload);
      console.log([topic, payload].join(": "));
    });
  });
}

function draw() {}
