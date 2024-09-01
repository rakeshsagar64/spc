export const TIME_FRAME = {
    "title": "Time Frame",
    "description": "Is this a short/long term",
    "type": "object",
    "required": [
        "timeFrame"
    ],
    "properties": {
        "isLongTerm": {
            "type": "string",
            "title": "Is this a part of long term portfolio/ core portfolio?",
            "enum": [
                "Yes",
                "No"
            ]
        }
    }
};

export const TIME_FRAME_UI = {
    "isLongTerm": {
        "ui:autofocus": true,
        "ui:placeholder": "Select...",
        "ui:enumNames": [
            "Yes",
            "No"
        ]
    }
};