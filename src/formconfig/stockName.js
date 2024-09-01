export const STOCK_NAME = {
  "title": "Initial Form",
  "description": "Stock to be bought",
  "type": "object",
  "required": [
    "stockName"
  ],
  "properties": {
    "stockName": {
      "type": "string",
      "title": "What is the stock name?",
    }
  }
};

export const STOCK_NAME_UI = {
  "stockName": {
    "ui:autofocus": true,
    "ui:emptyValue": "",
    "ui:placeholder": "Name of the stock",
    "ui:enableMarkdownInDescription": true,
  }
};

export const FINAL_PAGE = "6";