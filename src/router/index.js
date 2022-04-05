import Vue from 'vue';
import Router from 'vue-router';
import EventComponent from "@/components/EventComponent";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/events',
            component: EventComponent,
            name: 'EventComponent'
        }
    ]
})
