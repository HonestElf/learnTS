interface Person {
  name: string;
  age: number;
}

type PersoKeys = keyof Person;

let key: PersoKeys = 'name';
key = 'age';

// key = 'job';

type User = {
  _id: number;
  name: string;
  email: string;
  createdAt: Date;
};

type UserKeysNoMeta = Exclude<keyof User, '_id' | 'createdAt'>;
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'>;
let u1: UserKeysNoMeta = 'name';
// u1 = '_id';
