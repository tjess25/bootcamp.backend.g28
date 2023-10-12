const mongoose = require("mongoose");
const URI = process.env.URI

mongoose.set('strictQuery', false);

module.exports = {
    connect: () => {
        mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }, (err) => {
            if (err) {
                console.log(err)
            } else {
                console.log("DB Connected");
            }
        });
    },
    disconnect: (done) => {
        mongoose.disconnect(done);
    }

}