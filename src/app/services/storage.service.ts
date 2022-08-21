import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  private getJSON<T>(key: string, defaultReturn = '{}') {
    return JSON.parse(localStorage.getItem(key) ?? defaultReturn);
  }

  get<T>(key: string) {
    const result: unknown = localStorage.getItem(key);
    try {
      return JSON.parse(result as string) as T;
    } catch (error) {
      return result as T;
    }
  }

  set(key: string, value: unknown) {
    let valueToBeStored = value;
    try {
      valueToBeStored = JSON.stringify(value);
    } finally {
      localStorage.setItem(key, valueToBeStored as string);
    }
  }

  getByProperty<T>(key: string, prop: string, defaultReturn = '{}') {
    const result = this.getJSON(key, defaultReturn);
    return result[prop] as T;
  }

  setByProperty(key: string, prop: string, propValue: unknown, defaultReturn = '{}') {
    const result = this.getJSON(key, defaultReturn);
    result[prop] = propValue ?? '';
    this.set(key, result);
  }

  remove(key: string) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing data.');
    }
  }

  removeProperty(key: string, prop: string) {
    const result = this.getJSON(key);
    delete result[prop];
    this.set(key, result);
  }
}