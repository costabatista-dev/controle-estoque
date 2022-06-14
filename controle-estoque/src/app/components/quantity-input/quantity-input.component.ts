import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Quantity } from 'src/app/entity/Entities';

@Component({
    selector: 'app-quantity-input',
    templateUrl: './quantity-input.component.html',
    styleUrls: ['./quantity-input.component.css'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting:forwardRef(() => QuantityInputComponent),
            multi: true
        }
    ]
})
export class QuantityInputComponent implements OnInit, ControlValueAccessor {

    @Input()
    description: string = "";

    @Input()
    invalidFeedback: string = "";

    private _inputValue: string = '';

    isValid: boolean = true;

    @Output()
    value: EventEmitter<Quantity> = new EventEmitter();

    constructor() { }


    writeValue(obj: any): void {
        this._inputValue = obj;
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouch = fn;
    }

    onChange(v:any) {
    }

    onTouch() {
    }

    ngOnInit(): void {
    }

    changeInputValue(value: string) {
        this.value.emit(new Quantity(Number(value)));
        if (value.match(/^\d*$/g)) {
            this.isValid = true;
        } else {
            this.isValid = false;
        }
    }

    public get inputValue(): string {
        return this._inputValue;
    }

    public set inputValue(value:string) {
        if (value !== this._inputValue) {
            this._inputValue;
            this._inputValue = value;
            this.onChange(value);
        }
    }

}
