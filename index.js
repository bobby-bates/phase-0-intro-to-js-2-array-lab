const cats = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendCat(name) {
    cats.push(name)
    // Also:
    // cats.splice(cats.length, 0, name)
}
function destructivelyPrependCat(name) {
    cats.unshift(name)
    // Also:
    // cats.splice(0, 0, name)
}
function destructivelyRemoveLastCat(name) {
    cats.pop(name)
    // Also:
    // cats.splice(-1)
}
function destructivelyRemoveFirstCat(name) {
    cats.shift(name)
    // Also:
    // cats.splice(0, 1)
}
function appendCat(name) {
    const moarCatsAfter = [...cats, name]
    return moarCatsAfter
}
function prependCat(name) {
    const moarCatsBefore = [name, ...cats]
    return moarCatsBefore
}
function removeLastCat(name) {
    return cats.slice(0, 2)
}
function removeFirstCat(name) {
    return cats.slice(1)
}