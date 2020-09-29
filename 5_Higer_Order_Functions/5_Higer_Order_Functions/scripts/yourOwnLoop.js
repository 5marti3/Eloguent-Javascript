function loop(val, test, update, body) {
    for (val; test(val); val = update(val)) {
        body(val);
    }
}
