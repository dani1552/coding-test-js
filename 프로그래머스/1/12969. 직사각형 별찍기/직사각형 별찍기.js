process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const col = Number(n[0]); 
    const row = Number(n[1]);

    for (let i = 0; i < row; i++) {
        console.log("*".repeat(col));
    }
});