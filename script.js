// --- KOHTA A: Perusrunko ja muuttujat ---
const kurssi = "Johdatus sovelluskehitykseen";
let osallistujat = 25;
console.log("Hei maailma! Kurssi:", kurssi);
console.log("Osallistujamäärä:", osallistujat);

console.log(); // tulostaa tyhjän rivin konsolille

let viikonpv = "tiistai";
if (viikonpv === "tiistai") 
    {console.log ("Tänään on Johdatus sovelluskehitykseen -päivä");}
else
    {console.log ("Tänään ei ole Johdatus sovelluskehitykseen -päivä");}
// =    => sijoittaa arvon
// ==   => vertaa arvoja
// ===  => vertaa arvoa ja tietotyyppiä
console.log(); 

//funktio
function laskeKilometrit(ika, askeleet, sukupuoli) 
{
    let askelpituus;

if (sukupuoli === "nainen") 
    {
    if (ika >=40 && ika <=49) 
        {
        askelpituus = 67;
        } 
    else 
        if (ika >=30 && ika <=39) 
        {
        askelpituus = 70;
        } 
        else 
        {
        askelpituus = 65;
        }
    } 
else 
    if (sukupuoli === "mies")
    {
    if (ika >= 40 && ika <= 49) 
        {
        askelpituus = 75;
        } 
    else 
        if (ika >= 30 && ika <= 39) 
        {
        askelpituus = 78;
        } 
        else 
        {
        askelpituus = 73;
        }
    } 
    else 
        {
        return "Anna sukupuoleksi nainen tai mies";
        }   

const kilometrit = (askelpituus * askeleet) / 100000;
return kilometrit;
}
const kilometrit = laskeKilometrit (40, 5400, "nainen");
console.log (kilometrit.toFixed(2) + "km");

// Array
const paiva =
[
"maanantai",
"tiistai",
"keskiviikko",
"torstai",
"perjantai",
"lauantai",
"sunnuntai"
];

for (
    let i = 0;
    i < paiva.length;
    i++
    )
{
    console.log (paiva[i]);
    if (paiva[i] === viikonpv)
    {console.log ("Tänään on Johdatus sovelluskehitykseen -päivä");
    }
}
