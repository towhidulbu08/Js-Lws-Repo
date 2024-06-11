/*

01. Promise.all()
02. Promise.allSettled()
03. Promise.race()
04. Promise.any()


Note: Settle (get the result from any api call) means either reject or resolve
  1. resolve , fulfilled,success
  2. reject,  rejected, failure

*/

/*
  No.01: Promise.all(any iterable like arrays, map,sets,string)

  Summary: It will wait only for the all promises to resolve. If anyone get rejected throw an error as output immediately      



  Example:  Promise.all([p1,p2,p3])

  Note: Fail First

  p1=3s,p2=1s, p3=2s all of them (api calls) are  succeed

   Output: an Array [p1(resolved), p2(resolved),p3(resolved)]
   suppose: p1=> resolved after 3s;
                 p2=> rejected after 1s;
                 p3=> resolved after 2s;

       Output: throw an error, when any of these promises will be rejected      


  Note: 1.In the case of success:it will wait for all of them to finish
        2. In the case of failure: as soon as any of these promise will get rejected Promise.all() will throw an error and it will be an failure operation and it will not wait for other promises

 
        

No.02: Promise.allSettled() => Return an Array of Objects

   Summary: It will wait  for all the promises to settle

 
  Note:  01. It is as same as Promise.all() only in the case of when all Promises are Successfully Resolved.
        02. In The Case Of failure: Unlike Promise.all(), It will wait for all Promises to settled

        suppose: p1=> resolved after 3s;
                 p2=> rejected after 1s;
                 p3=> resolved after 2s;

        Output: an Array [p1(resolved), p2(rejected),p3(resolved)]

   
  No.03.  Promise.race([p1,p2,p3])

  Output: The value or the Error of the First settled Promise will return

  Summary: It will wait for the first the promises to settle
  
        Note: First Settled Promise

      p1=>1s,p=>2s,p=>3s;

      Note: 01.It will return the first settled promise (either value or error)
      
      02. It will not wait  for other promises to finish
      
      if resolved it will return Value,
      if reject it will return  Error,

      Output: p1(value Or Error)

  No.04. Promise.any([p1,p2,p3]) {First Success Seeking API}

  Output: The value Of the first Resolved Promise will return expect in that case when all promises will get rejected , then it will return an Special Error 

  Summary: It will wait for the first promise to resolve.If all promises get rejected it will return an Aggregated Error

    Note: First Resolved Promise
  
         p1=>3s,p2=>4s,p3=>1s

        Output: It return the value of p3 Promise (first resolved) 


    Note: 01. It will for the first resolved Promises
         02. Promise.any() only wait for resolved operations not for reject operation. If any promise get rejected it just ignored it.
        03. If all of the promises get rejected the output will be an Aggregated Error
        

 */

const p1 = new Promise((res, rej) => {
  setTimeout(() => {
    rej("P1 Is Rejected");
  }, 1000);
});
const p2 = new Promise((res, rej) => {
  setTimeout(() => {
    rej("P2 Is Rejected");
  }, 1000);
});
const p3 = new Promise((res, rej) => {
  setTimeout(() => {
    res("P3 Is Resolved");
  }, 1000);
});

Promise.race([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Promise.allSettled([p1, p2, p3])
//   .then((res) => {
//     const arrOfObj = res;
//     for (const item of arrOfObj) {
//       console.log(item);
//     }
//     //console.log(Object.keys(arrOfObj[0]));
//   })
//   .catch((err) => console.log(err));
