# Structure of Website UI

This document outlines the UI structure of the Portfolio website. There are two folders used for configuring and styling UI elements. The **scripts** folder contains functions for configuration, while the **style** folder holds CSS classes for styling.

## Style

The **style** folder contains various CSS files that define the styling of the webpage. The overall structure is outlined below:

- A particle background system will be used throughout the website. 
- This particle system background will be contained within a `<div>` element with the class `background`.
- The background and foreground elements will be positioned inside the `wrapper` class.

### List of Classes

| Class Name   | Class Description |
|--------------|-------------------|
| .wrapper     | The main container class. It will contain both the foreground and background elements. |
| .background  | A fixed background `<div>` element with content defined inside it. |
| .foreground  | A foreground `<div>` element with content defined inside it. |
