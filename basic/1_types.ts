const str: string = 'Hello';

console.log(str);
//booolean
const isFetching: boolean = true;
const isLoading: boolean = false;
//numbers
const int: number = 42;
const float: number = 4.2;
const num: number = 3e10;
//string
const message: string = 'Hello TS';

//array
const numArray: number[] = [1, 1, 2, 3, 5, 8, 13];
const numArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13];

const words: string[] = ['Hello', 'TS'];

//Tuple
const contact: [string, number] = ['Hello', 1234];

//any
let variable: any = 42;
variable = 'new string';

//====
function sayMyName(name: string): void {
  console.log(name);
}
sayMyName('Хайзеберг');

//never
function throwError(message: string): never {
  throw new Error(message);
}

// function infinite():never{
//   while(true){}
// }

//Type
type Login = string;
const login: Login = 'admin';

//
type ID = string | number;
const id1: ID = 1234;
const id2: ID = '1234';

type SomeType = string | null | undefined;
