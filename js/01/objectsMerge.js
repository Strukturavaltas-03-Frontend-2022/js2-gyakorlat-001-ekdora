/* ## 1. feladat
- A `js/01/objectsMerge.js` fájlban dolgozz.
- Írj egy függvényt, amely paraméterként tetszőleges darabszámú objektumot 
merge-öl össze, majd visszatér ezzel az objektummal!
- A függvény neve `objectsMerge` legyen!
Az összefűzést úgy hajtsa végre, hogy az új objektum property-jei egyszerű indexek legyenek (0, 1, 2 stb.), amelyek tartalmazzák 
a részobjektumokat!   */

const johnDoe = { 
    firstName: 'John',
    lastName: 'Doe'
};

const janeDoe = { 
    firstName: 'Jane',
    lastName: 'Doe'
}

const objectsMerge = (...objectsToMerge) => {
    return { ...objectsToMerge };
};

console.log(objectsMerge(johnDoe, janeDoe));

export default objectsMerge;