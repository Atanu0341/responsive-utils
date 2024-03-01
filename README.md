# Responsive Utils

***A versatile utility library for simplifying responsive design in JavaScript and Node.js.***

Responsive Utils provides a collection of functions to seamlessly handle responsive design scenarios. Whether you're working on a web application or a Node.js project, these utilities empower developers to effortlessly adapt to different device orientations.

## Key Features:

* ***isLandscape Function:*** Determine if a device is in landscape mode with a straightforward function call.

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

## Contribution

Contributions are welcome! Here are some ways you can contribute to the project:

* Report bugs and issues.
* Propose and implement new features.
* Improve documentation.
* Provide feedback on the project.

To contribute, please follow these steps:

 1. Fork the repository.
 2. Create a new branch for your feature or bug fix.
 3. Make your changes and commit them.
 4. Push your changes to your fork.
 5. Submit a pull request to the main repository.

Thank you for using Responsive Utils!

