import Vue from 'vue';
import App from './App';
import Element from 'element-ui';
import 'element-ui/lib/theme-default/index.css'
import VTable from '../src/table';
import VTableColumn from '../src/table/src/table-column';

Vue.use(Element);

Vue.component('VTable', VTable);
Vue.component('VTableColumn', VTableColumn);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
});