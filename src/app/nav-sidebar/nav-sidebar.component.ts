import { Component, OnInit } from "@angular/core";

export interface Employee {
  id: number;
  emp_opt: string;
}
interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-nav-sidebar",
  templateUrl: "./nav-sidebar.component.html",
  styleUrls: ["./nav-sidebar.component.scss"]
})
export class NavSidebarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  emp: Employee[] = [
    {
      id: 0,
      emp_opt: "View Employee"
    },
    {
      id: 1,
      emp_opt: "Add Employee"
    }
  ];
  foods: Food[] = [
    { value: "steak-0", viewValue: "Steak" },
    { value: "pizza-1", viewValue: "Pizza" },
    { value: "tacos-2", viewValue: "Tacos" }
  ];
}
