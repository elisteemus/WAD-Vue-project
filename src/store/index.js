import { createStore } from "vuex";

export default createStore({
    state: {
        posts: [
            {
                "id": "1",
                "date": "September 15, 2021 23:32",
                "photocontent": null,
                "textcontent": "Which weighs more, a pound of feathers or a pound of bricks?",
                "likes": 0
            },
            {
                "id": "2",
                "date": "September 14, 2021 11:23",
                "photocontent": "https://gray-wave-prod.cdn.arcpublishing.com/resizer/kOlDL0vTVi6MXd_-TI9tRVqE9lU=/980x0/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/4HKQMD36HZCM7PI67P75BFUADE.png",
                "textcontent": "November rain...",
                "likes": 0
            },
            {
                "id": "3",
                "date": "September 13, 2021 09:57",
                "photocontent": "https://storage.googleapis.com/yk-cdn/photos/pdp/daniel-metz/metz-daniel-guilin-scenery.jpg",
                "textcontent": "Good times.",
                "likes": 0
            },
            {
                "id": "4",
                "date": "September 11, 2021 05:14",
                "photocontent": null,
                "textcontent": "It's raining today.",
                "likes": 0
            },
            {
                "id": "5",
                "date": "September 10, 2021 16:22",
                "photocontent": null,
                "textcontent": "Might watch a movie tonight.",
                "likes": 0
            },
            {
                "id": "6",
                "date": "September 9, 2021 17.02",
                "photocontent": "https://phantom-marca.unidadeditorial.es/b5a6558955344c3c7f9fa90ac042a66d/resize/660/f/webp/assets/multimedia/imagenes/2021/10/17/16345007851976.jpg",
                "textcontent": "This is my city",
                "likes": 0
            },
            {
                "id": "7",
                "date": "September 8, 2021 19:33",
                "photocontent": null,
                "textcontent": "I love Batman!",
                "likes": 0
            },
            {
                "id": "8",
                "date": "September 7, 2021 20:54",
                "photocontent": null,
                "textcontent": "Humpty Dumpty sat on a wall, Humpty Dumpty had a great fall, All the king's horses and all the king's men, Couldn't put Humpty together again.",
                "likes": 0
            },
            {
                "id": "9",
                "date": "September 6, 2021 14:17",
                "photocontent": "https://t4.ftcdn.net/jpg/03/05/50/59/360_F_305505916_NESTG4pBBMuQUo2MZAvfJJGunFzy5YVJ.jpg",
                "textcontent": "Beautiful!",
                "likes": 0
            },
            {
                "id": "10",
                "date": "September 6, 2021 10:23",
                "photocontent": null,
                "textcontent": "Hello everyone!",
                "likes": 0
            }
        ]
    },
    mutations: {
        incrementCounter: (state, id) => {
            state.posts[id - 1].likes++;
        },
        resetCounter: (state) => {
            state.posts.forEach((post) => {
                post.likes = 0;
            });
        }
    },
    actions: {},
    modules: {},
});
