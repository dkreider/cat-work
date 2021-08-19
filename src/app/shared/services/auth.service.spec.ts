import { TestBed } from "@angular/core/testing";
import { AuthService } from "./auth.service"

describe("AuthService", () => {
    let service: AuthService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(AuthService);
    });

    it("should reject an invalid login", () => {
        let expected, actual;

        expected = false;
        actual = service.login("test", "test");

        expect(actual).toEqual(expected);
    });
})