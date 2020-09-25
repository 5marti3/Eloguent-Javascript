function chessboard(size) {
    for (let i = 0; i < size; i++) {
        if (i % 2 === 0) {
            let line = " ";
            for (let j = 0; j < size; j++) {
                if (j % 2 === 0) {
                    line += " ";
                } else {
                    line += "#";
                }
            }
            console.log(line);
        } else {
            let line = " ";
            for (let j = 0; j < size; j++) {
                if (j % 2 === 0) {
                    line += "#";
                } else {
                    line += " ";
                }
            }
            console.log(line);
        }
    }
}

chessboard(8);
