// Configure the S3 bucket and key prefix for stored raw emails, and the
// mapping of email addresses to forward from and to.
//
// Expected keys/values:
//
// - fromEmail: Forwarded emails will come from this verified address
//
// - subjectPrefix: Forwarded emails subject will contain this prefix
//
// - emailBucket: S3 bucket name where SES stores emails.
//
// - emailKeyPrefix: S3 key name prefix where SES stores email. Include the
//   trailing slash.
//
// - forwardMapping: Object where the key is the lowercase email address from
//   which to forward and the value is an array of email addresses to which to
//   send the message.
//
//   To match all email addresses on a domain, use a key without the name part
//   of an email address before the "at" symbol (i.e. `@example.com`).
//
//   To match a mailbox name on all domains, use a key without the "at" symbol
//   and domain part of an email address (i.e. `info`).

var config = {};

// - fromEmail: Forwarded emails will come from this verified address
config.fromEmail = "noreply@example.com";
// - subjectPrefix: Forwarded emails subject will contain this prefix
config.subjectPrefix = "";
// - emailBucket: S3 bucket name where SES stores emails.
config.emailBucket = "s3-bucket-name";
// - emailKeyPrefix: S3 key name prefix where SES stores email. Include the
//   trailing slash.
//   generally this is a folder inside an s3 bucket
config.emailKeyPrefix = "emailsPrefix/"; 
// - forwardMapping: Object where the key is the lowercase email address from
//   which to forward and the value is an array of email addresses to which to
//   send the message.
config.forwardMapping = {
    "info@example.com": [ //when an email is sent to this address
      "example.john@example.com", //forward that email to these addresses
      "example.jen@example.com"
    ],
    "abuse@example.com": [
      "example.jim@example.com"
    ],
    "@example.com": [
      "example.john@example.com"
    ],
    "info": [
      "info@example.com"
    ]
  }

module.exports = config;