```jsx:code.jsx

import React from "react";
import {Textarea} from "@andore-ui/textarea";


const Preview = () => {
  return (
      <div className={"w-80 flex flex-col gap-4"}>
          <Textarea label="Label" variant={'filled'} placeholder="Placeholder" />
          <Textarea label="Label" variant={'outlined'} placeholder="Placeholder" />
      </div>
  );
};

export default Preview;
```
