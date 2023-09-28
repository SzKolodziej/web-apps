const prompt = require('prompt-sync')();


//podanie wielkości tablicy
let x = prompt("Podaj wielkość tablicy: ")

while(!Number.isInteger(x*1) || x<2)
{
    x = prompt("Podaj liczbę całkowitą >=2!!! ")
}


//wprowadzenie wartości do tablicy
const tab = []
let number 

for(let i=0; i<x; i++)
{
    number = prompt(`Podaj ${i+1} elemnt tablicy: `)
    while(!+number)
    {
        number = prompt("To musi być liczba!!! ")
    }
    
    tab.push(number)
}


//wypisanie wartości tablicy przed sortowaniem
console.log()
console.log("Nie posortowana tablica: [")
for(let i=0; i<x; i++)
{
    console.log(tab[i])
}
console.log("]")


//funkcja swap
const swap = (t, a, b)=>
{
    let pom
    pom = t[a]
    t[a] = t[b]
    t[b] = pom
}

//sortowanie
for(let i=0; i<x; i++)
{
    let p=i
    for(let j=i+1; j<x; j++)
    {
        if(tab[j]<tab[p])
        {
            p = j
        }
    }
    swap(tab, i, p)
}



//wypisanie wartości tablicy po sortowaniu
console.log()
console.log("Posortowana tablica: [")
for(let i=0; i<x; i++)
{
    console.log(tab[i])
}
console.log("]")