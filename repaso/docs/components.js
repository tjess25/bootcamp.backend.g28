module.exports = {
    components: {
        schemas: {
            userBody: {
                type: 'object',
                properties: {
                    firstName: {
                        type: String,
                        example: "Name"
                    },
                    lastName: {
                        type: String,
                        example: "LastName"
                    },
                    email: {
                        type: String,
                        example: "email@mail.com"
                    },
                    gender: {
                        type: String,
                        example: "Female"
                    },
                    password: {
                        type: String,
                        example: "vW8!y@kDY<VQ"
                    },
                    role: {
                        type: String,
                        example: "Admin"
                    },
                    dateBirth: {
                        type: Date,
                        example: "2001/12/24"
                    }
                }
                
            },
            user: {
                type: 'object',
                properties: {
                    _id: {
                        type: String,
                        example: '6528a9d8bc6470320662b6eb'
                    },
                    firstName: {
                        type: String,
                        example: "Name"
                    },
                    lastName: {
                        type: String,
                        example: "LastName"
                    },
                    email: {
                        type: String,
                        example: "email@mail.com"
                    },
                    gender: {
                        type: String,
                        example: "Female"
                    },
                    password: {
                        type: String,
                        example: "vW8!y@kDY<VQ"
                    },
                    role: {
                        type: String,
                        example: "Admin"
                    },
                    dateBirth: {
                        type: Date,
                        example: "2001/12/24"
                    }
                }
                
            }
        }
    }
}