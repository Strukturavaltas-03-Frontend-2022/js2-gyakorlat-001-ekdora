/* ## 3. feladat
- A `js/03/concatArrays.js` fájlban dolgozz!
- Írj egy függvényt, amely első paraméterként egy karaktert kap, a többi paraméter pedig tetszőleges számú tömb, amelyek string-eket tartalmaznak!  
- A függvény neve `concatArrays` legyen! 

A függvény:
	 - összefűzi egy tömbbe az összes elemet,
	 - eltávolítja az ismétlődő elemeket,
	 - eltávolítja az összes olyan string-et, amely tartalmazza az első paraméterként megadott karaktert,
	 - eltávolítja a string-ek végén lévő whitespace karaktert,
	 - visszaadja ezt az új tömböt.

## 3/b. 
- Alakítsd át úgy az előző feladatot, hogy ne egy függvényed legyen, hanem minden egyes részfeladat legyen külön függvénybe szervezve, tehát:
- 1. függvény: első paraméterként egy karaktert kap, a többi paraméter pedig tetszőleges számú tömb, amelyek string-eket tartalmaznak! A függvény összefűzi egy tömbbe az összes elemet, és visszaadja ezt az új tömböt
- 2. függvény: egy paraméterként kapott tömbből eltávolítja az ismétlődő elemeket, és visszaadja az új tömböt
- 3. függvény: egy paraméterként kapott tömb összes elemének elejéről és végéről levágja a space karaktereket, visszaad egy új tömböt

**Egyik függvénynél se módosítsd a paraméterként kapott tömböt. Mindig újat hozz létre!** 
**Tartsd szem előtt, hogy egy függvény csak egy dolgot csináljon!** */

const animals = ["kutya", " macska ", " nyúl ", "dinnye"];
const fruits = ["alma", "körte", "szilva", "dinnye", "szőlő"];
const nature = ["kutya", "virág", "fa"];
const letter = "a";

const concatArraysToArray = (...array) => [ ...array.flat() ];
console.log(concatArraysToArray(animals, fruits, nature));

const trimArrayItems = (array) => array.map(item => item.trim());
console.log(trimArrayItems(animals));

const removeDuplicates = (array) => [...new Set(array)];
console.log(removeDuplicates(trimArrayItems(concatArraysToArray(animals, fruits, nature))));

const concatArrays = (char, ...array) => removeDuplicates(
	trimArrayItems(concatArraysToArray(...array))
).filter(item => !item.includes(char));
console.log(concatArrays(letter, animals, fruits, nature));

export default concatArrays;