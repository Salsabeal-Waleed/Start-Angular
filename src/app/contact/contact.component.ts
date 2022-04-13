import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
    // $(() => {
    //   $("body").on("input propertychange", ".floating-label-form-group", (e: { target: any; }) => {
    //     $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    //   }).on("focus", ".floating-label-form-group", () => {
    //     $(this).addClass("floating-label-form-group-with-focus");
    //   }).on("blur", ".floating-label-form-group", () => {
    //     $(this).removeClass("floating-label-form-group-with-focus");
    //   });
    // });

  }
  }


