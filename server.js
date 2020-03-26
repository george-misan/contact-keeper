express = require('express');

const app = express();

// Init Middleware
app.use();

app.get('/', (req, res) => res.send({ msg: 'Welcome to the Contact App' }));
const PORT = process.env.PORT || 5000;

app.use('/api/users', require('./routes/users'));
app.use('/api/contact', require('./routes/contact'));
app.use('/api/auth', require('./routes/auth'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
