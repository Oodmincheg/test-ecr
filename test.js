let requests = 0;

function sendRequest() {
  console.log(++requests);
}

const interval = setInterval(sendRequest, 1);

setTimeout(() => {
  console.log('requests ===> ', requests);
  clearInterval(interval);
}, 60000);
