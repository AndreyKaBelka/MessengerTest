let express = require('express');
let router = express.Router();
let utils = require('../utils');

/* GET home page. */
router.get("/admins/:adminId", function (req, res) {
  const adminId = req.params.adminId;
  const response = {
    type: "admin",
    id: adminId.toString(),
    name: utils.getNameById(adminId),
    email: utils.getTestEmail(),
    away_mode_enabled: false,
    away_mode_reassign: false,
    has_inbox_seat: true,
    team_ids: []
  }
  res.send(response);
}).get("/me", function (req, res) {
  let response = {
    type: "admin",
    id: "1",
    email: utils.getTestEmail(),
    name: utils.getNameById(1),
    email_verified: true,
    app: {
      type: "app",
      id_code: utils.getRandomAppId(),
      name: utils.getAppName(),
      created_at: new Date().getTime(),
      secure: false,
      identity_verification: false,
      timezone: "Asia/Omsk"
    },
    avatar: {
      type: "avatar",
      image_url: "https://static.intercomassets.com/assets/default-avatars/admins/128-da5b0f4e5162b0f45cba5a162df89b82eaddb92c5f5ae86e18629c8656aa3365.png"
    },
    has_inbox_seat: true
  };
  res.send(response);
});

module.exports = router;
