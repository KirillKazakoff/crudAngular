// /* eslint-disable @angular-eslint/directive-selector */
// import { Directive, ElementRef, Input } from '@angular/core';
// import { NgModel } from '@angular/forms';

// @Directive({
//     selector: '[inputWrapper]',
// })
// export class InputWrapperDirective {
//     constructor(private ref: ElementRef<HTMLDivElement>) {}
//     private default = 'input-wrapper user__cell';
//     private className = this.default;

//     ngOnInit() {
//         this.default = this.cls
//             ? `${this.default} user__cell-${this.cls} `
//             : this.default;
//     }

//     ngDoCheck() {
//         const { invalid, touched } = this.model;
//         this.className = invalid && touched ? `${this.default} is-invalid` : this.default;
//         this.ref.nativeElement.className = this.className;
//     }
//     @Input() model!: NgModel;
//     @Input() cls = '';
// }
