export class ResLocals {
  sessionTypes: number[];
  user: {
    provider: string,
    id: number;
    displayName: string;
    emails: [{ value: string, type: string }];
    gravatar: string;
    oRole: string;
    roleList: string[];
    teamID: number;
  };
  session: {
    locationType: number;
  };
}
