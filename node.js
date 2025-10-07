module.exports = function (RED) {
  function LowerCaseNode(config) {
    RED.nodes.createNode(this, config);
    var node = this;
    node.on("input", function (msg) {
      // msg.payload = msg.payload.toLowerCase();
      msg.payload = "mouheb";
      node.send(msg);
    });
  }
  RED.nodes.registerType("mouheb", LowerCaseNode);
};
