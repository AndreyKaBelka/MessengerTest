let express = require("express");
let utils = require("../utils");
let router = express.Router();

router.get('/:subId', function (req, res) {
  let subId = req.params.subId;
  let response = {
    type: "notification_subscription",
    id: subId,
    created_at: new Date().getTime(),
    updated_at: new Date().getTime(),
    service_type: "web",
    topics: ["conversation", "company"],
    url: "https://example.org/hooks",
    active: true,
    hub_secret: null
  }
  res.send(response);
}).post("", function (req, res) {
  let body = req.body;
  let response = {
    type: "notification_subscription",
    id: utils.getRandomId(),
    created_at: new Date().getTime(),
    updated_at: new Date().getTime(),
    service_type: body.service_type,
    topics: body.topics,
    url: body.url,
    active: true,
    hub_secret: null
  };
  res.send(response);
}).post("/:subId", function (req, res) {
  let subId = req.params.subId;
  let body = req.body;
  let response = {
    type: "notification_subscription",
    id: subId,
    created_at: new Date().getTime(),
    updated_at: new Date().getTime(),
    service_type: "web",
    topics: body.topics,
    url: body.url,
    active: true,
    hub_secret: null
  }
  res.send(response);
}).delete("/:subId", function (req, res) {
  return res.sendStatus(200);
})

module.exports = router;