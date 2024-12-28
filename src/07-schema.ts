import { Effect, Schema } from "effect";
import { TaggedError } from "effect/Data";

// interface Todo {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// }

/*
 * ########################
 * SETUP
 * ########################
 */

// class HttpError extends Error {
//   readonly _tag = "HttpError";
// }

class HttpError extends TaggedError("HttpError") {}
class JsonError extends TaggedError("JsonError") {}

const Todo = Schema.Struct({
  userId: Schema.Number,
  id: Schema.Number,
  title: Schema.String,
  completed: Schema.Boolean,
});

type Todo = Schema.Schema.Type<typeof Todo>;

/*
 * ########################
 * CODE
 * ########################
 */

// const decodeTodo = Schema.decodeUnknown(Todo);

// const getTodo = (id: number) =>
//   Effect.gen(function* () {
//     const res = yield* Effect.tryPromise({
//       try: () => fetch(`https://jsonplaceholder.typicode.com/todos/${id}`),
//       catch: () => new HttpError(),
//     });

//     const json = yield* Effect.tryPromise({
//       try: () => res.json(),
//       catch: () => new JsonError(),
//     });

//     const parsed = yield* decodeTodo(json);

//     return parsed;
//   });

// const safeFetch =
//   <A>(schema: Schema.Schema<A>) =>
//   (url: string) =>
//     Effect.gen(function* () {
//       const res = yield* Effect.tryPromise({
//         try: () => fetch(url),
//         catch: () => new HttpError(),
//       });

//       const json = yield* Effect.tryPromise({
//         try: () => res.json(),
//         catch: () => new JsonError(),
//       });

//       const parsed = yield* Schema.decodeUnknown(schema)(json);

//       return parsed;
//     });

// const getTodo = (id: number) => safeFetch(Todo)(`https://jsonplaceholder.typicode.com/todos/${id}`);

// Effect.runPromise(getTodo(1)).then(console.log);
