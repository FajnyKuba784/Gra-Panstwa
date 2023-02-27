var json = []
var streak = 0
var liczba = 0
var zycia = 3
var wynik = 0

async function getData(){
    const data = await fetch("https://restcountries.com/v2/all")
    json = await data.json()
    console.log(json)

}
getData()
function getRandomInt(){
    return(Math.floor(Math.random()* json.length))
    console.log(liczba)
}



function panstwo(){

    document.getElementById("gra").innerHTML = ""

        liczba=getRandomInt()
    
        
        const div = document.createElement("div")
        const nazwa = document.createElement("h1")
        nazwa.innerHTML = json[liczba].name
        div.appendChild(nazwa)

        const flaga = document.createElement("img")
        flaga.setAttribute("src",json[liczba].flags.svg)
        div.appendChild(flaga)
        flaga.style.width = "350px"

        document.getElementById("gra").appendChild(div)
    
         
        document.getElementById("button").style.display = "none"

}


function str(){
var input = document.getElementById("input").value

            

            if(json[liczba].capital.toLowerCase()==input.toLowerCase()){
                streak++
                wynik++
                document.getElementById("liczbas").innerHTML = "Streak "+ streak
                document.getElementById("zycial").innerHTML = "Życia aktualne: "
                document.getElementById("pop/zla").innerHTML = "Poprawna odpowiedz !!!"
                panstwo()
            }
            else{
                zycia--
                streak = 0
                document.getElementById("liczbas").innerHTML = "Streak: "+ streak
                document.getElementById("zycial").innerHTML = "Życia aktualne: "
                document.getElementById("pop/zla").innerHTML = "Błędna odpowiedz !!!        Poprawna odpowiedz to: " + json[liczba].capital
                document.getElementById("z"+zycia).innerHTML = ""
                panstwo()
            }

            if(zycia==0){
                document.getElementById("liczbas").innerHTML = "Przegrana .    Twój wynik to: "+wynik
                
                document.getElementById('button1').style.display = 'none'
                const button = document.createElement("button")
                button.innerHTML = "Restart"
                button.setAttribute("onclick","rest()")
                document.getElementById("info").appendChild(button)
            }
            
}

function rest(){
    location.reload()
}