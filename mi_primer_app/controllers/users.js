module.exports = {

    get: async function name(req, res) {
        //users.findById(req.param.id)
        res.status(200).send({msg: "user", data: { id: "ibgheu"}})
    },
    getAll: async function name(req, res) {
        res.status(200).send({msg: "users", data: ['user1', 'user2']})
    },
    post: async (req, res) => {
        res.status(201).send({msg: "user create"})
    },
    put: async (req, res) => {
        console.log(req.params.id);
        res.status(201).send({msg: "user updated"})
    },
    delete: async (req, res) => {
        res.status(201).send({msg: "user deleted"})
    }

}