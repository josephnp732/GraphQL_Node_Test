import mongoose from 'mongoose';

// Mongo Connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/contacts', {
    useNewUrlParser: true
});

const ContactSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String
    },
    company: {
        type: String
    }
});

const Contacts = mongoose.model('contacts', ContactSchema);

export { Contacts };