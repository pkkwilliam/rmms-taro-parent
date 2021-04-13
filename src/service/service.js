const PUBLIC_COMPANY_SERVICE = "/public/v1/company"

export function GET_COMPANY_SERVICE(companyId) {
  return {
    url: PUBLIC_COMPANY_SERVICE,
    method: "GET",
  }
}