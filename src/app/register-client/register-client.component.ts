import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserServicesService } from '../services/user-services.service';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css']
})
export class RegisterClientComponent implements OnInit {
  form: FormGroup
  formacao = [
    { value: 'Infantil' },
    { value: 'Fundamental' },
    { value: 'Médio' },
    { value: 'Superior' }
  ]
  maxDate = new Date

  constructor(private fb: FormBuilder, public snk: MatSnackBar, private user: UserServicesService, private router: Router) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.form = this.fb.group({
      nome: ["", Validators.required],
      sobrenome: "",
      email: ["", Validators.email],
      datanascimento: [new Date(), Validators.required],
      escolaridade: ["", Validators.required],
    })
  }

  onSubmit(e: Event) {
    if (this.form.invalid) {
      let _msg = ''
      Object.keys(this.form.controls).forEach(ctrl => {
        const control = this.form.get(ctrl)
        _msg += control?.invalid ? `${ctrl}, ` : ''
      })
      this.snk.open(`preencha os campos: ${_msg}`, 'X', { duration: 2000 })
      return
    }
    else if (this.form.valid && this.form.dirty) {
      this.user.addUser(this.form.value).subscribe(data => {
        if (data.ok == false) {
          this.snk.open('Erro ao cadastrar cliente', 'X', { duration: 2000 })
        }
        else if (data.ok == true) {
          this.snk.open('Cliente cadastrado com sucesso', 'X', { duration: 2000 })
          window.location.reload()
        }
      })
    }
  }
}