import { Effect } from "effect";

// const divide = (a: number, b: number) =>
//   Effect.gen(function* () {
//     if (b === 0) {
//       yield* Effect.fail(new Error("Cannot divide by zero!"));
//     }

//     return a / b;
//   });

// const division = divide(5, 2);

// const result = Effect.match(division, {
//   onSuccess: (val) => `Result: ${val}`,
//   onFailure: () => `Error! Divided by zero!`,
// });

// console.log(Effect.runSync(result));
