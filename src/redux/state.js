
let state = {
    dialogsPage: {
        dialogsData: [
            { id: 1, name: 'Dima', surname: 'Mazepa', },
            { id: 2, name: 'Roma', surname: 'Volin',},
            { id: 3, name: 'Lada', surname: 'Martinyk',},
            { id: 4, name: 'Kate', surname: 'Jordan',},
            { id: 5, name: 'Ivan', surname: 'Ivanov',}
        ],
        msgData: [
            { id: 1, message: 'hi' },
            { id: 2, message: 'How are you?' },
            { id: 3, message: 'How do you do?' },
            { id: 4, message: 'How are you doing?' },
            { id: 5, message: 'Where you live?' }
        ],
        imgData: [
            { id: 1, img: '' },
            { id: 2, img: ' ', },
            { id: 3, img: ' ', },
            { id: 4, img: ' ', },
            { id: 5, img: ' ', }
        ]

    },
    
    sidebar: [
        { id: 1, name: 'Dima',  },
        { id: 2, name: 'Roma', },
        { id: 3, name: 'Lada', },
    ],

    profilePage: {
        postData: [
            { id: 1, message: 'Hi, how are you?', likesCount: 10 },
            { id: 2, message: 'It is my first post', likesCount: 15 }
        ]
    }
}

export default state; 