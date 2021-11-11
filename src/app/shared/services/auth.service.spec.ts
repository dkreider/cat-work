import { expressionType } from "@angular/compiler/src/output/output_ast";
import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { AuthService } from "./auth.service"

describe("AuthService", () => {
    let service: AuthService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(AuthService);
    });

    it("should reject an invalid login", fakeAsync(() => {

        service.login("test", "test").subscribe((result) => {
            expect(result).toBeDefined();
        });

        tick(1000);
    }));
})