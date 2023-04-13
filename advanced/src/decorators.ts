// function Log(constructor: Function) {
//   console.log(constructor);
// }

// function Log2(target: any, propName: string | Symbol) {
//   console.log(target);
//   console.log(propName);
// }

// function Log3(
//   target: any,
//   propName: string | Symbol,
//   descriptor: PropertyDescriptor
// ) {
//   console.log(target);
//   console.log(propName);
//   console.log(descriptor);
// }

// @Log
// class Component {
//   @Log2
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }

//   @Log3
//   get componentName() {
//     return this.name;
//   }

//   @Log3
//   logName(): void {
//     console.log('Component name: ', this.name);
//   }
// }

interface ComponentDecorator {
  selector: string;
  template: string;
}

function Component(config: ComponentDecorator) {
  return function <T extends { new (...args: any[]): object }>(Constructor: T) {
    return class extends Constructor {
      constructor(...args: any[]) {
        super(...args);

        const el = document.querySelector(config.selector);

        if (el) {
          el.innerHTML = config.template;
        }
      }
    };
  };
}

function Bind(
  _: any,
  _2: any,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  const original = descriptor.value;

  return {
    configurable: true,
    enumerable: false,
    get() {
      return original.bind(this);
    },
  };
}

@Component({
  selector: '#card',
  template: ` <div class="card">
    <div class="card-content">
      <span class="card-title">Card component</span>
    </div>
  </div>`,
})
class CardComponent {
  constructor(public name: string) {}

  @Bind
  logName(): void {
    console.log('Component name: ', this.name);
  }
}

const card = new CardComponent('My card component');

const btn2 = document.querySelector('#btn');

if (btn2) {
  btn2?.addEventListener('click', card.logName);
} else {
  console.log('no button');
}

// ==================

type ValidatorType = 'required' | 'email';

interface ValidatorConfig {
  [props: string]: {
    [validateProp: string]: ValidatorType;
  };
}

const validators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  validators[target.constructor.name] = {
    ...validators[target.constructor.name],
    [propName]: 'required',
  };
}

function validate(obj: any): boolean {
  const objectConfig = validators[obj.constructor.name];

  if (!objectConfig) {
    return true;
  }

  let isValid = true;
  Object.keys(objectConfig).forEach((key) => {
    if ((objectConfig[key] = 'required')) {
      isValid = isValid && !!obj[key];
    }
  });

  return isValid;
}

class Form {
  @Required
  public email: string | void;

  constructor(email?: string) {
    this.email = email;
  }
}

const form = new Form('email');

if (validate(form)) {
  console.log('Valid ', form);
} else {
  console.log('Validation error');
}
