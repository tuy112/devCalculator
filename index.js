// 2단에서 9단까지 구구단
for (let i = 2; i < 10; i++) {
    if (i <= 5) {
        process.stdout.write(`${i} 단\t\t`);
    } else {
        process.stdout.write("\n");
        process.stdout.write(`${i} 단\t\t`);
    }
    for (let j = 1; j < 10; j++) {
        if (i * j % 3 !== 0) {
            process.stdout.write(`${i} * ${j} = ${i * j}\t`);
        }
    }
    process.stdout.write("\n");
}