import { FileType } from './file-type.enum';

export interface FileUploadConfig {
    maxFileCount: number;
    readFileAs: FileType;
    maxEachFileSize?: number;
    maxTotalFileSize?: number;
}
