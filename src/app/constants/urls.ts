import { environment } from '../../environments/environment';

export class Urls {
    public static users = `${ environment.apiBaseUrl }/users`;
    public static searchUsers = `${ environment.apiBaseUrl }/search/users`;
}
