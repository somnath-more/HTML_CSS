// program to pass a function as a parameter
var i=1;
function city()  {
    return i++;
}

// passing function city() as a parameter
function name(user, func)
{

    // accessing passed function
    const message = func();

    console.log(`${message} ${user}`);
}

name('Pune', city);
name('Mumbai', city);
name('Nagpur',city);