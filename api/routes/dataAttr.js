let express = require('express');
let router = express.Router();

function getBodyCompany() {
  return {
    "type": "data_attribute.list",
    "data_attributes": [
      {
        "type": "data_attribute",
        "name": "name",
        "full_name": "name",
        "label": "Company name",
        "description": "The name of a company",
        "data_type": "string",
        "api_writable": true,
        "ui_writable": true,
        "custom": false,
        "archived": false
      },
      {
        "type": "data_attribute",
        "name": "company_id",
        "full_name": "company_id",
        "label": "Company ID",
        "description": "A number identifying a company",
        "data_type": "string",
        "api_writable": false,
        "ui_writable": false,
        "custom": false,
        "archived": false
      },
      {
        "type": "data_attribute",
        "name": "last_request_at",
        "full_name": "last_request_at",
        "label": "Company last seen",
        "description": "The last day anyone from a company visited your site or app",
        "data_type": "date",
        "api_writable": false,
        "ui_writable": false,
        "custom": false,
        "archived": false
      },
      {
        "type": "data_attribute",
        "name": "remote_created_at",
        "full_name": "remote_created_at",
        "label": "Company created at",
        "description": "The day a company was added to Intercom",
        "data_type": "date",
        "api_writable": true,
        "ui_writable": false,
        "custom": false,
        "archived": false
      },
      {
        "type": "data_attribute",
        "name": "user_count",
        "full_name": "user_count",
        "label": "People",
        "description": "The number of people in a company",
        "data_type": "integer",
        "api_writable": false,
        "ui_writable": false,
        "custom": false,
        "archived": false
      },
      {
        "type": "data_attribute",
        "name": "session_count",
        "full_name": "session_count",
        "label": "Company web sessions",
        "description": "All visits from anyone in a company to your product's site or app",
        "data_type": "integer",
        "api_writable": false,
        "ui_writable": false,
        "custom": false,
        "archived": false
      },
      {
        "type": "data_attribute",
        "name": "name",
        "full_name": "plan.name",
        "label": "Plan",
        "description": "A specific plan or level within your product that companies have signed up to",
        "data_type": "string",
        "api_writable": false,
        "ui_writable": false,
        "custom": false,
        "archived": false
      },
      {
        "type": "data_attribute",
        "name": "monthly_spend",
        "full_name": "monthly_spend",
        "label": "Monthly Spend",
        "description": "The monthly revenue you receive from a company",
        "data_type": "float",
        "api_writable": true,
        "ui_writable": false,
        "custom": false,
        "archived": false
      },
      {
        "type": "data_attribute",
        "name": "size",
        "full_name": "size",
        "label": "Company size",
        "description": "The number of people employed in this company, expressed as a single number",
        "data_type": "integer",
        "api_writable": true,
        "ui_writable": true,
        "custom": false,
        "archived": false
      },
      {
        "type": "data_attribute",
        "name": "industry",
        "full_name": "industry",
        "label": "Company industry",
        "description": "The category or domain this company belongs to e.g. 'ecommerce' or 'SaaS'",
        "data_type": "string",
        "api_writable": true,
        "ui_writable": true,
        "custom": false,
        "archived": false
      },
      {
        "type": "data_attribute",
        "name": "website",
        "full_name": "website",
        "label": "Company website",
        "description": "The web address for the company's primary marketing site",
        "data_type": "string",
        "api_writable": true,
        "ui_writable": true,
        "custom": false,
        "archived": false
      },
      {
        "type": "data_attribute",
        "name": "id",
        "full_name": "id",
        "label": "ID",
        "description": "The Intercom defined id representing the company",
        "data_type": "string",
        "api_writable": false,
        "ui_writable": false,
        "custom": false,
        "archived": false
      },
      {
        "type": "data_attribute",
        "name": "created_at",
        "full_name": "created_at",
        "label": "Created at",
        "description": "The time the company was added to Intercom",
        "data_type": "date",
        "api_writable": false,
        "ui_writable": false,
        "custom": false,
        "archived": false
      },
      {
        "type": "data_attribute",
        "name": "updated_at",
        "full_name": "updated_at",
        "label": "Updated at",
        "description": "The last time the company was updated",
        "data_type": "date",
        "api_writable": false,
        "ui_writable": false,
        "custom": false,
        "archived": false
      },
      {
        "type": "data_attribute",
        "name": "id",
        "full_name": "plan.id",
        "label": "Plan ID",
        "description": "The Intercom defined id representing the plan",
        "data_type": "string",
        "api_writable": false,
        "ui_writable": false,
        "custom": false,
        "archived": false
      },
      {
        "type": "data_attribute",
        "name": "app_id",
        "full_name": "app_id",
        "label": "App ID",
        "description": "The Intercom defined id representing the app",
        "data_type": "string",
        "api_writable": false,
        "ui_writable": false,
        "custom": false,
        "archived": false
      }
    ]
  };
}

function getBodyCustomer() {
  return {
    "type": "data_attribute.list",
    "data_attributes": [
      {
        "type": "data_attribute",
        "name": "name",
        "full_name": "name",
        "label": "Name",
        "description": "A person's full name",
        "data_type": "string",
        "api_writable": true,
        "ui_writable": true,
        "custom": false,
        "archived": false
      },
      {
        "type": "data_attribute",
        "name": "owner_id",
        "full_name": "owner_id",
        "label": "Owner",
        "description": "The teammate that owns a lead or user in Intercom",
        "data_type": "integer",
        "api_writable": true,
        "ui_writable": false,
        "custom": false,
        "archived": false
      },
      {
        "type": "data_attribute",
        "name": "email",
        "full_name": "email",
        "label": "Email",
        "description": "The email address assigned to a user or lead",
        "data_type": "string",
        "api_writable": true,
        "ui_writable": true,
        "custom": false,
        "archived": false
      },
      {
        "type": "data_attribute",
        "name": "phone",
        "full_name": "phone",
        "label": "Phone",
        "description": "A person's phone number",
        "data_type": "string",
        "api_writable": true,
        "ui_writable": true,
        "custom": false,
        "archived": false
      },
      {
        "type": "data_attribute",
        "name": "created_at",
        "full_name": "created_at",
        "label": "First Seen",
        "description": "The first day a person visited your site or app",
        "data_type": "date",
        "api_writable": false,
        "ui_writable": false,
        "custom": false,
        "archived": false
      },
      {
        "type": "data_attribute",
        "name": "signed_up_at",
        "full_name": "signed_up_at",
        "label": "Signed up",
        "description": "The day a person first signed up for your product",
        "data_type": "date",
        "api_writable": true,
        "ui_writable": false,
        "custom": false,
        "archived": false
      },
      {
        "type": "data_attribute",
        "name": "unsubscribed_from_emails",
        "full_name": "unsubscribed_from_emails",
        "label": "Unsubscribed from Emails",
        "description": "Has a person unsubscribed from emails from your team?",
        "data_type": "boolean",
        "api_writable": true,
        "ui_writable": false,
        "custom": false,
        "archived": false
      },
      {
        "type": "data_attribute",
        "name": "marked_email_as_spam",
        "full_name": "marked_email_as_spam",
        "label": "Marked email as spam",
        "description": "Has a person marked an email from your team as spam?",
        "data_type": "boolean",
        "api_writable": false,
        "ui_writable": false,
        "custom": false,
        "archived": false
      },
      {
        "type": "data_attribute",
        "name": "has_hard_bounced",
        "full_name": "has_hard_bounced",
        "label": "Has hard bounced",
        "description": "Has an email sent from your team to a person bounced?",
        "data_type": "boolean",
        "api_writable": false,
        "ui_writable": false,
        "custom": false,
        "archived": false
      },
      {
        "type": "data_attribute",
        "name": "id",
        "full_name": "id",
        "label": "ID",
        "description": "The Intercom defined id representing the user",
        "data_type": "string",
        "api_writable": false,
        "ui_writable": false,
        "custom": false,
        "archived": false
      },
      {
        "type": "data_attribute",
        "name": "updated_at",
        "full_name": "updated_at",
        "label": "Updated at",
        "description": "The last time the user was updated",
        "data_type": "date",
        "api_writable": false,
        "ui_writable": false,
        "custom": false,
        "archived": false
      },
      {
        "type": "data_attribute",
        "name": "app_id",
        "full_name": "app_id",
        "label": "App ID",
        "description": "The Intercom defined id representing the app",
        "data_type": "string",
        "api_writable": false,
        "ui_writable": false,
        "custom": false,
        "archived": false
      },
      {
        "type": "data_attribute",
        "name": "user_id",
        "full_name": "user_id",
        "label": "User ID",
        "description": "A number identifying a person (applies to both users and leads)",
        "data_type": "string",
        "api_writable": true,
        "ui_writable": false,
        "custom": false,
        "archived": false
      },
      {
        "type": "data_attribute",
        "name": "image_url",
        "full_name": "avatar.image_url",
        "label": "Avatar image url",
        "description": "An avatar image URL",
        "data_type": "string",
        "api_writable": true,
        "ui_writable": false,
        "custom": false,
        "archived": false
      },
      {
        "type": "data_attribute",
        "name": "last_request_at",
        "full_name": "last_request_at",
        "label": "Last seen",
        "description": "The last day a person visited your site or app",
        "data_type": "date",
        "api_writable": true,
        "ui_writable": false,
        "custom": false,
        "archived": false
      },
      {
        "type": "data_attribute",
        "name": "country_name",
        "full_name": "location_data.country_name",
        "label": "Country",
        "description": "The country a person is in (or their IP address location)",
        "data_type": "string",
        "api_writable": false,
        "ui_writable": false,
        "custom": false,
        "archived": false
      },
      {
        "type": "data_attribute",
        "name": "region_name",
        "full_name": "location_data.region_name",
        "label": "Region",
        "description": "A subdivision of a country, such as a state, province or territory",
        "data_type": "string",
        "api_writable": false,
        "ui_writable": false,
        "custom": false,
        "archived": false
      },
      {
        "type": "data_attribute",
        "name": "city_name",
        "full_name": "location_data.city_name",
        "label": "City",
        "description": "The city a person is in (or their IP address location)",
        "data_type": "string",
        "api_writable": false,
        "ui_writable": false,
        "custom": false,
        "archived": false
      },
      {
        "type": "data_attribute",
        "name": "anonymous",
        "full_name": "anonymous",
        "label": "Anonymous",
        "description": "A user (signed up and logged in) or a lead (not logged in)",
        "data_type": "boolean",
        "api_writable": false,
        "ui_writable": false,
        "custom": false,
        "archived": false
      },
      {
        "type": "data_attribute",
        "name": "pseudonym",
        "full_name": "pseudonym",
        "label": "Pseudonym",
        "description": "The pseudonym used if this user was previously a Lead",
        "data_type": "string",
        "api_writable": false,
        "ui_writable": false,
        "custom": false,
        "archived": false
      },
      {
        "type": "data_attribute",
        "name": "session_count",
        "full_name": "session_count",
        "label": "Web sessions",
        "description": "The number of times a user has visited your site or app",
        "data_type": "integer",
        "api_writable": false,
        "ui_writable": false,
        "custom": false,
        "archived": false
      },
      {
        "type": "data_attribute",
        "name": "referrer",
        "full_name": "referrer",
        "label": "Referral URL",
        "description": "The previous page the person was on",
        "data_type": "string",
        "api_writable": true,
        "ui_writable": false,
        "custom": false,
        "archived": false
      },
      {
        "type": "data_attribute",
        "name": "utm_campaign",
        "full_name": "utm_campaign",
        "label": "UTM Campaign",
        "description": "The product promotion or campaign that directed a person to your app or website",
        "data_type": "string",
        "api_writable": true,
        "ui_writable": false,
        "custom": false,
        "archived": false
      },
      {
        "type": "data_attribute",
        "name": "utm_content",
        "full_name": "utm_content",
        "label": "UTM Content",
        "description": "The product promotion or campaign that directed a person to your app or website",
        "data_type": "string",
        "api_writable": true,
        "ui_writable": false,
        "custom": false,
        "archived": false
      },
      {
        "type": "data_attribute",
        "name": "utm_medium",
        "full_name": "utm_medium",
        "label": "UTM Medium",
        "description": "The product promotion or campaign that directed a person to your app or website",
        "data_type": "string",
        "api_writable": true,
        "ui_writable": false,
        "custom": false,
        "archived": false
      },
      {
        "type": "data_attribute",
        "name": "utm_source",
        "full_name": "utm_source",
        "label": "UTM Source",
        "description": "The product promotion or campaign that directed a person to your app or website",
        "data_type": "string",
        "api_writable": true,
        "ui_writable": false,
        "custom": false,
        "archived": false
      },
      {
        "type": "data_attribute",
        "name": "utm_term",
        "full_name": "utm_term",
        "label": "UTM Term",
        "description": "The product promotion or campaign that directed a person to your app or website",
        "data_type": "string",
        "api_writable": true,
        "ui_writable": false,
        "custom": false,
        "archived": false
      },
      {
        "type": "data_attribute",
        "name": "postal_code",
        "full_name": "location_data.postal_code",
        "label": "Postal code",
        "description": "The postal code of location a person is in (or their IP address location)",
        "data_type": "string",
        "api_writable": false,
        "ui_writable": false,
        "custom": false,
        "archived": false
      },
      {
        "type": "data_attribute",
        "name": "timezone",
        "full_name": "location_data.timezone",
        "label": "Timezone",
        "description": "The timezone a person is in (or their IP address location)",
        "data_type": "string",
        "api_writable": false,
        "ui_writable": false,
        "custom": false,
        "archived": false
      },
      {
        "type": "data_attribute",
        "name": "continent_code",
        "full_name": "location_data.continent_code",
        "label": "Continent code",
        "description": "The continent a person is in (or their IP address location)",
        "data_type": "string",
        "api_writable": false,
        "ui_writable": false,
        "custom": false,
        "archived": false
      },
      {
        "type": "data_attribute",
        "name": "country_code",
        "full_name": "location_data.country_code",
        "label": "Country code",
        "description": "The code of country a person is in (or their IP address location)",
        "data_type": "string",
        "api_writable": false,
        "ui_writable": false,
        "custom": false,
        "archived": false
      }
    ]
  };
}

router.get('/customer', function (req, res) {
  return res.send(getBodyCustomer())
}).get("/company", function (req, res) {
  return res.send(getBodyCompany());
});

module.exports = router;