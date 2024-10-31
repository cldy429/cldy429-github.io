var n, r, s = 0;
n = window.prompt("Too oruul: ", 200);

while(n)
{
    r = n % 10;
    s = s + r;
    n = Math.floor(n/10);
}
console.log(s);