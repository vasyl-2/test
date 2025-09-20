export interface IDbConnector {
  getDB(): any;
  setDB(): Promise<any>;
}
