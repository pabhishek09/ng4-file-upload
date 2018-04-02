import { FileUploadComponent } from './file-upload.component';
import { TestBed, ComponentFixture, async, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { DebugElement, Query } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Rx';
import { FileUploadService } from '../../services/file-upload.service';

describe('File upload component', () => {
  let comp: FileUploadComponent;
  let fixture: ComponentFixture<FileUploadComponent>;
  const mockFileUploadService = {
      verifyUpload() {
        return {
            verificationSuccess: false,
            verificationStatus: 4
        };
      }
    };
//   let de: DebugElement;
//   let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [
          FileUploadComponent
        ],
      providers: [
        {provide: FileUploadService, useValue: mockFileUploadService},
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadComponent);

    comp = fixture.componentInstance;

  });

  describe('should be initialised', () => {

    it('controls should be initialised', () => {
        const compInstance = fixture.debugElement.componentInstance;
        expect(compInstance).toBeTruthy();
    });

  });

});
