export const SECTORAL_ANALYSIS = {
  "title": "Sectoral and Business Analysis",
  "description": "State of the sector company is in",
  "type": "object",
  "required": [
    "sectorName"
  ],
  "properties": {
    "sectorName": {
      "type": "string",
      "title": "What is the sector of the company?",
    },
    "sectorState": {
      "type": "string",
      "title": "Describe the sector and what is the state of the sector"
    },
    "industryGrowth": {
      "type": "string",
      "title": "What is the state of growth of industry?",
      "enum": [
        "Over Cooked",
        "Cooked",
        "Under Cooked"
      ]
    },
    "marketCap": {
      "type": "string",
      "title": "What is the market cap of the stock?",
      "enum": [
        "Small Cap",
        "Mid Cap",
        "Large Cap"
      ]
    },
    "marketCapIndex": {
      "type": "string",
      "title": "What is the state of the market cap index?",
    }
  }
};

export const SECTORAL_ANALYSIS_UI = {
  "sectorName": {
    "ui:autofocus": true,
    "ui:emptyValue": "",
    "ui:placeholder": "Name of the sector",
    "ui:enableMarkdownInDescription": true,
  },
  "sectorState": {
    "ui:widget": "textarea",
    "ui:placeholder": "What is the condition of the sector",
    "ui:enableMarkdownInDescription": true,
    "ui:description": "https://www.investindia.gov.in/sectors"
  },
  "industryGrowth": {
    "ui:placeholder": "Select...",
    "ui:enumNames": [
      "Over Cooked",
      "Cooked",
      "Under Cooked"
    ]
  },
  "marketCap": {
    "ui:placeholder": "Select...",
    "ui:enumNames": [
      "Small Cap",
      "Mid Cap",
      "Large Cap"
    ]
  },
  "marketCapIndex": {
    "ui:widget": "textarea",
    "ui:placeholder": "Check nifty small cap/ nifty mid cap indices add some support and resistances and see what's up",
  }
};