import {useState} from 'react';

const useDarkMode = () => {
    const [value, setValue] = useState(false);

    return [value, setValue]
}

export default useDarkMode;