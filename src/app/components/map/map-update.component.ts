import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mapa-editar',
  templateUrl: './map-update.component.html'
})
export class MapUpdateComponent implements OnInit {

  form: FormGroup;

  constructor(
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<MapUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      console.log(data);
      this.form = fb.group({
        title: data.title,
        desc: data.desc
      });
    }

  ngOnInit(): void {
  }

  saveChanges(): void{
    this.dialogRef.close(this.form.value);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
