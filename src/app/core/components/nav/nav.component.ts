import { Component, OnInit } from '@angular/core';
import { VersionService } from '../../version.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor(private version: VersionService) {}

  ngOnInit(): void {}

  onAdd() {
    // appel au service
    this.version.increment();
  }
}
