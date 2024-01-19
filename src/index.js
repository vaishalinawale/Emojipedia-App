import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import emojipedia from './emojipedia';


const newEmoji = emojipedia.map((emojiEntry) => {
  return emojiEntry.meaning.substring(0,100);
});
console.log(newEmoji);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />

);
