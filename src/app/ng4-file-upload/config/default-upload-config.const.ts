import { FileUploadConfig } from './file-upload.interface';
import { FileType } from './file-type.enum';

export const defaultFileUploadConfig: FileUploadConfig = {
    maxFileCount : 0,
    maxEachFileSize: 2,
    maxTotalFileSize: 6,
    readFileAs: FileType.BINARY_STRING
};
