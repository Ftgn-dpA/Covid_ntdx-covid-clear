/**
 * 404
 */

import Container from '@/containers';

const errorRouter = {
    path: '/404',
    name: '404',
    component: Container,
    redirect: '/404/index',
    meta: {
        title: '404'
    }
};

export default errorRouter;