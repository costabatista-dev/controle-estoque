import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Entity } from '../../entity/Entities';

@Component({
    selector: 'app-search-component',
    templateUrl: './search-component.component.html',
    styleUrls: ['./search-component.component.css'],
    providers: [
        {
            provide:NG_VALUE_ACCESSOR,
            useExisting:forwardRef(() => SearchComponentComponent),
            multi:true
        }
    ]
})
export class SearchComponentComponent implements OnInit, ControlValueAccessor {

    @Input()
    title: string = "";

    @Input()
    data: Entity[] = [];

    @Input()
    notFoundMessage: string = "";

    @Input()
    invalidFeedbackMessage: string = "";

    @Input()
    placeholder: string = "";

    @Output()
    selected: EventEmitter<Entity> = new EventEmitter();

    isValid: boolean = true;
    keyword: string = "name";

    private _value: string;

    public get value(): string {
        return this._value;
    }

    public set value(value: string) {
        if (value !== this._value) {
            this._value;
            this._value = value;
            this.onChange(value);
        }

    }

    constructor() {
        this._value = '';
    }

    onChange(v:any) {

    }

    onTouch() {

    }

    writeValue(obj: any): void {
        this._value = obj;
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouch = fn;
    }

    ngOnInit(): void {
    }

    selectData(event: Entity) {
        this.selected.emit(event);
    }


}
