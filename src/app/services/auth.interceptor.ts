import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const tmpToken = localStorage.getItem('token');
        if(!!tmpToken) {
            const reqWithToken = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + tmpToken)
            })
            return next.handle(reqWithToken);
        }

        // bez modifikovane hlavicky
        return next.handle(req);
    }
}