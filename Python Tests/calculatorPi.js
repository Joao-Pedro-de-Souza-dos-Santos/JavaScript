// function binary_split(a, b) {
//     let Pab, Qab, Rab;

//     if (b === a + 1) {
//         if (a === 0) {
//             Pab = 1;
//             Qab = 1;
//         } else {
//             Pab = -(6 * a - 5) * (2 * a - 1) * (6 * a - 1);
//             Qab = 10939058860032000 * Math.pow(a, 3);
//             Rab = Pab * (545140134 * a + 13591409);
//         }
//     } else {
//         let m = Math.floor((a + b) / 2);
//         let [Pam, Qam, Ram] = binary_split(a, m);
//         let [Pmb, Qmb, Rmb] = binary_split(m, b);

//         Pab = Pam * Pmb;
//         Qab = Qam * Qmb;
//         Rab = Qmb * Ram + Pam * Rmb;
//     }
//     return [Pab, Qab, Rab];
// }

// function chudnovsky(n) {
//     let [P0n, Q0n, R0n] = binary_split(0, n);
//     return chudnovsky(n) = (426880 * Math.sqrt(10005) * Q0n) / R0n;
// }

// console.log(chudnovsky(2));

function binary_split(a, b) {
    let Pab, Qab, Rab;

    if (b === a + 1) {
        if (a === 0) {
            Pab = 1;
            Qab = 1;
            // Rab = 1;
        } else {
            Pab = -(6 * a - 5) * (2 * a - 1) * (6 * a - 1);
            Qab = 10939058860032000 * Math.pow(a, 3);
            Rab = Pab * (545140134 * a + 13591409);
        }
    } else {
        let m = Math.floor((a + b) / 2);
        let [Pam, Qam, Ram] = binary_split(a, m);
        let [Pmb, Qmb, Rmb] = binary_split(m, b);

        Pab = Pam * Pmb;
        Qab = Qam * Qmb;
        Rab = Qmb * Ram + Pam * Rmb;
    }
    return [Pab, Qab, Rab];
}

function chudnovsky(n) {
    let [Q0n, R0n] = binary_split(0, n);
    return (426880 * Math.sqrt(10005) * Q0n) / R0n;
}

console.log(chudnovsky(2));