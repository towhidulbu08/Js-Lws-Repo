// Event Loop: Callback queue(FIFO) and Microtask queue

// Event loop always monitor weather the callStack is empty nor not.If callStack is empty and there is a callBack in CallBack Queue ,it just put the callback inside callStack.

// CallStack(LIFO): Its present inside the js engine . All the codes of js executed inside callStack. If anything comes inside this callstack it quickly execute the code. This is the actual place where js code is executed

// Main Job of callStack is to execute whatever comes inside of it. It does't wait for anything

// Note: callstack does't have a timer.

// Browser: 1. Js Engine 2. Web APIs 3.LocalStorage

//  The Power Of A Browser: The Browser Has The Super Power of Communicating to The External World

// Web APIs: setTimeout(), Dom APIs (document.getElementId.. etc), fetch, localStorage,console, location

// Note: WeB APIs it's part of js runtime environment in Browser

// Js use browser as a host

// Global Object: window

// Javascript Run Time Environment: 1. Js Engine 2. Web APIs
// Js Engine: 1. Heap(memory) 2. CallStack

// Synchronous Blocking Behavior and Asynchronous Non Blocking Behavior

// microtasks will always run before render tasks if scheduled in the same turn of the event loop.

// microtask queue > render queue> callBack queue
