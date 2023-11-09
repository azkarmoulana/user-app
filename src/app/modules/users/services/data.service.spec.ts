import { of } from 'rxjs';
import { DataService } from './data.service';

export const GET_USERS_API = 'https://reqres.in/api/users';

describe('DataService', () => {
  let service: DataService;
  let httpClientSpy: any;

  beforeEach(() => {
    httpClientSpy = {
      get: jest.fn(),
    };
    service = new DataService(httpClientSpy);
  });

  it('should create service', () => {
    expect(service).toBeTruthy();
  });

  it('should call the getUsers', () => {
    const res: any = [];
    const userCount = 10;
    const params = {
      per_page: userCount,
    };
    jest.spyOn(httpClientSpy, 'get').mockReturnValue(of(res));
    service.getUsers(userCount).subscribe({
      next: data => {
        expect(data).toBe(res);
      },
      error: error => {
        expect(error).toBe([]);
      },
    });

    expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
    expect(httpClientSpy.get).toHaveBeenCalledWith(GET_USERS_API, { params });
  });

  it('should call the getNewUser', () => {
    const res: any = [];
    const userId = 1;
    jest.spyOn(httpClientSpy, 'get').mockReturnValue(of(res));
    service.getNewUser(userId);

    expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
    expect(httpClientSpy.get).toHaveBeenCalledWith(
      GET_USERS_API + `/${userId}`
    );
  });
});
