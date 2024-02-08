const asyncHandler = (requstHandler) => {
    (req, res, next) => {
        Promise.resolve().catch((err) => next(err))
    }
}


export { asyncHandler }


//-------------- another method -------------

// const asyncHandler = (fn) => async(req, res, next) => {
//     try {
//         await fn(req, res, next)        
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }