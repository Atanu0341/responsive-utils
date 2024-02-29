# Responsive Utils

Utility library for handling responsive design.

## Installation

```bash
npm install responsive-utils
```

## Usage

```javascript
// Import the utility function
const { isLandscape } = require('responsive-utils');

// Use the function
const orientation = isLandscape(window.innerWidth, window.innerHeight);

console.log('Is Landscape:', orientation);
```

## Example in React

```jsx
import React, { useState, useEffect } from 'react';
import { isLandscape } from 'responsive-utils';

const MyComponent = () => {
  const [orientation, setOrientation] = useState(isLandscape(window.innerWidth, window.innerHeight));

  useEffect(() => {
    const handleResize = () => {
      setOrientation(isLandscape(window.innerWidth, window.innerHeight));
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <p>Device Orientation: {orientation ? 'Landscape' : 'Portrait'}</p>
      {/* Your React component content */}
    </div>
  );
};

export default MyComponent;
```

## API

### `isLandscape(innerWidth: number, innerHeight: number): boolean`

Returns `true` if the device is in landscape mode, and `false` if it is in portrait mode.
