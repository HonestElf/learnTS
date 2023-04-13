"use strict";
var MyForm;
(function (MyForm_1) {
    class MyForm {
        constructor(email) {
            this.email = email;
            this.type = 'inline';
            this.state = 'active';
        }
        getInfo() {
            return {
                type: this.type,
                state: this.state,
            };
        }
    }
    MyForm_1.form2 = new MyForm('asdad');
    console.log(MyForm_1.form2);
})(MyForm || (MyForm = {}));
console.log(MyForm.form2);
//# sourceMappingURL=namespaces.js.map