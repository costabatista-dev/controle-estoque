import { HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";

export const DATA_SERVER = 'http://localhost:3000';

export const BRAND_SERVICE = DATA_SERVER + '/brands/';

export const BATCH_SERVICE = DATA_SERVER + '/batches/';

export const LOCATION_SERVICE = DATA_SERVER + "/locations/";

export const DEPARTMENT_SERVICE = DATA_SERVER + "/departments/";

export const PRODUCTS_SERVICE = DATA_SERVER + "/products/";

export const MOVEMENT_SERVICE = DATA_SERVER + "/movement/";

export const OBSERVABLE_ERROR_HANDLER = function(error: HttpErrorResponse) {
  if (error.status === 0) {
    console.log('An error occurred:', error.error);
  } else {
    console.log('Backend returned code ${error.status}, body was:', error.error);
  }
  return throwError(() => new Error('An error occurred. Try again.'));
}
