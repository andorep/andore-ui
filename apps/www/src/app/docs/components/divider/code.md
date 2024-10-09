```jsx:code.jsx
import {Typography} from "@andore-ui/typography";
import { Divider } from "@andore-ui/divider";

const Preview = () => {
  return (
      <>
          <Typography variant="display" size="sm" color={'primary'}>
              Awesome Divider
          </Typography>
          <Divider />

          <div style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              height: '16px',
              marginTop: '1rem',
              gap: 3
          }}>
              <Typography variant="body" size="sm" color={'primary'}>
                  Yep
              </Typography>
              <Divider orientation={'vertical'} decorative />
              <Typography variant="body" size="sm" color={'primary'}>
                  You are right
              </Typography>
              <Divider orientation={'vertical'} decorative />
              <Typography variant="body" size="sm" color={'primary'}>
                  Agree
              </Typography>
          </div>
      </>
  );
};

export default Preview;
```
