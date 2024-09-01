export const BROADER_MARKET = {
    "title": "Broader market analysis",
    "description": "Stock to be bought",
    "type": "object",
    "required": [
        "stateOfIndex",
        "phaseOfEconomy",
        "marketMoodIndex"
    ],
    "properties": {
        "stateOfIndex": {
            "type": "string",
            "title": "What is the state of index(Nifty/BSE)?",
        },
        "phaseOfEconomy": {
            "type": "string",
            "title": "What is the phase of economy?",
            "enum": [
                "Quantitative Easing",
                "Quantative Tightening"
            ],
        },
        "marketMoodIndex": {
            "type": "string"
        }
    }
};

export const BROADER_MARKET_UI = {
    "stateOfIndex": {
        "ui:autofocus": true,
        "ui:emptyValue": "",
        "ui:placeholder": "Name of the stock",
        "ui:enableMarkdownInDescription": true,
    },
    "marketMoodIndex": {
        "ui:title": "What is the Market Mood index?",
        "ui:enableMarkdownInDescription": true,
        "ui:description": "https://www.tickertape.in/market-mood-index"
    },
    "phaseOfEconomy":{
        "ui:placeholder": "Select...",
        "ui:enumNames": [
                "Quantitative Easing",
                "Quantative Tightening"
            ]
    }
};