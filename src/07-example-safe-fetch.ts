import { Effect, pipe, Schema } from "effect";
import { TaggedError } from "effect/Data";

// interface Todo {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// }

/*
 * ########################
 * SETUP - ERRORS
 * ########################
 */

// class HttpError extends Error {
//   readonly _tag = "HttpError";
// }

export class NetworkError extends TaggedError("NetworkError")<{
  readonly message: string;
}> {}

export class HttpError extends TaggedError("HttpError")<{
  readonly status: number;
  readonly statusText: string;
  readonly message: string;
}> {}

export class JsonParseError extends TaggedError("JsonParseError")<{
  readonly message: string;
}> {}

/*
 * ########################
 * SETUP - SCHEMA
 * ########################
 */

const Todo = Schema.Struct({
  userId: Schema.Number,
  id: Schema.Number,
  title: Schema.String,
  completed: Schema.Boolean,
});

type Todo = Schema.Schema.Type<typeof Todo>;

/*
 * ########################
 * GET TODO IMPL
 * ########################
 */

// const decodeTodo = Schema.decodeUnknown(Todo);

// const getTodo = (id: number) =>
//   Effect.gen(function* () {
//     const httpRes = yield* Effect.tryPromise({
//       try: () => fetch(`hps://jsonplaceholder.typicode.com/todos/${id}`),
//       catch: (err) =>
//         new NetworkError({
//           message:
//             err instanceof Error ? err.message : "Failed network request",
//         }),
//     });

//     const res = yield* Effect.if(httpRes.ok, {
//       onTrue: () => Effect.succeed(httpRes),
//       onFalse: () =>
//         Effect.fail(
//           new HttpError({
//             status: httpRes.status,
//             statusText: httpRes.statusText,
//             message: `HTTP error ${httpRes.status}: ${httpRes.statusText}`,
//           }),
//         ),
//     });

//     const parsed = yield* Effect.tryPromise({
//       try: () => res.json(),
//       catch: (err) =>
//         new JsonParseError({
//           message:
//             err instanceof Error
//               ? err.message
//               : "Failed to parse JSON response",
//         }),
//     });

//     const decoded = yield* decodeTodo(parsed);

//     return decoded;
//   });

/*
 * ########################
 * GENERIC SAFE FETCH
 * ########################
 */

// const safeFetch =
//   <A>(schema: Schema.Schema<A>) =>
//   (url: string) =>
//     Effect.gen(function* () {
//       const httpRes = yield* Effect.tryPromise({
//         try: () => fetch(url),
//         catch: (err) =>
//           new NetworkError({
//             message:
//               err instanceof Error ? err.message : "Failed network request",
//           }),
//       });

//       const res = yield* Effect.if(httpRes.ok, {
//         onTrue: () => Effect.succeed(httpRes),
//         onFalse: () =>
//           Effect.fail(
//             new HttpError({
//               status: httpRes.status,
//               statusText: httpRes.statusText,
//               message: `HTTP error ${httpRes.status}: ${httpRes.statusText}`,
//             }),
//           ),
//       });

//       const json = yield* Effect.tryPromise({
//         try: () => res.json(),
//         catch: (err) =>
//           new JsonParseError({
//             message:
//               err instanceof Error
//                 ? err.message
//                 : "Failed to parse JSON response",
//           }),
//       });

//       const parsed = yield* Schema.decodeUnknown(schema)(json);

//       return parsed;
//     });

// const getTodo = (id: number) =>
//   safeFetch(Todo)(`https://jsonplaceholder.typicode.com/todos/${id}`);

// const program = getTodo(1);

// Effect.runPromise(program).then(console.log);
