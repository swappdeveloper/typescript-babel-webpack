import * as $ from 'jquery';

export class JQeuryHelper {
    public static getById(id: string): any {
        return $(`#${id}`);
    }
    public static getByTag(name: string): any {
        return $(`${name}`);
    }
}