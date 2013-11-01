Router.configure
  layout: 'layout'
  notFoundTemplate: '404'
  loadingTemplate: 'loading'
  renderTemplates:
    header:
      to: 'header'
    footer:
      to: 'footer'

Router.map ->
  @route 'home',
    path: '/'

  @route 'dashboard',
    path: '/dashboard'