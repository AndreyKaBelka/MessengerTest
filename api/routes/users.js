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
      phone: null,
      name: utils.getNameById(userId),
      pseudonym: null,
      avatar: {
        type: "avatar",
        image_url: null
      },
      app_id: utils.getRandomAppId(),
      companies: {
        type: "company.list",
        companies: []
      },
      location_data: {},
      last_request_at: null,
      created_at: new Date().getTime(),
      remote_created_at: null,
      signed_up_at: null,
      updated_at: new Date().getTime(),
      session_count: 0,
      social_profiles: {
        type: "social_profile.list",
        social_profiles: []
      },
      owner_id: null,
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
      referrer: null,
      utm_campaign: null,
      utm_content: null,
      utm_medium: null,
      utm_source: null,
      utm_term: null,
      do_not_track: null
    }
  }
  return res.send(response);
});

module.exports = router;