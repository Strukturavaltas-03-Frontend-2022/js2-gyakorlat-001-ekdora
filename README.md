
# Feladatok

## NAGYON FONTOS!!!
- A könnyebb tesztelhetőség érdekében az elkészített függvényeket exportálni 
kell! Ez azt jelenti, hogy ha például írsz egy ilyen függvényt:
```javascript
const objectsMerge = () => {};
```
akkor utána ki kell így exportálni a fájlból:
```javascript
export default objectsMerge;
```
- A `js/01/objectsMerge.js` fájlban találsz egy kész mintát erre.
- (Egyelőre ne légy kíváncsi arra, hogy miért, később tanulni fogjuk :))))))

## 1. feladat
- A `js/01/objectsMerge.js` fájlban dolgozz.
- Írj egy függvényt, amely paraméterként tetszőleges darabszámú objektumot 
merge-öl össze, majd visszatér ezzel az objektummal!
- A függvény neve `objectsMerge` legyen!
Az összefűzést úgy hajtsa végre, hogy az új objektum property-jei egyszerű indexek legyenek (0, 1, 2 stb.), amelyek tartalmazzák 
a részobjektumokat!  
Pl.: 

```JavaScript
    // A két objektum:
    const johnDoe = { 
        firstName: 'John',
        lastName: 'Doe'
    };

    const janeDoe = { 
        firstName: 'Jane',
        lastName: 'Doe'
    }

    // A végeredmény:
    {
        0: { 
            firstName: 'John',
            lastName: 'Doe'
        },
        1:  { 
            firstName: 'Jane',
            lastName: 'Doe'
        }
    }
```

## 2. feladat
- A `js/02/taggedTemplate.js` fájlban dolgozz!
- Írj egy olyan függvényt (tagged template), amely a paraméterként kapott texts, values értékeket úgy adja vissza egy string-ben, hogy 
a text értékek dőltek, a value-k félkövérek legyenek, ha beillesztjük a HTML-be, tehát a megfelelő tagekkel kiegészített string-et adjon vissza!
- Például ebből, hogy `James`, ez legyen: `<strong>James</strong>`.
- A függvény neve `taggedTemplate` legyen!
- Összefoglalva: a kapott String-eket kell HTML-elemekké (tagekké) alakítani.

## 3. feladat
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
**Tartsd szem előtt, hogy egy függvény csak egy dolgot csináljon!**
