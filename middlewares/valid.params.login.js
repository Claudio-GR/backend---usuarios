const validateParamsLogin = (req, res, next) => {
    const { user } = req.body;
    if (!user.email || !user.password) {
        return res.status(400).json({error: "debe ingresar email y contraseña para poder loggear satisfactoriamente"})
    }
    next();
}

export default validateParamsLogin;