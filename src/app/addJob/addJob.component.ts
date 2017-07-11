import { Component, OnInit } from '@angular/core';
import { JobForm } from '../definitions/jobForm';
import { ToolService } from '../services/user.services';

@Component({
  selector: 'add-job',
  styles: [`
    .wrapper-md {
      padding-left:220px;
    }
  `],
  templateUrl: './addJob.component.html',
  providers: [ToolService]
})

export class AddJobComponent implements OnInit {
  // vars
  submitted = false;

  constructor(private Tool: ToolService) { }

  onSubmit() { this.submitted = true; }

  getTools(): void {
    this.Tool.getTools()
      .then((toolList) => {
        console.log(toolList);
      });
  }

  ngOnInit() {

  };
}
