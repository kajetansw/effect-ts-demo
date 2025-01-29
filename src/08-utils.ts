import { Effect, Schedule, Console, pipe, Random } from "effect";

// 1. delay - Delays the execution of an effect by a specified duration
// const delayedEffect = pipe(
//   Effect.succeed("Hello after delay!"),
//   Effect.delay(1000),
// );

// Effect.runPromise(delayedEffect).then(console.log).catch(console.error);

// 2. retry - Retries an effect according to a specified schedule
// const failSometimes = pipe(
//   Random.next,
//   Effect.map((v) => v < 0.2),
//   Effect.flatMap((v) =>
//     v ? Effect.succeed("Success" as const) : Effect.fail("Fail" as const),
//   ),
// );

// const retryEffect = pipe(
//   failSometimes,
//   Effect.tapError(() => Console.log("Retrying...")),
//   Effect.retry(Schedule.recurs(10)),
// );

// Effect.runPromise(retryEffect).then(console.log).catch(console.error);

// 3. sleep & timeout
// const task = Effect.gen(function* () {
//   yield* Effect.sleep("1 seconds");
//   return "Success" as const;
// });

// const timeoutEffect = pipe(task, Effect.timeout("2 seconds"));

// Effect.runPromise(timeoutEffect).then(console.log).catch(console.error);

// 4. race - Races two effects and returns the result of the first to complete
// const raceEffect = Effect.race(
//   Effect.succeed("task1").pipe(
//     Effect.delay("200 millis"),
//     Effect.tap(Console.log("task1 done")),
//     Effect.onInterrupt(() => Console.log("task1 interrupted")),
//   ),
//   Effect.succeed("task2").pipe(
//     Effect.delay("300 millis"),
//     Effect.tap(Console.log("task2 done")),
//     Effect.onInterrupt(() => Console.log("task2 interrupted")),
//   ),
// );

// Effect.runPromise(raceEffect).then(console.log).catch(console.error);

// 5. sequential & parallel - Runs multiple effects in sequence or parallel and collects their results
// const parallelEffect = Effect.all(
//   [
//     pipe(
//       Effect.succeed("First parallel effect"),
//       Effect.delay("100 millis"),
//       Effect.tap(() => Console.log("First done")),
//     ),
//     pipe(
//       Effect.succeed("Second parallel effect"),
//       Effect.delay("50 millis"),
//       Effect.tap(() => Console.log("Second done")),
//     ),
//     pipe(
//       Effect.succeed("Third parallel effect"),
//       Effect.delay("75 millis"),
//       Effect.tap(() => Console.log("Third done")),
//     ),
//   ],
//   //   {
//   //     concurrency: 2,
//   //   },
// );

// Effect.runPromise(parallelEffect).then(console.log).catch(console.error);
