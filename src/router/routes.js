import index from '../views/index.vue'
import home from '../views/home.vue'
import catagory from '../views/catagory.vue'
import cart from '../views/cart.vue'
import mine from '../views/mine.vue'
let routes = [{
        path: "/",
        redirect: "/index/home"
    },
    {
        name: "index",
        path: '/index',
        component: index,
        children: [{
                name: "home",
                path: "home",
                component: home
            }, {
                name: "catagory",
                path: "catagory",
                component: catagory
            }, {
                name: "cart",
                path: "cart",
                component: cart
            },
            {
                name: "mine",
                path: "mine",
                component: mine
            }
        ]
    }

]
export default routes; //抛出