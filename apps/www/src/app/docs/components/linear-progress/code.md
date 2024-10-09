```jsx:code.jsx
import { LinearProgress } from "@andore-ui/linear-progress";

const Preview = () => {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setTimeout(() => setProgress(66), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <LinearProgress value={progress}/>
    );
};

export default Preview;
```
