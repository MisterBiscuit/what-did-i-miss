import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  public save<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public get<T>(key: string): T | undefined {
    const value = localStorage.getItem(key);
    if (value === undefined || value === null || !(typeof value === 'string')) {
      return undefined;
    }
    return JSON.parse(value) as T;
  }

  public remove(key: string): void {
    localStorage.removeItem(key);
  }
}
