import { AbstractControl } from "@angular/forms";

export class CustomValidator {
    static unique(control: AbstractControl) {
        const db = ["test@gmail.com"];

        if(db.includes(control.value)) {
            return {
                isNotUnique: true
            }
        }

        return null
    }
}