const Employer = require("../Models/employer");
exports.getEmployer = async (req, res) => {
  try {
    //console.log(Employer);
    const employer = await Employer.findByCredentials(
      req.body.email,
      req.body.password
    );
    // console.log(user);
    res.send({ employer });
  } catch (e) {
    res.status(400).send(e);
  }
};
