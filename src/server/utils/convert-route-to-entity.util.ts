const mapping: Record<string, string> = {
  'carbon-accountings': 'carbon_accounting',
  companies: 'company',
  'spending-data': 'spending_data',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
