import { Component, OnInit } from '@angular/core';
import { orderBy } from 'lodash-es';
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

  reorderCats(order: any) {
    this.cats = orderBy(this.cats, ['hourlyRate'], [order]);
  }
}
