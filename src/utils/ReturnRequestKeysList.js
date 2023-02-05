export const initialKeysRequestList = {
  count: "",
  next: "",
  previous: "",
  results: [],
};

export function addValueToKeyRequestList(res) {
  const data = {
    count: res.data.count,
    next: res.data.next,
    previous: res.data.previous,
    results: res.data.results,
    
  };
  return data;
}
