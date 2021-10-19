
// Time Fonksiyonu
function showTime()
{
    let myClock = document.querySelector("#myClock")
    let today = new Date()
    let h = today.getHours()
    let m = today.getMinutes()
    let s = today.getSeconds()
    let d = today.getDay()
   
    // Günleri Stringe Çevirme
    if(d = 0)
    {
        d = "Pazartesi"
    }
    else if(d = 1)
    {
        d = "Salı"
    }
    else if(d = 2)
    {
        d = "Çarşamba"
    }
    else if(d = 3)
    {
        d = "Perşembe"
    }
    else if(d = 4)
    {
        d = "Cuma"
    }
    else if(d = 5)
    {
        d = "Cumartesi"
    }
    else if(d = 6)
    {
        d = "Pazar"
    }
    // Saniye Dakika Ve Saatin Başına 0 Ekleme
    if(s < 10 )
    {
        s = `0${s}`
    }


    if(m < 10 )
    {
        m = `0${m}`
    }



    if(h < 10 )
    {
        h = `0${h}`
    }
    
    
    


    myClock.innerHTML =`${h}:${m}:${s}  ${d}`
    setTimeout(showTime, 1000);
}
    // İsim Bilgisini Ekrana Yazdırma
let nameInput = prompt("Lütfen Adınızı Giriniz.")
let myName = document.querySelector(`#myName`)
myName.innerHTML = nameInput
myName.innerHTML = myName.innerHTML.charAt(0).toUpperCase() + myName.innerHTML.slice(1).toLowerCase()


showTime()








