express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send({ msg: 'Welcome to the Contact App' }));
const PORT = process.env.PORT || 9000;

app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contact'));
app.use('/api/auth', require('./routes/auth'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
