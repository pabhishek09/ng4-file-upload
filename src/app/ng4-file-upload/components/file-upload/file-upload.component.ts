import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FileUploadConfig } from '../../config/file-upload.interface';
import { CustomFile } from '../../config/file.interface';
import { defaultFileUploadConfig } from '../../config/default-upload-config.const';
import { FileVericationRes } from '../../config/file-verification-res.interface';
import { FileUploadService } from '../../services/file-upload.service';

@Component({
    selector: 'ng4-file-upload',
    templateUrl: './file-upload.component.html',
    styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit, OnChanges {

    uploadedFiles: Array<File> = new Array();
    @Input() fileUploadConfig: FileUploadConfig;
    @Input() files: Array<File>;

    constructor(
        private fileUploadService: FileUploadService
    ) {}

    ngOnInit() {
        if (!this.fileUploadConfig) {
            this.fileUploadConfig = defaultFileUploadConfig;
        }
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.hasOwnProperty('files')) {
            // Handle
        }
    }

    handleFileSelect($event) {
        const uploads: any[] = $event['target']['files'];
        const verification: FileVericationRes = this.fileUploadService.verifyUpload(uploads, this.fileUploadConfig);
        console.log(verification);
        if (verification.verificationSuccess) {

        } else {

        }
    }


}
