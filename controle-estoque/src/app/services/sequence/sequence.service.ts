import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { OBSERVABLE_ERROR_HANDLER } from '../../constants/ServiceConstants';
import { Sequence } from '../../entity/Entities';

@Injectable({
    providedIn: 'root'
})
export class SequenceService {
    private _sequenceServiceName: string;

    public get sequenceServiceName() {
        return this._sequenceServiceName;
    }

    public set sequenceServiceName(value: string) {
        this._sequenceServiceName = value;
    }

    constructor(private http: HttpClient) {
        this._sequenceServiceName = '';
    }

    nextSeq(): Observable<Sequence> {
        return this.http.get<Sequence>(this.sequenceServiceName)
            .pipe(catchError(OBSERVABLE_ERROR_HANDLER));
    }

    increaseSeq(): void {
        this.nextSeq().subscribe((data: Sequence) => {
            let nextVal = data.nextVal + 1;
            data.nextVal = nextVal;
            this.http.put<Sequence>(this.sequenceServiceName, data)
                .pipe(catchError(OBSERVABLE_ERROR_HANDLER))
                .subscribe();
        })
    }
}
