let express = require('express');
let router = express.Router();

router.get("/:comId", function (req, res) {
  let company = {
    type: "company",
    id: req.params.comId,
    name: "Blue Sun",
    plan: "plan1",
    company_id: req.params.comId,
    remote_created_at: new Date().getTime(),
    created_at: new Date().getTime(),
    updated_at: new Date().getTime(),
    size: Math.floor(Math.random() * 1000),
    website: "http://www.example.com",
    industry: "Manufacturing",
    monthly_spend: 49,
    session_count: 26,
    user_count: 10,
    custom_attributes: {
      paid_subscriber: true,
      team_mates: 0
    }
  }
  res.send(company);
});

module.exports = router;