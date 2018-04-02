import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTS
import { FileUploadComponent } from './components/file-upload/file-upload.component';

// SERVICES
import { FileUploadService } from './services/file-upload.service';

@NgModule({
    imports: [
      CommonModule
    ],
    declarations: [
      FileUploadComponent
    ],
    providers: [
      FileUploadService
    ],
    exports: [
      FileUploadComponent
    ]
})
export class FileUploadModule {

}
