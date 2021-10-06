import { HttpClient } from "@angular/common/http";
import { CatsService } from "./cats.service";
import { createSpyFromClass, Spy } from 'jasmine-auto-spies';
import { Cat } from "../models/cat";
import { TestBed } from "@angular/core/testing";

describe("CatsService", () => {
    let service: CatsService;
    let httpSpy: Spy<HttpClient>;
    let fakeCats: Cat[] = [
        {
            id: 1,
            name: "First Cat",
            description: "",
            hourlyRate: 19,
            favorite: false
        },
        {
            id: 2,
            name: "Second Cat",
            description: "",
            hourlyRate: 11,
            favorite: false
        }
    ];

    beforeEach(() => {

        TestBed.configureTestingModule({
            providers: [
                CatsService,
                {
                    provide: HttpClient, useValue: createSpyFromClass(HttpClient)
                }
            ]
        });

        service = TestBed.inject(CatsService);
        httpSpy = TestBed.inject<any>(HttpClient);

    });

    it("should return all cats", (done: DoneFn) => {
        httpSpy.get.and.nextWith(fakeCats);

        service.getCats().subscribe(cats => {
            expect(cats.length).toEqual(fakeCats.length);
            done();
        }, 
            done.fail
        );

        expect(httpSpy.get.calls.count()).toEqual(1);
    });

    it("should return a specific cat by id", (done: DoneFn) => {

        httpSpy.get.and.nextWith(fakeCats[0]);

        service.getCat(fakeCats[0].id).subscribe((cat) => {
            expect(cat).toEqual(fakeCats[0]);
            done();
        }, 
            done.fail
        );
            
    });
})