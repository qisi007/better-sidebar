import BetterSidebar from "@/components/BetterSidebar.vue";
import BetterSidebarItem from "@/components/BetterSidebarItem.vue";
import "./style/reset.scss";
import "./style/index.scss";

const components = [
    BetterSidebar,
    BetterSidebarItem
]

const install = ( Vue: any ) => {
    components.forEach( el => {
        Vue.component(el.name, el);
    })
}

export default {
    install,
    ...components
};