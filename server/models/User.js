const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const {nanoid} = require("nanoid");


const SALT_WORK_FACTOR = 10;

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: false,
        
    },
    lastname:{
        type: String,
        required: true,
        unique: false,
    },
    password: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        validate: {
            validator: async value => {
                const user = await User.findOne({name: value});
                if(user) return false;
            },
            message: 'This user is already registered'
        }
    },
    role:{
        type: String,
        required: true,
        default: "tourist",
    },
    token: {
        type: String,
        required: true
    }
})

UserSchema.pre('save', async function(next) {
    if(!this.isModified('password')) return next();

    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    const hash = await bcrypt.hash(this.password, salt);

    this.password = hash;

    next();
})

UserSchema.set('toJSON', {
    transform: (doc, ret, options) => {
        delete ret.password;
        return ret;
    }
})

UserSchema.methods.checkPassword = function(password) {
    return bcrypt.compare(password, this.password);
};

UserSchema.methods.generateToken = function() {
    this.token = nanoid();
};


const User = mongoose.model('User', UserSchema);

module.exports = User;