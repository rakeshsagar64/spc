export const INITIAL_FORM = {
    "title": "Stock Purchase Check List",
    "description": "This is a list of questions to know answers to before purchase the stock",
    "type": "object",
    "required": [
      "stockName",
      "lastName"
    ],
    "properties": {
      "stockName": {
        "type": "string",
        "title": "What is the stock name?",
      },
      // "lastName": {
      //   "type": "string",
      //   "title": "Last name"
      // },
      // "age": {
      //   "type": "integer",
      //   "title": "Age"
      // },
      // "bio": {
      //   "type": "string",
      //   "title": "Bio"
      // },
      // "password": {
      //   "type": "string",
      //   "title": "Password",
      //   "minLength": 3
      // },
      // "telephone": {
      //   "type": "string",
      //   "title": "Telephone",
      //   "minLength": 10
      // },
      // "destination": {
      //   "type": "string",
      //   "title": "Where are you headed?",
      //   "enum": [
      //     "canada",
      //     "usa",
      //     "international"
      //   ],
      //   "enumNames": [
      //     "Canada",
      //     "USA"
      //   ]
      // }
    }
  };

export const INITIAL_FORM_UI = {
    "stockName": {
      "ui:autofocus": true,
      "ui:emptyValue": "",
      "ui:placeholder": "Name of the stock",
      "ui:enableMarkdownInDescription": true,
    },
    // "lastName": {
    //   "ui:autocomplete": "given-name",
    //   "ui:enableMarkdownInDescription": true,
    //   "ui:description": "Make things **bold** or *italic*. Embed snippets of `code`. <small>And this is a small texts.</small> "
    // },
    // "age": {
    //   "ui:widget": "updown",
    //   "ui:title": "Age of person",
    //   "ui:description": "(earth year)"
    // },
    // "bio": {
    //   "ui:widget": "textarea"
    // },
    // "password": {
    //   "ui:widget": "password",
    //   "ui:help": "Hint: Make it strong!"
    // },
    // "telephone": {
    //   "ui:options": {
    //     "inputType": "tel"
    //   }
    // }
  };