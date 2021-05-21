// // async
// const simpleFunc = async () => {
//     throw new Error('Oh não!!');
//     return 12;
// };

// simpleFunc()
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     });

// async/await
const asyncTimer = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(12);
    }, 1000);
});

const simpleFunc = async () => {
    const data = await asyncTimer();

    return data;
};

simpleFunc()
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });