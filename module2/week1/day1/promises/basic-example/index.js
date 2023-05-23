const myPromise = new Promise((resolve, reject) => {
    if (/* condition */) {
       resolve(/* value */);  // fulfilled successfully
    }
    else {
       reject(/* reason */);  // error, rejected
    }
 });

// new Error
 