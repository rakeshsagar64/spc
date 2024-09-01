export const SMALL_CAP = {
    "title": "Small and Midcap Analysis",
    "type": "object",
    "required": [
      "bussinessUnderstanding"
    ],
    "properties": {
      "prodAcceptance": {
        "type": "string",
        "title": "Did the company solve its engineering problem?",
        "description":"Is the product accepted in the market"
    },
      "brandEstd": {
        "type": "string",
        "title": "Has it established brand in industry?",
        "description":"(Check for clients on website)"
      },
      "cashFlow": {
        "type": "string",
        "title": "Is the cash flow looking good?",
        "description": "Is the cash flow from opearating activity and investing activity is net positive?"
      },
      "fixedAssetExpansion": {
        "type": "string",
        "title": "Is Fixed asset expansion happening?"
      },
      "fiiInvested": {
        "type": "string",
        "title": "Check if any FII/DII are invested",
      },
      "promoterSelling": {
        "type": "string",
        "title": "Are promoters selling (BIG RED FLAG)",
        "enum": [
          "Yes",
          "No"
        ]
      },
      "salesGrowth": {
        "type": "string",
        "title": "Sales Growth > 15%",
        "enum": [
          "Yes",
          "No"
        ]
      },
      "debtToEquity": {
        "type": "string",
        "title": "Debt to Equity < 15%",
        "enum": [
          "Yes",
          "No"
        ]
      },
      "returnOnCapital": {
        "type": "string",
        "title": "Return on Capital > 15%",
        "enum": [
          "Yes",
          "No"
        ]
      }
    }
  };
  
  export const SMALL_CAP_UI = {
    "promoterSelling": {
      "ui:placeholder": "Select...",
      "ui:enumNames": [
        "Yes",
        "No"
      ]
    },
    "salesGrowth": {
      "ui:placeholder": "Select...",
      "ui:enumNames": [
        "Yes",
        "No"
      ]
    },
    "debtToEquity": {
      "ui:placeholder": "Select...",
      "ui:enumNames": [
        "Yes",
        "No"
      ]
    },
    "returnOnCapital": {
      "ui:placeholder": "Select...",
      "ui:enumNames": [
        "Yes",
        "No"
      ]
    }
  };
  