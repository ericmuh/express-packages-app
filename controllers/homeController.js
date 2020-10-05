const homeController = {
  gethome: (req, res) => {
    res.send("<h1>hello world</h1>");
  },
  listen: () => {
    console.log("App running");
  },
};
export default homeController;
