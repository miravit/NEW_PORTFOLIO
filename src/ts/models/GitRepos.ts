export class GitRepos {
  constructor(
    public name: string,
    public url: string,
    public updated_at: string
  ) {
    this.name = name;
    this.url = url;
    this.updated_at = updated_at;
  }
}
