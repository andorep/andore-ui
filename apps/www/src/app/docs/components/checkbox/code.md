```jsx:code.jsx
import { Checkbox, CheckboxIndicator } from "@andore-ui/checkbox";
import {Label} from "@andore-ui/label";

const Preview = () => {
  return (
    <div className="flex items-center">
      <Checkbox id="c1">
        <CheckboxIndicator />
      </Checkbox>
      <Label htmlFor="c1">Accept terms and conditions.</Label>
    </div>
  );
};

export default Preview;
```
