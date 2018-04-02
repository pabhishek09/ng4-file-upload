import { TestBed, async } from '@angular/core/testing';
import { Component } from '@angular/core';
import { AppComponent } from './app.component';

@Component(
  {
    selector: 'ng4-file-upload',
    template: `<input type='file' id='ile-upload'>`
  }
)
export class FileUploadComponent { }

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        FileUploadComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
