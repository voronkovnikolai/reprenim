function interpolateString(str, ...args) {
    return str.replace(/{(\d+)}/g, (match, num) => {
        return args[+num - 1];
    });
}
