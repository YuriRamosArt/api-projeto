const medias = [
    {id: 1, type: "manga", title: "One Piece" },
    {id: 2, type: "manwha", title: "The Word after the End"},
    {id: 3, type: "manga", title: "Jujustu Kaisen"},
    {id: 4, type: "manwha", title: "The Best Men in Change"},
]


module.exports = (req,res) => {
    if (req.method === "GET") {
        return res.status(200).json({medias});
    }else if (req.method === "POST") {
        const newMedias = req.body;
        return res.status(201).json([...medias, newMedias])
    }
}