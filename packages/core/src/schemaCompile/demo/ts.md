
# TS Code

## Primitive Values

null
undefined

## Base Types

string
number
boolean

## Object Types

Object
Array<BaseType>
any
unknown

## Union Types

TypeA | TypeB

## Interfaces and Type Aliases

```ts
interface Bear<SomeType> extends Animal {
  honey: boolean
  readonly id: string;
  name?: string;
  age: 18;
  kind: ShapeKind['Circle'];
  [key: string]: boolean | Horse;
}

type Bear = Animal & {
  honey: boolean
}
```

## Enums
enum Direction {
  Up = 0,
  Down,
  Left = "LEFT",
  Write = 1 << 2,
  ReadWrite = Read | Write,
  // computed member
  G = "123".length,
  A = 1,
  B = A * 2,
}