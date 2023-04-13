///<reference path="formNamespace.ts"/>

namespace MyForm {
  class MyForm {
    private type: FormType = 'inline';
    private state: FormState = 'active';

    constructor(public email: string) {}

    getInfo(): FormInfo {
      return {
        type: this.type,
        state: this.state,
      };
    }
  }

  export const form2 = new MyForm('asdad');
  console.log(form2);
}

console.log(MyForm.form2);
