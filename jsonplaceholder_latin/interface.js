function getPostData() {
 return fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
}

function renderPostData(data) {
  let titleHTML = `<h2> ${data.title}</h2>`
  let text = data.body
  let bodyWithLineBreaks = text.replaceAll("\n", "<br/>\n")
  let bodyHTML = `<p>${bodyWithLineBreaks}</p>`
  return `${titleHTML}${bodyHTML}`
}

function updatePostDisplay(data) {
  let renderedData = renderPostData(data)
  document.getElementById("post").innerHTML = renderedData
}

getPostData()
  .then(data => {
    updatePostDisplay(data)
  })

// same but different data being requested
function getTodoData() {
  return fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
}

function updateTodoDisplay(data) {
  let titleHTML = `<h2> ${data.title}</h2>`
  let completedHTML = `<p>${data.completed}</p>`
  let fullHTML = `${titleHTML}${completedHTML}`
  document.getElementById("todo").innerHTML = fullHTML
}

getTodoData()
  .then( function(data) {
  updateTodoDisplay(data)
  })

// using a POST request


function getPostedData(title, body, userID = 9000) {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: title,
      body: body,
      userId: userID,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then((response) => response.json())
}

function updatePostedDisplay(data) {
  let titleHTML = `<h2> ${data.title}</h2>`
  let text = data.body
  let bodyWithLineBreaks = text.replaceAll("\n", "<br/>\n")
  let bodyHTML = `<p>${bodyWithLineBreaks}</p>`
  let fullHTML =  `${titleHTML}${bodyHTML}`
  document.getElementById("posted").innerHTML = fullHTML
}

titleText = "Caecillius est in horto"
bodyText = "Cerberus est canis.\nMetella est in culina."

getPostedData(titleText, bodyText)
  .then(data => {
    updatePostedDisplay(data)
  })
