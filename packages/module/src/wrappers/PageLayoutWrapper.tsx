import React from "react";
import { PageLayout as AnsiblePageLayout} from "@ansible/ansible-ui-framework";

export interface PageLayoutProps {
    /** Example of adding a prop in the wrapper*/
    exampleProp?: string;

    /** Content to render inside the page layout component */
    children?: React.ReactNode;
  }
export const PageLayout: React.FunctionComponent<PageLayoutProps> = ({children}) => <AnsiblePageLayout> {children} </AnsiblePageLayout>;