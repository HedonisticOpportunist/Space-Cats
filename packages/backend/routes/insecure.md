Your routes are insecure. 

You have the route functions in controllers in another location which is fine, but each of these controllers perform an action. Again, this is fine. 

But you have a concept of use authentication but no process to block unauthenticated users from accessing resources they shouldn't have access to 
or to verify that the user is trying to perform an action on their own account. 

I would consider protecting the routes that need protection with a middleware function 

```js
const authMiddleware = (req, res, next) => {
    const { id } = req.params;

    //perform your checks. 
    if (authFailed) return res.status(401).json({ message: 'fuck off' });
    return next();
};

const userAccessAllowed = (req, res, next) => {
    const { id } = req.params;

    //performChecks
    if (!ok) return res.status(403). json({ message: 'not your user record is it there mate' });
    return next();
};


router.post('/someRoute/:id', authMiddleware, userAccessAllowed, controllerFunction);

```