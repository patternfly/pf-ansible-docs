module.exports = {
  '/extensions/pf-ansible-docs/design-guidelines': {
    id: "pf-ansible-docs",
    title: "pf-ansible-docs",
    toc: [{"text":"Header"},[{"text":"Sub-header"}]],
    section: "extensions",
    subsection: "",
    source: "design-guidelines",
    tabName: null,
    Component: () => import(/* webpackChunkName: "extensions/pf-ansible-docs/design-guidelines/index" */ './extensions/pf-ansible-docs/design-guidelines')
  },
  '/extensions/pf-ansible-docs/react': {
    id: "pf-ansible-docs",
    title: "pf-ansible-docs",
    toc: [{"text":"Basic usage"},[{"text":"Example"}]],
    examples: ["Example"],
    section: "extensions",
    subsection: "",
    source: "react",
    tabName: null,
    Component: () => import(/* webpackChunkName: "extensions/pf-ansible-docs/react/index" */ './extensions/pf-ansible-docs/react')
  }
};