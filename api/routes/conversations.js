let express = require('express')
let router = express.Router()
let utils = require("../utils")

function getConversation(chatId) {
  return {
    "assignee": {
      "id": "814860",
      "type": "admin"
    },
    "conversation_message": {
      "attachments": [],
      "author": {
        "id": "5bc8f7421ae2d96695c18a",
        "type": "lead"
      },
      "body": "<p>Hi</p>",
      "delivered_as": "customer_initiated",
      "id": "269650473",
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
            "id": "815309",
            "type": "bot"
          },
          "body": "<p>Test_App typically replies in a few hours.</p>",
          "created_at": 1539897200,
          "external_id": null,
          "id": "2202737122",
          "notified_at": 1539897200,
          "part_type": "comment",
          "type": "conversation_part",
          "updated_at": 1539897200
        },
      ],
      "total_count": 25,
      "type": "conversation_part.list"
    },
    "conversation_rating": {
      "created_at": null,
      "customer": {
        "id": null,
        "type": null
      },
      "rating": null,
      "remark": null,
      "teammate": {
        "id": null,
        "type": null
      }
    },
    "created_at": 1539897198,
    "customer_first_reply": {
      "created_at": 1539897198,
      "type": "conversation",
      "url": "https://intercom-survey-app.glitch.me/"
    },
    "customers": [
      {
        "id": "5bc8f7ae2d96695c18a",
        "type": "lead"
      }
    ],
    "id": chatId,
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
      "id": "5bc8f7421ffae2d96695c18a",
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
  console.log(JSON.stringify(chatObject));
  res.send(JSON.stringify(chatObject));
});

module.exports = router