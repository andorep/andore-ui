```jsx:code.jsx
import { Select } from "@andore-ui/select";

const Preview = () => {
  const [value1, setValue1] = React.useState("");
  const [value2, setValue2] = React.useState("");
  const handleChange1 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue1(e.target.value);
  };
  const handleChange2 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue2(e.target.value);
  };
  return (
    <div className="flex flex-col gap-4 w-fit">
      <Select
        value={value1}
        onChange={handleChange1}
        variant={"filled"}
        placeholder={"Select an item"}
        label={"Items"}
      >
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </Select>
      <Select
        value={value2}
        onChange={handleChange2}
        variant={"outlined"}
        placeholder={"Select an item"}
        label={"Items"}
      >
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </Select>
    </div>
  );
};

export default Preview;
```
