import { UsersService } from './users.service';

describe('UsersService', () => {
  let usersService: UsersService;

  beforeEach(() => {
    usersService = new UsersService();
  });

  it('should set all users', () => {
    const payload = {
      data: [
        {
          id: 1,
          first_name: 'test name',
          last_name: 'test last name',
          email: 'sample@somethign.com',
          avatar: 'avatar.jpg',
        },
      ],
    };

    usersService.setAllUsers(payload);

    expect(usersService['users']).toEqual([
      {
        id: 1,
        firstName: 'test name',
        lastName: 'test last name',
        email: 'sample@somethign.com',
        avatar: 'avatar.jpg',
        isFavourite: false,
      },
    ]);

    usersService.users$.subscribe(users => {
      expect(users).toEqual(usersService['users']);
    });
  });

  it('should set a single user', () => {
    const payload = {
      data: {
        id: 2,
        first_name: 'jane',
        last_name: 'alex',
        email: 'jane@example.com',
        avatar: 'avatar.jpg',
      },
    };

    usersService.setUser(payload);

    expect(usersService['users']).toEqual([
      {
        id: 2,
        firstName: 'jane',
        lastName: 'alex',
        email: 'jane@example.com',
        avatar: 'avatar.jpg',
        isFavourite: false,
      },
    ]);

    usersService.users$.subscribe(users => {
      expect(users).toEqual(usersService['users']);
    });
  });

  it('should add a favorite user', () => {
    usersService['users'] = [
      {
        id: 1,
        firstName: 'henn',
        lastName: 'smith',
        email: 'hen@example.com',
        avatar: 'avatar.jpg',
        isFavourite: false,
      },
      {
        id: 2,
        firstName: 'maxx',
        lastName: 'well',
        email: 'max@example.com',
        avatar: 'avatar.jpg',
        isFavourite: false,
      },
    ];

    const initialFavUsersLength = usersService['favUsers'].length;

    usersService.addFavUser(1);

    expect(usersService['users'][0].isFavourite).toBe(true);

    expect(usersService['favUsers'].length).toBe(initialFavUsersLength + 1);

    usersService.favUsers$.subscribe(favUsers => {
      expect(favUsers).toEqual(usersService['favUsers']);
    });
  });
});
