function everyLoop(array, f) {
    for (let i = 0; i < array.length; i++) {
        if (!f(array[i])) {
            return false;
        }
    }
    return true;
}

function everySome(array, f) {
	if (!(!array.some(f))) return true;
	



}
