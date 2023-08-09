import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@patternfly/documentation-framework/components';
import { PageLayout, PageLayoutProps } from "@patternfly/pf-ansible-docs";
const pageData = {
  "id": "pf-ansible-docs",
  "section": "extensions",
  "subsection": "",
  "source": "react",
  "tabName": null,
  "slug": "/extensions/pf-ansible-docs/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/module/patternfly-docs/content/examples/basic.md",
  "relPath": "packages/module/patternfly-docs/content/examples/basic.md",
  "propComponents": [
    {
      "name": "PageLayoutProps",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content to render inside the extended button component"
        },
        {
          "name": "exampleProp",
          "type": "string",
          "description": "Example of adding a prop in the wrapper"
        }
      ]
    }
  ],
  "examples": [
    "Example"
  ]
};
pageData.liveContext = {
  PageLayout,
  PageLayoutProps
};
pageData.relativeImports = {
  
};
pageData.examples = {
  'Example': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Page } from '@patternfly/react-core';\nimport {PageLayout, PageLayoutProps}  from '@patternfly/pf-ansible-docs';\n\nexport const BasicExample: React.FunctionComponent = () => <Page><PageLayout>Hello</PageLayout></Page>;\n","title":"Example","lang":"js"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"basic-usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Basic usage`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Example"])}
  </React.Fragment>
);
Component.displayName = 'ExtensionsPfAnsibleDocsReactDocs';
Component.pageData = pageData;

export default Component;
