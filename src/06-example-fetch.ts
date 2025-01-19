import { Effect, pipe } from "effect";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

class NetworkError extends Error {
  readonly _tag = "NetworkError";
}

class HttpError extends Error {
  readonly _tag = "HttpError";
}

class JsonParseError extends Error {
  readonly _tag = "JsonParseError";
}

// const getTodo = (id: number) =>
//   Effect.tryPromise({
//     try: () => fetch(`https://jsonplaceholder.typicode.com/todos/${id}`),
//     catch: () => new NetworkError(),
//   });

// const getTodo = (id: number) =>
//   pipe(
//     Effect.tryPromise({
//       try: () => fetch(`https://jsonplaceholder.typicode.com/todos/${id}`),
//       catch: () => new NetworkError(),
//     }),
//     Effect.flatMap((res) =>
//       Effect.if(res.ok, {
//         onTrue: () => Effect.succeed(res),
//         onFalse: () => Effect.fail(new HttpError()),
//       }),
//     ),
//     Effect.flatMap((res) =>
//       Effect.tryPromise({
//         try: () => res.json(),
//         catch: () => new JsonParseError(),
//       }),
//     ),
//   );

// const getTodo = (id: number) =>
//   Effect.gen(function* () {
//     const httpRes = yield* Effect.tryPromise({
//       try: () => fetch(`https://jsonplaceholder.typicode.com/todos/${id}`),
//       catch: () => new NetworkError(),
//     });

//     const res = yield* Effect.if(httpRes.ok, {
//       onTrue: () => Effect.succeed(httpRes),
//       onFalse: () => Effect.fail(new HttpError()),
//     });

//     const parsed = yield* Effect.tryPromise({
//       try: () => res.json(),
//       catch: () => new JsonParseError(),
//     });

//     return parsed as Todo;
//   });

// const program = getTodo(1);

// Effect.runPromise(program).then(console.log);
