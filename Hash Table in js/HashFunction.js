function hash(key, len) {
    let total = 0;
    for (let char of key) {
        let value = char.charCodeAt(0) - 96;
        total = (total + value) % len;
    }
    return total;
}


console.log(hash("vicky",9));
