import { Category } from "./category";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.scss"]
})
export class CategoriesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  categories: Category[] = [
    {
      id: 1,
      title: "Doctor"
    },
    {
      id: 2,
      title: "Nurse"
    },
    {
      id: 3,
      title: "Receptionist"
    },
    {
      id: 4,
      title: "Attender"
    }
  ];

  idnxt: number = 5;

  selectedCat: Category;

  onSubmit(f: NgForm) {
    console.log(f.value["cat_title"]);
    this.categories.push({ id: this.idnxt++, title: f.value["cat_title"] });
  }
  catDel(cat: Category, index?: number) {
    let del_id = cat["id"];
    this.categories.splice(index, 1);
  }
}
