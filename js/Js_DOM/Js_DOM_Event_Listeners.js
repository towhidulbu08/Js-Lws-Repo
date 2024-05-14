/**
 * In JavaScript, events and event handlers are fundamental concepts used in event-driven programming to create interactive web applications. Let's break down each term:

Event: In JavaScript, an event is an action or occurrence that happens in the browser. This can include user actions (like clicking a button, moving the mouse, typing on the keyboard) or system-generated events (like the page finishing loading, a timer expiring, or an AJAX request completing). These events are recognized by the browser and can be used to trigger JavaScript code to respond to them.

Event Handlers: An event handler is a piece of JavaScript code that is associated with a particular event. When the event occurs, the corresponding event handler is executed. Event handlers are functions that are typically assigned to event properties of HTML elements or registered using JavaScript methods like addEventListener(). When the specified event occurs, the associated event handler function is called.
 * 
 */

document.getElementById("myBtn").addEventListener("mousemove", function () {
  alert("mouseMoved");
});
