export const connectToDatabase = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Database connected!')
        }, 1000)
    })
}