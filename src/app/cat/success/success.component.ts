import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cat } from 'src/app/shared/models/cat';
import { CatsService } from 'src/app/shared/services/cats.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  cat: Cat = {} as Cat;

  constructor(
    private catsService: CatsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadCat();
  }

  loadCat() {
    let id = this.route.snapshot.paramMap.get("id");
    this.catsService.getCat(id).subscribe(c => this.cat = c);
  }

}
