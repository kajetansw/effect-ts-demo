import { Effect, pipe } from "effect";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

class HttpError extends Error {
  readonly _tag = "HttpError";
}

class ParseError extends Error {
  readonly _tag = "ParseError";
}

// const getTodo = (id: number) =>
//   Effect.tryPromise({
//     try: () => fetch(`https://jsonplaceholder.typicode.com/todos/${id}`),
//     catch: () => new HttpError(),
//   });

// const getTodo = (id: number) =>
//   pipe(
//     Effect.tryPromise({
//       try: () => fetch(`https://jsonplaceholder.typicode.com/todos/${id}`),
//       catch: () => new HttpError(),
//     }),
//     Effect.flatMap((res) =>
//       Effect.tryPromise({
//         try: () => res.json(),
//         catch: () => new ParseError(),
//       }),
//     ),
//   );

// const getTodo = (id: number) =>
//   Effect.gen(function* () {
//     const res = yield* Effect.tryPromise({
//       try: () => fetch(`https://jsonplaceholder.typicode.com/todos/${id}`),
//       catch: () => new HttpError(),
//     });

//     const parsed = yield* Effect.tryPromise({
//       try: () => res.json(),
//       catch: () => new ParseError(),
//     });

//     return parsed as Todo;
//   });

// const program = getTodo(1);

// Effect.runPromise(program).then(console.log);
