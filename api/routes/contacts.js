let express = require('express');
let router = express.Router();
let utils = require('../utils')

router.get("/:contactId", function (req, res) {
  let contactId = req.params.contactId;
  let userId = Math.floor(Math.random() * utils.getNamesCount());
  let response = {
    type: "contact",
    id: contactId,
    user_id: userId,
    anonymous: true,
    email: utils.getTestEmail(),
    phone: null,
    name: utils.getNameById(userId),
    pseudonym: utils.getPseudonym(),
    avatar: {
      type: "avatar",
      image_url: "https://static.intercomassets.com/app/pseudonym_avatars_2019/blue-bottle.png"
    },
    app_id: utils.getRandomAppId(),
    companies: {
      type: "company.list",
      companies: []
    },
    location_data: {
      type: "location_data",
      city_name: "Omsk",
      continent_code: "EU",
      country_name: "Russia",
      postal_code: 644000,
      region_name: "Omsk Oblast",
      timezone: "Asia/Omsk",
      country_code: "RUS"
    },
    last_request_at: new Date().getTime(),
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
      type: "segment.list",
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
  res.send(response);
});

module.exports = router;