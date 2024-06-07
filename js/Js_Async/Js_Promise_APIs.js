/*

01. Promise.all()
02. Promise.allSettled()
03. Promise.race()
04. Promise.any()

*/

/*
  No.01: Promise.all(any iterable like arrays, map,sets,string)


  Example:  Promise.all([p1,p2,p3])

  p1=3s,p2=1s, p3=2s all of them (api calls) are  succeed

   Output: an Array [p1(resolved), p2(resolved),p3(resolved)]
   suppose: p1=> resolved after 3s;
                 p2=> rejected after 1s;
                 p3=> resolved after 2s;

       Output: throw an error, when any of these promises will be rejected      


  Note: 1.In the case of success:it will wait for all of them to finish
        2. In the case of failure: as soon as any of these promise will get rejected Promise.all() will throw an error and it will be an failure operation and it will not wait for other promises

 
        

No.02: Promise.allSettled()
 
  Note:  01. It is as same as Promise.all() only in the case of when all Promises are Successfully Resolved.
        02. In The Case Of failure: Unlike Promise.all(), It will wait for all Promises to settled

        suppose: p1=> resolved after 3s;
                 p2=> rejected after 1s;
                 p3=> resolved after 2s;

        Output: an Array [p1(resolved), p2(rejected),p3(resolved)]

 */
