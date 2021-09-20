import { Component, OnInit } from '@angular/core';
import { MagazzinoService } from '../magazzino.service';

@Component({
  selector: 'app-magazzino',
  templateUrl: './magazzino.component.html',
  styleUrls: ['./magazzino.component.css']
})
export class MagazzinoComponent implements OnInit {

  movimenti: object;

  constructor(private conn: MagazzinoService) { }

  ngOnInit() {
    this.conn.getMovimenti().subscribe(
      mov => {
        console.log(mov);

        this.movimenti = mov;
      }
    );

  }

}
