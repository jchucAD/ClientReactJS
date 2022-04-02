import userModel from '../modeles/userModel.js'

export const addUser = async (req, res) => {
    const user = new userModel(req.body)
    console.log(req.body)
    try {
        await user.save()
        res.send("Résultat enregistré:" + user)
    } catch (err) {
        res.status(500).send(err)
    }
}