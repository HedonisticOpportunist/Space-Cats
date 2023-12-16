So you have all your services etc abstracted away in this module which is nice. Its a good seperation and keeps your
app Components clean with less code. 

Since you're doing this however, I would consider going the whole hog and implementing something like redux for state management. 

You can still keep your services abstracted away in thunk functions. But the end result would be your code would dispatch actions rather than call services directly so its still clean, but you would also have a global state management behind your application.