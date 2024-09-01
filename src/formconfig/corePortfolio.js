export const CORE_PORTFOLIO = {
  "title": "Core Portfolio",
  "description": "This is a long term wealth builder stock",
  "type": "object",
  "required": [
    "bussinessUnderstanding"
  ],
  "properties": {
    "bussinessUnderstanding": {
      "type": "string",
      "title": "Do you understand the business of the company?",
      "enum": [
        "Yes",
        "No",
        "Maybe"
      ]
    },
    "isDetFree": {
      "type": "string",
      "title": "Is it debt free / debt to equity < 10?",
      "enum": [
        "Yes",
        "No"
      ]
    },
    "cagr": {
      "type": "string",
      "title": "How much is the CAGR?",
    },
    "salesGrowth": {
      "type": "string",
      "title": "What is the sales growth?",
      "description":"at least 10%"
    },
    "porterFive": {
      "type": "string",
      "title": "Explain how the porter 5 forces apply?",
      "description": "The five forces are competition, the threat of new entrants to the industry, supplier bargaining power, customer bargaining power, and the ability of customers to find substitutes for the sector's products."
    },
    "roce": {
      "type": "string",
      "title": "How much is the ROC/ROCE?"
    },
    "elasticDemand": {
      "type": "number",
      "title": "On scale of 1 to 5 1 being most elastic, How elastic/Is the demand elastic/in elastic is the demand",
      "description":"if the price of diabetes medicine is increases the demand doesn't come down (In-elastic) however if the price of pizza is increased the demand comes down(elastic)"
    },
    "companyBussiness": {
      "type": "string",
      "title": "Describe the business of the company? what is the total addressable market(TAM)?",
      "description": "egs; Zomato \n food delivery ---> Number of people using zomato x average price of per order \n Hotel Ranking in app ---> all hotels registered in the app so good customer base"
    },
    "isBrandBuilding": {
      "type": "string",
      "title": "Is it a cost cutting business or brand building business",
      "enum": [
        "Brand Building",
        "Cost cutting"
      ]
    },
    "isDirectToConsumer": {
      "type": "string",
      "title": "Is it direct to consumer business?",
      "enum": [
        "Yes",
        "No"
      ]
    },
    "isBlueOcean": {
      "type": "string",
      "title": "Is it a blue ocean business (Has it found new business idea to expand)?",
      "enum": [
        "Yes",
        "No"
      ]
    },
    "longTermAdvantage": {
      "type": "string",
      "title": "Does the company have any favorable long term advantage",
      "enum": [
        "Yes",
        "No"
      ]
    },
    "isFairPrice": {
      "type": "string",
      "title": "Is the stock available at a fair/ discounted price",
      "enum": [
        "Yes",
        "No"
      ]
    },
    "isCapitalIntensive": {
      "type": "string",
      "title": "Is the business capital intensive?",
      "enum": [
        "Yes",
        "No"
      ]
    },
    "valueChain": {
      "type": "number",
      "title": "Where does the business operate on value chain?",
      "description":"On scale of 1 to 5, 1 being Raw material (steel) and 5 being finished products(cars)"
    },
    "monopoly": {
      "type": "number",
      "title": "Where does the company stand on this scale",
      "description":"On scale of 1 to 10, 1 being most competitive market and 10 being monopoly"
    },
    "holdTime": {
      "type": "string",
      "title": "How many years will you hold this stock?",
    },
    "isBuyOnDips": {
      "type": "string",
      "title": "Are you confident to buy on dips?",
      "enum": [
        "Yes",
        "No"
      ]
    },
  }
};

export const CORE_PORTFOLIO_UI = {
  "bussinessUnderstanding": {
    "ui:placeholder": "Select...",
    "ui:enumNames": [
      "Yes",
      "No",
      "Maybe"
    ]
  },
  "isDetFree": {
    "ui:placeholder": "Select...",
    "ui:enumNames": [
      "Yes",
      "No"
    ]
  },
  "cagr": {
    "ui:placeholder": "How much is the CAGR?",
    "ui:enableMarkdownInDescription": true,
  },
  "salesGrowth": {
    "ui:placeholder": "10% atleast",
  },
  "porterFive": {
    "ui:widget": "textarea",
    "ui:placeholder": "Answer yes/no for each of porter forces",
  },
  "roce": {
    "ui:placeholder": "More than 15% would be good"
  },
  "elasticDemand": {
    "ui:placeholder": "5 is best"
  },
  "valueChain": {
    "ui:placeholder": "5 is best"
  },
  "monopoly":{
    "ui:placeholder": "5 is best"
  },
  "companyBussiness": {
    "ui:placeholder": "TAM"
  },
  "isBrandBuilding": {
    "ui:placeholder": "Select...",
    "ui:enumNames": [
      "Brand Building",
      "Cost cutting"
    ]
  },
  "isDirectToConsumer": {
    "ui:placeholder": "Select...",
    "ui:enumNames": [
      "Yes",
      "No"
    ]
  },
  "isFairPrice": {
    "ui:placeholder": "Select...",
    "ui:enumNames": [
      "Yes",
      "No"
    ]
  },
  "longTermAdvantage": {
    "ui:placeholder": "Select...",
    "ui:enumNames": [
      "Yes",
      "No"
    ]
  },
  "isCapitalIntensive": {
    "ui:placeholder": "Select...",
    "ui:enumNames": [
      "Yes",
      "No"
    ]
  },
  "isBlueOcean": {
    "ui:placeholder": "Select...",
    "ui:enumNames": [
      "Yes",
      "No"
    ]
  },
  "holdTime":{
    "ui:placeholder": "Years and why"
  },
  "isBuyOnDips": {
    "ui:placeholder": "Select...",
    "ui:enumNames": [
      "Yes",
      "No"
    ]
  },
};
