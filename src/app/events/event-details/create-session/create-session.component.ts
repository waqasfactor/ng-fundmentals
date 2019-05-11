import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ValidatorFn } from '@angular/forms';
import { ISession } from '../../shared/event.model';

@Component({
  selector: 'create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {
  newSessionForm: FormGroup;
  @Output() saveNewSession = new EventEmitter();
  @Output() cancelAddSessioin = new EventEmitter();

  constructor(private fb : FormBuilder) { }

  ngOnInit() {
    this.createSessionForm();
  }
  createSessionForm(){
    this.newSessionForm = this.fb.group({
      name: ['', Validators.required],
      presenter: ['', Validators.required],
      duration: ['', Validators.required],
      level: ['', Validators.required],
      abstract: ['', [Validators.required, Validators.maxLength(400)]]
    });
    this.newSessionForm.valueChanges.subscribe(value=> {
      console.log(value);
    })
  }

  saveSession(){
    let session: ISession = {
      id: undefined,
      name: this.newSessionForm.value.name,
      presenter: this.newSessionForm.value.presenter,
      duration: +this.newSessionForm.value.duration,
      level: this.newSessionForm.value.level,
      abstract: this.newSessionForm.value.abstract,
      voters: []
    }

    this.saveNewSession.emit(session)
  }

  cancel() {
    this.cancelAddSessioin.emit();
  }

}
