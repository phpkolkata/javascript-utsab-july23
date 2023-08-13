// For OF Loop - don't need any counter or increment, it is built to loop

const menu = ["a", "b", "c", "d"];

for (const i of menu) {
  console.log(i);
}

// to get array keys
for (const x of menu.entries()) {
  console.log(x);
}

// hw - output as below
0=a
1=b
2=c
3=d