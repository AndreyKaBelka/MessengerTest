let express = require("express");
let router = express.Router();
let utils = require('../utils')

router.get("/:userId", function (req, res) {
  let userId = req.params.userId;
  let response;
  if (userId >= utils.getNamesCount()) {
    response = utils.error({
      code: "not_found",
      message: "User Not Found"
    });
  } else {
    response = {
      type: "user",
      id: userId,
      user_id: userId,
      anonymous: false,
      email: utils.getTestEmail(),
      name: utils.getNameById(userId),
      pseudonym: utils.getPseudonym(),
      avatar: {
        type: "avatar",
      },
      app_id: utils.getRandomAppId(),
      companies: {
        type: "company.list",
        companies: []
      },
      location_data: {},
      created_at: new Date().getTime(),
      updated_at: new Date().getTime(),
      session_count: 0,
      social_profiles: {
        type: "social_profile.list",
        social_profiles: []
      },
      unsubscribed_from_emails: false,
      marked_email_as_spam: false,
      has_hard_bounced: false,
      tags: {
        type: "tag.list",
        tags: []
      },
      segments: {
        "type": "segment.list",
        segments: []
      },
      custom_attributes: {},
    }
  }
  return res.send(response);
});

module.exports = router;