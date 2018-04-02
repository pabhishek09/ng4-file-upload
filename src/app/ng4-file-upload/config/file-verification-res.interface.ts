import { FileVerificationStatus } from './file-verification-status.enum';

export interface FileVericationRes {
    verificationSuccess: boolean;
    verificationStatus: FileVerificationStatus;
}
