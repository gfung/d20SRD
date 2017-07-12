import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let user = {
      sessionTypes: [1, 2, 3, 4],
      session: {
        locationType: 4
      },
      user: {
        provider: 'hht',
        id: 12,
        displayName: 'Aaron Klose',
        emails: [{ value: 'example@gmail.com', type: 'Main' }],
        gravatar: '25dc91c7228b123e7ca77f66c2152e72',
        oRole: 'Rep',
        roleList: ['Int Rep'],
        teamID: 0,
      }
    };
    return { user };
  }
}
