import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Department, Sequence } from '../../entity/Entities';
import { Service } from '../service';
import { DEPARTMENT_SEQ_SERVICE, DEPARTMENT_SERVICE, OBSERVABLE_ERROR_HANDLER } from '../../constants/ServiceConstants';
import { SequenceService } from 'src/app/sequence.service';

@Injectable({
    providedIn: 'root'
})
export default class DepartmentService implements Service {

    constructor(private http: HttpClient, private sequenceService: SequenceService) {
        this.sequenceService.sequenceServiceName = DEPARTMENT_SEQ_SERVICE;
    }


    getAll(): Observable<Department[]> {
        return this.http.get<Department[]>(DEPARTMENT_SERVICE)
            .pipe(catchError(OBSERVABLE_ERROR_HANDLER));
    }

    getById(id: number): Observable<Department> {
        return this.http.get<Department>(DEPARTMENT_SERVICE + id)
            .pipe(catchError(OBSERVABLE_ERROR_HANDLER));
    }

    insert(department: Department): void {
        this.sequenceService.nextSeq().subscribe((sequence: Sequence) => {
            department.id = sequence.nextVal;

            this.http.post<Department>(DEPARTMENT_SERVICE, department)
                .pipe(catchError(OBSERVABLE_ERROR_HANDLER))
                .subscribe(() => {
                    this.sequenceService.increaseSeq();
                });
        })

    }

    update(department: Department): void {
        this.http.put<Department>(DEPARTMENT_SERVICE + department.id, department)
            .pipe(catchError(OBSERVABLE_ERROR_HANDLER))
            .subscribe();
    }

    delete(id: number): void {
        this.http.delete<Department>(DEPARTMENT_SERVICE + id)
            .pipe(catchError(OBSERVABLE_ERROR_HANDLER))
            .subscribe();
    }
}
