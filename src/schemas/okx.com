{
  "category": "Legal Identity",
  "issuer": "OKX",
  "desc": "An innovative cryptocurrency exchange providing advanced trading options and financial services.",
  "website": "https://www.okx.com/balance/overview",
  "breakWall": true,
  "APIs": [
    {
      "host": "www.okx.com",
      "intercept": {
        "url": "v3/users/security/profile",
        "method": "GET"
      },
      "assert": [
        {
          "key": "data|kycLevel",
          "value": "2",
          "operation": ">="
        },
        {
          "key": "error_code",
          "value": "0",
          "operation": "="
        }
      ],
      "nullifier": "data|uuid"
    }
  ],
  "HRCondition": [
    "You must have completed KYC Level 2"
  ],
  "tips": {
    "message": "When you successfully log in, please click the 'Start' button to initiate the verification process."
  }
}