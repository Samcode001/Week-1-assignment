/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
    console.log("Hi first",seconds)
    setTimeout(()=>sleep(seconds),seconds*1000);
}

sleep(3);

console.log("Finish");