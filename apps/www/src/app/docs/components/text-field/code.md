```jsx:code.jsx
import { TextField } from "@andore-ui/text-field";

const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
        <path
            d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/>
    </svg>
);

const CancelIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
        <path
            d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
    </svg>
);

const Preview = () => {
  return (
      <div className={"w-80 flex flex-col gap-4"}>
          <TextField variant={'outlined'} label={'Label'} supportText={'Support text'} placeholder={'Nice placeholder!'} leading={<SearchIcon />} trailing={<CancelIcon />} />
          <TextField variant={'filled'} label={'Label'} supportText={'Support text'} placeholder={'Nice placeholder!'} leading={<SearchIcon />} trailing={<CancelIcon />} />
          <TextField variant={'filled'} label={'Label'} supportText={'Support text'} placeholder={'Nice placeholder!'} defaultValue={'1,000'} prefix={'$'} />
          <TextField variant={'filled'} label={'Label'} supportText={'Support text'} placeholder={'Nice placeholder!'} defaultValue={'1,000'} suffix={'kg'} />
      </div>
  );
};

export default Preview;
```
