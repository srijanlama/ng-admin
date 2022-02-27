import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../profile.model';

@Component({
  selector: 'app-profile-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  @Input() messages: Message[] = [];

  constructor () { }

  ngOnInit(): void {
  }

}
