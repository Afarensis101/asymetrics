
import * as React from "react";
import TemplateWrapper from './src/components/layout/layout';

export const onRouteUpdate = ({ location, prevLocation }) => {
  console.log("new pathname", location.pathname)
  console.log("old pathname", prevLocation ? prevLocation.pathname : null)
}

export const wrapPageElement = ({ element, props }) => <TemplateWrapper {...props}>{element}</TemplateWrapper>;
