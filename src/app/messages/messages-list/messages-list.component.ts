import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-messages-list',
  standalone: true,
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesListComponent {
  private messagesService = inject(MessagesService);
  messages = this.messagesService.allMessages


  //private cdRef = inject(ChangeDetectorRef); 
  //private destroyRef = inject(DestroyRef);

  //messages: string[] = [];

  //ngOnInit(): void {
  //  this.messagesService.messages$.subscribe((messages) => {
  //    this.messages = messages;
  //    this.cdRef.markForCheck();
  //  });
  //  this.destroyRef.onDestroy(() => {
  //    subscribe.unsubscribe();
  //  });

  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }
}
