`microtask queue > callback queue`

`microtask queue ---> all promises(fetch), mutation observer`

`callback queue ---> set timeout, dom apis(addeventlistner, getelementbyid)`

`event loop continously checks call stack and callback or microtask queue, if call stack is empty it just pushes the scheduled tasks to call stack`

`event listners, fetch will sit in dom apis when called will be pushed to callback or microtask queue`
