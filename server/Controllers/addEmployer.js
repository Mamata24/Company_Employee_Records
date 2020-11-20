const Employer = require("../Models/employer");
exports.addEmployer = async (req, res) => {
  // const user = (await User.findOne({ email: req.body.email }))
  // console.log(user)
  if (!(await Employer.findOne({ email: req.body.email }))) {
    const employer = new Employer(req.body);
    // console.log(user);
    try {
      await employer.save();
      res.status(201).send({ employer });
    } catch (e) {
      res.status(400).send(e);
    }
  } else {
    const employer = new Employer(req.body);
    res.status(201).send({ employer });
  }
};
