const users = [
    {id:1, name:"John"},
    {id:2, name:"Jane"},
    {id:3, name:"Bob"},
    {id:4, name:"Mike"},
    {id:5, name:"Mary"},

];



const getUsers = (req, res) => {
    res.status(200).send({
        message: "Users  were returned",
        users:users,
    });
};


module.exports = { getUsers };