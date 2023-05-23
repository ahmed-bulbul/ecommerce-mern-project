const {Schema,model} = require('mongoose')

const userSchema = new Schema({
    username: {
        type: String,
        required:[true,'Username is required'],
        trim: true,
        minLength: [3,'Username cannot be less than 3 characters'],
        maxLength: [20,'Username cannot be more than 20 characters'],

    },
    password: {
        type: String,
        required:[true,'Password is required'],
        trim: true,
        minLength: [6,'Password cannot be less than 6 characters'],
        maxLength: [20,'Password cannot be more than 20 characters'],
        set: value => bcrypt.hashSync(value, bcrypt.genSaltSync(10)),
    },
    email:{
        type: String,
        required:[true,'Email is required'],
        trim: true,
        unique: true,
        validate: {
            validator: function(v){
                return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
            },
            message: props => `${props.value} is not a valid email`
        },
    },
    image:{
        type: String,
    },
    address:{
        type: String,
        required:[true,'Address is required'],
    },
    phone:{
        type: String,
        required:[true,'Phone is required'],
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },
    isBanned:{
        type: Boolean,
        default: false,
    },


},{timestamps: true});

const User = model('Users',userSchema);
module.exports = User;