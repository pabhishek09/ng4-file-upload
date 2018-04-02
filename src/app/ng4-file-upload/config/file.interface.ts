import { FileType } from './file-type.enum';

export interface CustomFile {
    name: string;
    type: FileType;
    content: any;
    size?: number;
    fileType?: string;
    lastModifiedMilliseconds?: number;
    lastModifiedTimestamp?: Date;
}
