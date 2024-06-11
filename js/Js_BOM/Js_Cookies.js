// Cookies let you store user information in web pages.

// To remember user information browser use cookies

// Note: The three Main ways to store data inside Of a Browser which are localStorage, sessionStorage, And Cookies

/*


What are Cookies?
Cookies are data, stored in small text files, on your computer.

When a web server has sent a web page to a browser, the connection is shut down, and the server forgets everything about the user.

Cookies were invented to solve the problem "how to remember information about the user":

When a user visits a web page, his/her name can be stored in a cookie.
Next time the user visits the page, the cookie "remembers" his/her name.
Cookies are saved in name-value pairs like:

cname = John Doe


*/

function setCookie(cname, cvalue, expr) {
  const d = new Date();
  d.setTime(d.getTime() + expr * 24 * 60 * 60 * 1000);
  let expires = "expires" + d.toUTCString();

  document.cookie = cname + "=" + cvalue + ";" + expires + ";" + "path=/";
}

function getCookie(cname) {
  // name=Tamim; cname=islam

  let name = cname + "=";

  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];

    while (c.charAt(0) === " ") c = c.substring(1);

    if (c.indexOf(name) === 0) {
      return c.substring(name.length);
    }
  }
  return "";
}

function checkCookie(cname, exdays) {
  let c = getCookie(cname);
  if (c !== "") {
    alert("Welcome again " + c);
  } else {
    let name = prompt("Please enter your name:", ""); // here name is a global variable
    console.log(name);
    if (name !== "" && name !== null) {
      setCookie(cname, name, exdays);
    }
  }
}
