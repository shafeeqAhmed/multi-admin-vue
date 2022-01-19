/*

Array of object

Top level object can be:
1. Header
2. Group (Group can have navItems as children)
3. navItem

* Supported Options

/--- Header ---/

header

/--- nav Grp ---/

title
icon (if it's on top level)
tag
tagVariant
children

/--- nav Item ---/

icon (if it's on top level)
title
route: [route_obj/route_name] (I have to resolve name somehow from the route obj)
tag
tagVariant

*/
// eslint-disable-next-line no-unused-vars
// import dashboard from './dashboard'
// eslint-disable-next-line no-unused-vars
// import appsAndPages from './apps-and-pages'
// eslint-disable-next-line no-unused-vars
// import others from './others'
// eslint-disable-next-line no-unused-vars
// import chartsAndMaps from './charts-and-maps'
// eslint-disable-next-line no-unused-vars
// import uiElements from './ui-elements'
// eslint-disable-next-line no-unused-vars
// import formAndTable from './forms-and-table'
// eslint-disable-next-line no-unused-vars
import adminDashboard from './admin-dashboard'

// Array of sections
// export default [...adminDashboard, ...dashboard, ...appsAndPages, ...uiElements, ...formAndTable, ...chartsAndMaps, ...others]
export default [...adminDashboard]
