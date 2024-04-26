import { Injectable } from '@nestjs/common';
import { nanoid } from 'nanoid';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UtilsService {
  generateUUID(): string {
    return uuidv4();
  }
  generateNanoID(): string {
    return nanoid();
  }
}

