import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Brand, Sequence } from '../../entity/Entities';
import { Service } from '../service';
import { BRAND_SEQ_SERVICE, BRAND_SERVICE, OBSERVABLE_ERROR_HANDLER } from '../../constants/ServiceConstants';
import { catchError, Observable } from 'rxjs';
import { SequenceService } from 'src/app/sequence.service';

@Injectable({
    providedIn: 'root'
})
export default class BrandService implements Service {

    constructor(private http: HttpClient, private sequenceService: SequenceService) {
    }

    getAll(): Observable<Brand[]> {
        return this.http.get<Brand[]>(BRAND_SERVICE)
            .pipe(catchError(OBSERVABLE_ERROR_HANDLER));
    }

    getById(id: number): Observable<Brand> {
        return this.http.get<Brand>(BRAND_SERVICE + id)
            .pipe(catchError(OBSERVABLE_ERROR_HANDLER));
    }

    insert(brand: Brand): void {
        this.sequenceService.sequenceServiceName = BRAND_SEQ_SERVICE;

        this.sequenceService.nextSeq().subscribe((sequence: Sequence) => {
            brand.id = sequence.nextVal;

            this.http.post<Brand>(BRAND_SERVICE, brand)
                .pipe(catchError(OBSERVABLE_ERROR_HANDLER))
                .subscribe(() => {
                    this.sequenceService.increaseSeq();
                });
        })

    }

    update(brand: Brand): void {
        this.http.put<Brand>(BRAND_SERVICE + brand.id, brand)
            .pipe(catchError(OBSERVABLE_ERROR_HANDLER))
            .subscribe();
    }

    delete(id: number): void {
        this.http.delete<Brand>(BRAND_SERVICE + id)
            .pipe(catchError(OBSERVABLE_ERROR_HANDLER))
            .subscribe();
    }
}
