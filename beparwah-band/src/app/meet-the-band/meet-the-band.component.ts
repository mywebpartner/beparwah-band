import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meet-the-band',
  templateUrl: './meet-the-band.component.html',
  styleUrls: ['./meet-the-band.component.css']
})
export class MeetTheBandComponent implements OnInit {
  bandMembers = [
    {
      name: 'SAHIL KAMBOJ',
      role: 'SINGER',
      image: 'assets/singer.png',
      description: '  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque harum voluptates veniam amet aut esse omnis accusantium distinctio quisquam assumenda accusamus nobis labore sunt tempora aliquam, quasi nam rerum perferendis impedit? Sint quisquam quae ex beatae repellat dicta iste neque odit nobis itaque? Facere, laborum consequuntur voluptatem odio sint rem.'
    },
    {
      name: 'ARGAD',
      role: 'PIANIST',
      image: 'assets/pianist.png',
      description: '  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque harum voluptates veniam amet aut esse omnis accusantium distinctio quisquam assumenda accusamus nobis labore sunt tempora aliquam, quasi nam rerum perferendis impedit? Sint quisquam quae ex beatae repellat dicta iste neque odit nobis itaque? Facere, laborum consequuntur voluptatem odio sint rem.'
    },
    {
      name: 'AYUSH KASHYAP',
      role: 'PERCUSSIONS',
      image: 'assets/pess.png',
      description: '  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque harum voluptates veniam amet aut esse omnis accusantium distinctio quisquam assumenda accusamus nobis labore sunt tempora aliquam, quasi nam rerum perferendis impedit? Sint quisquam quae ex beatae repellat dicta iste neque odit nobis itaque? Facere, laborum consequuntur voluptatem odio sint rem.'
    }
  ];

  constructor() { }

  ngOnInit(): void { }
}
