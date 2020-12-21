use musiclist;
db.dropdatabase();

db.songs.insertMany([
    {
        title: "Harrisong",
        songData: ["e", "h", "l", "r", "y", "h"],
        comment: "Spicy",
        thumbnail: ""
    },
    {
        title: "Ode to a salmon",
        songData: ["b", "z", "b", "z", "n", "n", "b", "n", "b", "z"],
        comment: "Lovely",
        thumbnail: ""
    },
    {
        title:"Christmas",
        songData: ["f", "f", "g", "f", "d", "s", "s"],
        comment: "Christmas Carols",
        thumbnail: ""
    }
])