import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cat } from '../shared/models/cat';
import { CatsService } from '../shared/services/cats.service';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

  cat: Cat = {} as Cat;

  constructor(
    private catsService: CatsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadCat();
  }

  loadCat() {
    let id = this.route.snapshot.paramMap.get("id");
    this.catsService.getCat(id).subscribe(c => this.cat = c);
  }

  checkout() {
    this.router.navigate(['cat', this.cat.id, 'success']);
  }

}
