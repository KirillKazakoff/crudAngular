import { Directive } from '@angular/core';
import {
    NG_VALIDATORS,
    Validator,
    ValidatorFn,
    AbstractControl,
    ValidationErrors,
} from '@angular/forms';

@Directive({
    selector: '[appAgeValidator]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useClass: AgeValidatorDirective,
            multi: true,
        },
    ],
})
export class AgeValidatorDirective implements Validator {
    validator: ValidatorFn;
    constructor() {
        this.validator = this.ageValidator();
    }

    validate(control: AbstractControl<any, any>): ValidationErrors | null {
        return this.validator(control);
    }

    // eslint-disable-next-line class-methods-use-this
    ageValidator(): ValidatorFn {
        return (control) => {
            console.log(control.value);
            if (control.value && control.value < 0) {
                return { wrongAge: true };
            }
            return null;
        };
    }
}
