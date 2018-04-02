import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { FileUploadConfig } from '../config/file-upload.interface';
// import { File } from '../config/file.interface';
import { FileType } from '../config/file-type.enum';
import { FileVerificationStatus } from '../config/file-verification-status.enum';
import { FileVericationRes } from '../config/file-verification-res.interface';


@Injectable()
export class FileUploadService {

    verifyUpload(files: Array<File>, fileUploadConfig: FileUploadConfig) {
        let fileCount = 0;
        let totalFileSize = 0;
        Object.keys(files).forEach((key) => {
            fileCount++;
            totalFileSize += files[key].size;
            if (fileUploadConfig.maxEachFileSize && ((files[key].size / 1024) > fileUploadConfig.maxEachFileSize)) {
                return <FileVericationRes> {
                    verificationSuccess: false,
                    verificationStatus: FileVerificationStatus.MAX_EACH_FILE_SIZE_EXCEED
                };
            }
        });
        if (fileCount > fileUploadConfig.maxFileCount) {
            return <FileVericationRes> {
                verificationSuccess: false,
                verificationStatus: FileVerificationStatus.MAX_FILES_COUNT_EXCEED
            };
        }
        if (fileCount > fileUploadConfig.maxFileCount) {
            return <FileVericationRes> {
                verificationSuccess: false,
                verificationStatus: FileVerificationStatus.MAX_TOTAL_FILE_SIZE_EXCEED
            };
        }
        return <FileVericationRes> {
            verificationSuccess: true,
            verificationStatus: FileVerificationStatus.VERIFIED
        };
    }
}
