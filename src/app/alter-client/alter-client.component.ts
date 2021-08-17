import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserServicesService } from '../services/user-services.service';

@Component({
  selector: 'app-alter-client',
  templateUrl: './alter-client.component.html',
  styleUrls: ['./alter-client.component.css']
})
export class AlterClientComponent implements OnInit {

  form: FormGroup
  formacao = [
    'Infantil',
    'Fundamental',
    'Médio',
    'Superior'
  ]
  maxDate = new Date
  subscription: Subscription
  id: string

  constructor(private fb: FormBuilder, public snk: MatSnackBar, private user: UserServicesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initForm()
    this.subscription = this.route.params.subscribe((params: Params) => { this.id = params.id, console.log(this.id) })
    this.user.getUser(this.id).subscribe(user => { this.setForm(user.body), console.log(user) })
  }

  initForm() {
    this.form = this.fb.group({
      id: [''],
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      email: ['', Validators.email],
      datanascimento: ['', Validators.required],
      escolaridade: ['', Validators.required],
    })
  }

  setForm(user: any) {
    console.log(user.escolaridade)
    this.form.setValue({
      id: user.id,
      nome: user.nome,
      sobrenome: user.sobrenome,
      email: user.email,
      datanascimento: user.dataNascimento,
      escolaridade: user.escolaridade
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
      this.user.editUser(this.form.value).subscribe(data => {
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