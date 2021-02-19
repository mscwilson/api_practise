function getEmojiText(string) {
  return fetch('https://makers-emojify.herokuapp.com/', {
    method: 'POST',
    body: `{"text": "${string}"}`,
    headers: {
      'Content-type': 'application/json',
    },
  })
  .then((response) => response.json())
}

function updateHTML(data) {
  let emojiText = data.emojified_text
  let emojiDiv = document.getElementById("emoji-text")
  emojiDiv.innerHTML = emojiText
}

myText = ":cyclone: :cherry_blossom: :cyclone:"

getEmojiText(myText)
  .then(data => {
    updateHTML(data);
  })




