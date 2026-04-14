const express = require('express');
const app = express();

app.get('/api/hello', (req, res) => {
  res.status(200).json({ message: 'Hello from API!' });
});

const PORT = process.env.PORT || 3000;
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Test: http://localhost:${PORT}/api/hello`);
  });
}

module.exports = app;