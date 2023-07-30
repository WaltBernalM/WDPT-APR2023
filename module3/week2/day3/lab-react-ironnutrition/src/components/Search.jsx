import { Divider, Input } from 'antd';

// Iteration 5
function Search(props) {
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={undefined} type="text" onChange={(event) => props.onSearch(event.target.value)} /> {/* 4 */}
    </>
  );
}

export default Search;