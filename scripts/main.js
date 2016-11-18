require.config({
    baseUrl: '/scripts/project',
    paths: {
        'demo': 'demo'
    }
});


require(['demo'], function (demo) {
    alert(demo.add(1, 2));
});
