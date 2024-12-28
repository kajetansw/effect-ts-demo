import { Effect, pipe } from "effect";
import { TaggedError } from "effect/Data";

/*
 * ########################
 * BASIC
 * ########################
 */

const increment = (x: number) => x + 1;
const double = (x: number) => x * 2;
const subtract = (by: number) => (x: number) => x - by;

// const program = subtract(10)(double(increment(increment(10))));

// const program = pipe(10, increment, increment, double, subtract(10));

// console.log("Result: ", program);

/*
 * ########################
 * MAPPING EFFECT
 * ########################
 */

const divideBy = (by: number) => (a: number) =>
  Effect.gen(function* () {
    if (by === 0) {
      yield* Effect.fail(new Error("Cannot divide by zero!"));
    }

    return a / by;
  });

// const program = pipe(
//   Effect.succeed(10),
//   Effect.map(double),
//   Effect.map(subtract(5)),
// );

// const program = pipe(Effect.succeed(10), Effect.map(divideBy(5)));

// const program = pipe(Effect.succeed(10), Effect.flatMap(divideBy(5)));

// const program = pipe(
//   Effect.succeed(10),
//   Effect.flatMap(divideBy(5)),
//   Effect.orElse(() => Effect.succeed(-1)),
// );

// console.log("Result:", Effect.runSync(program));
