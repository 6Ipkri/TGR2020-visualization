var ownerId = "5dfcabe6666c642250d2ec59";


function setCacheData(name, data) {
  //cache
  localStorage[name] = JSON.stringify(data);
}

function setSessionData(name, data) {
  //session
  sessionStorage.setItem = JSON.stringify({name: "John"});
  //window.location.href = "detailland.html";
}
