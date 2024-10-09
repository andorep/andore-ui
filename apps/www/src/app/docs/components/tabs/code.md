```jsx:code.jsx
import { Tab, TabPanel, TabsContext, TabsList } from "@andore-ui/tabs";

const Preview = () => {
  return (
      <div className={"w-96"}>
          <TabsContext defaultValue="1">
              <TabsList>
                  <Tab value={'1'}>Tab 1</Tab>
                  <Tab value={'2'}>Tab 2</Tab>
                  <Tab value={'3'}>Tab 3</Tab>
              </TabsList>
              <TabPanel value={'1'}>Tab 1 content</TabPanel>
              <TabPanel value={'2'}>Tab 2 content</TabPanel>
              <TabPanel value={'3'}>Tab 3 content</TabPanel>
          </TabsContext>
      </div>
  );
};

export default Preview;
```
