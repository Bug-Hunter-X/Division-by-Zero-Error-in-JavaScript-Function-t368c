function foo(a,b){    if(a === 0 && b === 0){        return 0;    } else if (a === 0 || b === 0){        return 0;    }    return a/b;}foo(0,0); // returns 0