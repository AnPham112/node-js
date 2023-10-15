export class ApiResponse {
  constructor(code, data, error) {
    this.code = code
    this.data = data
    this.error = error
  }
}