import { Component, OnInit } from '@angular/core';
import { VersionService } from '../../version.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public v!: number;

  constructor(private version: VersionService) {
    this.version.version$.subscribe((data) => {
      console.log(data);
      this.v = data; 
    });
  }

  ngOnInit(): void {}
}
