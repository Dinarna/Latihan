module.exports = {
  index: async (req, res) => {
    const name = 'Jhon';
    const title = "Title"
    return res.render('index', { 
      name,
      title
    
    });
  },
};
