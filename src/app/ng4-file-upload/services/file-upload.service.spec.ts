import { FileUploadService } from './file-upload.service';
import { ReflectiveInjector } from '@angular/core';

describe('FileUploadService' , () => {

    beforeEach(() => {
      this.injector = ReflectiveInjector.resolveAndCreate([
        FileUploadService
      ]);
      this.fileUploadService = this.injector.get(FileUploadService);
    });

    it('should be defined', () => {
      expect(this.fileUploadService).toBeDefined();
    });

});
