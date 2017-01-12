/**
 * Created by panshriv on 12-01-2017.
 */

// var a="hello world";
// console.log("a = " + a);


function buttonListener(e){
    console.log("button clicked");
    console.log("event object= " + e);
    console.log("event object tagname = " + e.srcElement.type);
    console.log("event object type = " + e.type); /*click event*/
}