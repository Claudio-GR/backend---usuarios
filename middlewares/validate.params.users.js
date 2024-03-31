const validateParamsUsers = (req, res, next) => {
    const { user } = req.body;
    if (!user.role || !user.language || !user.email || !user.password) {
        return res.status(400).json({error: "debe ingresar todos los campos para registrar un usuario"})
    }
    next();
}

export default validateParamsUsers;