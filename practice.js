// const data = [
//   { name: "Abhish 0", age: "54" },
//   { name: "Abhish 1", age: "55" },
//   { name: "Abhish 2", age: "56" },
//   { name: "Abhish 3", age: "57" },
//   { name: "Abhish 4", age: "58" },
//   { name: "Abhish 5", age: "59" },
//   { name: "Abhish 6", age: "60" },
//   { name: "Abhish 7", age: "61" },
//   { name: "Abhish 8", age: "62" },
// ]
// const col1 = []
// const col2 = []
// const col3 = []
// /*
// [
//   { name: 'Abhish 0', age: '54' },
//   { name: 'Abhish 1', age: '55' },
//   { name: 'Abhish 2', age: '56' },
//   { name: 'Abhish 3', age: '57' },
//   { name: 'Abhish 4', age: '58' },
//   { name: 'Abhish 5', age: '59' },
//   { name: 'Abhish 6', age: '60' },
//   { name: 'Abhish 7', age: '61' },
//   { name: 'Abhish 8', age: '62' },
//   { name: 'Abhish 9', age: '63' },
//   { name: 'Abhish 10', age: '64' },
//   { name: 'Abhish 11', age: '65' }
// ]
// */
// // for(let i = 0; i < 12; i++) {
// //     data.push(
// //         {
// //             name: `Abhish ${i}`,
// //             age: `${i+54}`
// //         }
// //     )
// // }

// if (data.length % 3 === 0) {
//   // 3N
//   for (let i = 0; i < data.length; i += 3) {
//     col1.push(data[i])
//     col2.push(data[i + 1])
//     col3.push(data[i + 2])
//   }
// } else if (data.length % 3 === 1) {
//   // 3N+1
//   for (let i = 0; i < data.length; i += 3) {
//     col1.push(data[i])
//     if (!(data[i + 1] === undefined)) {
//       col2.push(data[i + 1])
//     }
//     if (!(data[i + 2] === undefined)) {
//       col3.push(data[i + 2])
//     }
//   }
// } else if (data.length % 3 === 2) {
//   // 3N+2
//   for (let i = 0; i < data.length; i += 3) {
//     col1.push(data[i])
//     col2.push(data[i + 1])
//     if (!(data[i + 2] === undefined)) {
//       col3.push(data[i + 2])
//     }
//   }
// }

// const col1sm=[]
// const col2sm=[]

// if (data.length % 2 === 0) {
//   for (let i = 0; i < data.length; i += 2) {
//     col1sm.push(data[i])
//     col2sm.push(data[i + 1])
//   }
// } else {
//   for (let i = 0; i < data.length; i += 2) {
//     col1sm.push(data[i])
//     if (!(data[i + 1] === undefined)) {
//       col2sm.push(data[i + 1])
//     }
//   }
// }

// console.log(col1sm);
// console.log(col2sm);

// console.log("col1", col1);
// console.log("col2", col2);
// console.log("col3", col3);

// console.log(17 % 2)

const asn = async () => {
	const data = await 4;
	if (data === 4) {
		return Promise.reject(data);
	}
	return Promise.resolve(data);
};

const data = asn();
// console.log(data);
console.log(data.then((val) => console.log("val ",val)).catch((e) => console.log("Error ",e)));

