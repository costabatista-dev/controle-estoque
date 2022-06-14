import { HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";

export const DATA_SERVER = 'http://localhost:3000';

export const BRAND_SERVICE = DATA_SERVER + '/brands/';

export const BRAND_SEQ_SERVICE = DATA_SERVER + '/sequence/brand';

export const BATCH_SERVICE = DATA_SERVER + '/batches/';

export const BATCH_SEQ_SERVICE = DATA_SERVER + '/sequence/batch';

export const LOCATION_SERVICE = DATA_SERVER + '/locations/';

export const LOCATION_SEQ_SERVICE = DATA_SERVER + '/sequence/location';

export const DEPARTMENT_SERVICE = DATA_SERVER + '/departments/';

export const DEPARTMENT_SEQ_SERVICE = DATA_SERVER + '/sequence/department';

export const PRODUCTS_SERVICE = DATA_SERVER + '/products/';

export const PRODUCT_SEQ_SERVICE = DATA_SERVER + '/sequence/product';

export const MOVEMENT_SERVICE = DATA_SERVER + '/movement/';

export const MOVEMENT_SEQ_SERVICE = DATA_SERVER + '/sequence/movement';

export const OBSERVABLE_ERROR_HANDLER = function (error: HttpErrorResponse) {
    if (error.status === 0) {
        console.log('An error occurred:', error.error);
    } else {
        console.log('Backend returned code ${error.status}, body was:', error.error);
    }
    return throwError(() => new Error('An error occurred. Try again.'));
}

export const HTTP_UNDEFINED = "HTTP service is undefined";
