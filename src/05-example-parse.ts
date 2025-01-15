import { Effect, pipe } from "effect";

interface Person {
  name: string;
  age: number;
}

class ParseError extends Error {
  readonly _tag = "ParseError";
}

// const parseJson = <T>(text: string) => Effect.try(() => JSON.parse(text) as T);

// const parseJson = <T>(text: string) =>
//   Effect.try({
//     try: () => JSON.parse(text) as T,
//     catch: (err) => new ParseError(),
//   });

// const result = parseJson<Person>('{"name":"John","age":20}');

// const result = pipe(
//   parseJson<Person>('{"name":"John","age":20}'),
//   Effect.map((person) => `${person.name}, age: ${person.age}`),
//   Effect.catchTag("ParseError", () => Effect.succeed("Incorrect format!")),
// );

// console.log(Effect.runSync(result));
