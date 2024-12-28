import { Effect } from "effect";

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
//     catch: () => new ParseError(),
//   });

// console.log(Effect.runSync(parseJson<Person>('{"name":"John","age":20}')));
