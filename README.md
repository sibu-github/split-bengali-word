# split-bengali-word

A utility function for the purpose of splitting Bengali words into individual letters.

## Usage

```
npm install --save split-bengali-word

```

```
const {splitWord} = require('split-bengali-word')
const input = 'অবিচ্ছেদ্য';
console.log(splitWord(input));
// [ 'অ', 'বি', 'চ্ছে', 'দ্য' ]
```
