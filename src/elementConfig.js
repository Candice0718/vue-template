import Vue from 'vue';
import { Table, Button, container, select, scrollbar, menu, submenu, menuItem, divider,breadcrumb,breadcrumbItem,dropdown,dropdownMenu,dropdownItem,
    main, footer} from 'element-ui';
const components = [
    Table,
    Button,
    container,
    select,
    scrollbar,
    menu,
    submenu,
    menuItem,
    divider,
    breadcrumb,
    breadcrumbItem,
    dropdown,
    dropdownMenu,
    dropdownItem,
    main,
    footer
];
components.forEach(item => {
    Vue.use(item);
});