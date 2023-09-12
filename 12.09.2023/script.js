const f1 = (birthYear, favNum) => {
    const p = document.createElement("p");
    p.innerText = "Ulubiona liczbą osoby urodzonej w " + birthYear +
        " roku jest " + favNum;
    document.body.appendChild(p);
}

const f2 = () => {
    let year, num

    do{
        year = window.prompt("Podaj swój rok urodzenia")
    }
    while(isNaN(year)==true)

    do{
        num = window.prompt("Podaj ulubioną liczbę")
    }
    while(isNaN(num)==true)

    if((year>1920 && year<2023) || (num==69 || num==420 || num==2137)){
        alert("błędne dane")
        f2()
    }

    f1(year, num)
}

setInterval(f2, 10000)