import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../data/datafake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{

  @Input()
  photoCover:string = ""
  @Input()
  textTitle:string = ""
  @Input()
  textDescription:string = ""
  private id:string | null = "0"


  constructor (
    private route:ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )

    this.setValuesComponent(this.id)
  }


setValuesComponent(id:string | null){
  const result = dataFake.filter(article => article.id == id)[0]


  this.textTitle = result.title
  this.textDescription = result.description
  this.photoCover = result.photoCover

}

}
