/* Js runtime environment is a big container which has all the things need to Execute js code.

Parts of Js runtime environment:

i. Js Engine: Its the heart of the js runtime environment
ii. APIs: Its need apis to connect outer environment.For Example localStorage,Console,setTimeOut,fetch(), dom apis, location are common apis .  
iii. Event Loop:
iv.CallBack Queue
v. MicroTask Queue
vi. Render Queue

Note: Every Browser has the Js Runtime Environment To Run JS. Node.Js has also js run time environment

Js Engine: Js Engine is not a machine, its like a normal  programs  written in low-label language like C++

Mechanism: Basically Its take high label code as input and this code goes through three steps.
   1. Parsing: During this stage the codes broken down into tokens. Then Syntax parser convert the code into AST(Abstract Syntax Tree)
   2. Compilation
   3. Execution:


*/
