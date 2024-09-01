export const SHORT_TERM = {
    "title": "Short Term Question",
    "description": "State of the sector company is in",
    "type": "object",
    "required": [
        "shortTermReasoning"
    ],
    "properties": {
        "shortTermReasoning": {
            "type": "string",
            "title": "Describe the business idea behind the decision?",
        },
        "shortTemSellPrice": {
            "type": "string",
            "title": "Stop loss or loss percentage after which u will sell?"
        },
        "stopLossCheck": {
            "type": "string",
            "title": "Have you set the alert for the above stop loss level?",
            "enum": [
                "Yes",
                "No"
            ]
        },
        "isFairOrDiscounted": {
            "type": "string",
            "title": "Is the stock available at a fair/ discounted price",
            "enum": [
                "Yes",
                "No"
            ]
        },
        "aproxHoldTime": {
            "type": "string",
            "title": "What is the approximate time duration that you are planning to hold the stock?",
        },
        "holdReminder": {
            "type": "string",
            "title": "Have you set a reminder to revisit this stock for hold time",
            "enum": [
                "Yes",
                "No"
            ]
        }
    }
};

export const SHORT_TERM_UI = {
    "shortTermReasoning": {
        "ui:autofocus": true,
        "ui:emptyValue": "",
        "ui:widget": "textarea",
        "ui:placeholder": "What technical indicator or news is this decision based off of? Explain in detail",
        "ui:enableMarkdownInDescription": true,
    },
    "shortTemSellPrice": {
        "ui:placeholder": "Adding support and resistance, moving averages or bolinger band would give rough idea",
    },
    "stopLossCheck": {
        "ui:placeholder": "Select...",
        "ui:enumNames": [
            "Yes",
            "No"
        ]
    },
    "isFairOrDiscounted": {
        "ui:placeholder": "Select...",
        "ui:enumNames": [
            "Yes",
            "No"
        ]
    },
    "aproxHoldTime": {
        "ui:widget": "textarea",
        "ui:placeholder": "Make sure you set a reminder to check on that",
    },
    "holdReminder": {
        "ui:placeholder": "Select...",
        "ui:enumNames": [
            "Yes",
            "No"
        ]
    },
};