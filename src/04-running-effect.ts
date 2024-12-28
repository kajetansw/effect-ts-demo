import { Effect } from "effect";

/*
 * ########################
 * sync
 * always succeeds
 * ########################
 */

// const log = (message: string) => Effect.sync(() => console.log(message));

// Effect.runSync(log("Hello sync!"));

/*
 * ########################
 * try
 * can fail
 * ########################
 */

// const parseJson = (text: string) => Effect.try(() => JSON.parse(text));

// console.log("Hello try!", Effect.runSync(parseJson('{"field":"Hello try!"}')));

/*
 * ########################
 * promise
 * always succeeds
 * ########################
 */

// const delay = (message: string, timeout: number) =>
//   Effect.promise<string>(
//     () =>
//       new Promise((resolve) => {
//         setTimeout(() => {
//           resolve(message);
//         }, timeout);
//       }),
//   );

// Effect.runPromise(delay("Hello promise!", 500)).then(console.log);

/*
 * ########################
 * tryPromise
 * can fail
 * ########################
 */

// const getTodo = (id: number) =>
//   Effect.tryPromise(() => fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then((r) => r.json()));

// Effect.runPromise(getTodo(1)).then((v) => console.log("Hello tryPromise!", v));
