import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent implements OnInit {
  isDragOver = false;
  nextStep = false;
  file: File | null = null;

  // Form
  title = new FormControl('', [Validators.required, Validators.minLength(3)]);

  uploadForm = new FormGroup({
    title: this.title,
  });

  constructor() {}

  ngOnInit(): void {}

  // Read & process the uploaded file
  storeFile(event: Event) {
    this.isDragOver = false;

    this.file = (event as DragEvent).dataTransfer?.files.item(0) ?? null;

    // Validation of File Type
    if (!this.file || this.file.type !== 'video/mp4') {
      return;
    }

    this.title.setValue(this.file.name.replace(/\.[^/.]+$/, ''));
    this.nextStep = true;
  }

  // Handle form Submission
  uploadFile() {
    console.log('File Uploaded!');
  }
}
