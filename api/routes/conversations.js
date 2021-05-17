let express = require('express')
let router = express.Router()
let utils = require("../utils")

function getConversation(chatId) {
  return {
    "assignee": {
      "id": utils.getRandomUserId(),
      "type": "admin"
    },
    "conversation_message": {
      "attachments": [],
      "author": {
        "id": utils.getRandomUserId(),
        "type": "lead"
      },
      "body": "<p>Hi</p>",
      "delivered_as": "customer_initiated",
      "id": "1",
      "subject": "",
      "type": "conversation",
      "url": "https://intercom-survey-app.glitch.me/"
    },
    "conversation_parts": {
      "conversation_parts": [
        {
          "assigned_to": null,
          "attachments": [],
          "author": {
            "id": utils.getRandomUserId(),
            "type": "admin"
          },
          "body": "<p>Hi</p>",
          "created_at": 1539897200,
          "external_id": null,
          "id": "2",
          "notified_at": 1539897200,
          "part_type": "comment",
          "type": "conversation_part",
          "updated_at": 1539897200
        },
      ],
      "total_count": 1,
      "type": "conversation_part.list"
    },
    "created_at": 1539897198,
    "customer_first_reply": {
      "created_at": 1539897198,
      "type": "conversation",
    },
    "customers": [
      {
        "id": utils.getRandomUserId(),
        "type": "lead"
      }
    ],
    "id": chatId.toString(),
    "open": true,
    "read": true,
    "sent_at": 1539897198,
    "snoozed_until": null,
    "state": "open",
    "tags": {
      "type": "tag.list",
      "tags": []
    },
    "type": "conversation",
    "updated_at": 1540393270,
    "user": {
      "id": utils.getRandomUserId(),
      "type": "lead"
    },
    "waiting_since": 64654125776
  }
}

router.post("/:chatId/reply", function (req, res) {
  let chatId = parseInt(req.params.chatId);
  let chatObject = getConversation(chatId);
  res.send(chatObject);
}).get("/:chatId", function (req, res) {
  let chatId = parseInt(req.params.chatId);
  let chatObject = getConversation(chatId);
  res.send(chatObject);
});

module.exports = router