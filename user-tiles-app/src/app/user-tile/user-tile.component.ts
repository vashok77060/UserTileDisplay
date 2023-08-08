import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-user-tile',
  templateUrl: './user-tile.component.html',
  styleUrls: ['./user-tile.component.css']
})
export class UserTileComponent {

  @Input() user!: User;
  @Output() delete: EventEmitter<void> = new EventEmitter();

  onDelete(): void {
    this.delete.emit();
  }

}
