import { Component, OnInit } from '@angular/core';
import { Cat } from '../shared/models/cat';
import { CatsService } from '../shared/services/cats.service';

@Component({
  selector: 'cw-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {

  cats: Cat[] = [];

  constructor(private catsService: CatsService) { }

  ngOnInit(): void {
    this.loadCats();
  }

  loadCats() {
    this.catsService.getCats().subscribe(cats => this.cats = cats);
  }

}
