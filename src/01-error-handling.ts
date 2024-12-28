import { Effect } from "effect";

/*
 * ########################
 * ERROR HANDLING - NATIVE
 * ########################
 */

// const divide = (a: number, b: number): number => {
//   if (b === 0) {
//     throw new Error("Cannot divide by zero");
//   }
//   return a / b;
// };

// console.log("Division: ", divide(2, 1));

// try {
//   console.log("Division: ", divide(2, 0));
// } catch (err) {
//   console.log("Error caught!");
// }

/*
 * ########################
 * ERROR HANDLING - EFFECT
 * ########################
 */

// const divide = (a: number, b: number) =>
//   Effect.if(b !== 0, {
//     onTrue: () => Effect.succeed(a / b),
//     onFalse: () => Effect.fail(new Error("Cannot divide by zero!")),
//   });

// const division = divide(2, 1);

// // const result = Effect.orElse(division, () => Effect.succeed(0));

// const result = Effect.match(division, {
//   onSuccess: (value) => `Result: ${value}`,
//   onFailure: (err) => err.message,
// });

// console.log(Effect.runSync(result));
