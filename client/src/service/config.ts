export const TIME_OUT = 10000
export let BASE_URL = ""

if (process.env.NODE_ENV === "development") {
  BASE_URL = "http://httpbin.org"
} else if (process.env.NODE_ENV === "production") {
  BASE_URL = "生产环境"
} else if (process.env.NODE_ENV === "test") {
  BASE_URL = "测试环境"
}
