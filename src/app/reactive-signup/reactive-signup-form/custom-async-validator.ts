import { AbstractControl, AsyncValidatorFn } from "@angular/forms";
import { catchError, map, of } from "rxjs";
import { UserService } from "src/app/user.service";

export class CustomAsyncValidator {
    static unique(userService: UserService) : AsyncValidatorFn {
        return (control: AbstractControl) => {
            return userService.checkDuplicity(control.value).pipe(map((res: { valid: boolean }) => {
                if(res && res?.valid === true) {
                    return null;
                } else {
                    return {
                        isNotUniqueAsync: true,
                    }
                }
            }),
            catchError((error: any) => {
                console.log(error);
                return of({
                    isNotUniqueAsync: true
                })
            })
            )
        }
    }
}