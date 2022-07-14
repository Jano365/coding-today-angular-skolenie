import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { lastValueFrom, Subscription } from 'rxjs';
import { UserService } from 'src/app/user.service';
import { User } from '../interfaces/user.interface';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class SignupFormComponent implements OnInit, OnDestroy {
  @ViewChild('f') f!: NgForm;
  user: User = {
    name: "",
    account: {
      email: "",
      confirm: ""
    },
    password: ""
  }
  isSubmitted: boolean = false;
  subscription!: Subscription;
  
  constructor(private userService: UserService, private changeDetectorRef: ChangeDetectorRef) { }

  async ngOnInit() {
    console.log('formular: ', this.f);


    const response = await lastValueFrom(this.userService.getById(1));
    this.user = response;
    this.changeDetectorRef.detectChanges();
  }

  validateWords($event: any) {
    const value = $event.target.value;
    //api 
    if(!!value && value.includes('test')) {
      const nameCtrl = this.f.form.controls.name;
      nameCtrl.setErrors({blackListed: true})
    }
    console.log(this.f)
  }

  // ngDoCheck()	{
  //   console.log('run')
  // }

  ngAfterViewInit() {
    console.log('formular: ', this.f);
  }

  async onSubmit({value, valid}: {value: User, valid: boolean | null}) {
    if(valid) {
      this.isSubmitted = true
      // await this.save(value);

      this.userService.save(value).subscribe(res => console.log(res))
      this.f.reset();
    }
  }

  // private async save(payload: User) {
  //   try {
  //     const res = await lastValueFrom(this.userService.save(payload));

  //     if(res?.status === true) {
  //       alert('Ulozeno...');
  //       return;
  //     }

  //     alert('Neco se pokazilo...')
  //   } catch (error) {
  //     console.log(error)
  //     alert('Vsechno spadlo......')
  //   }
  // }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }




}
