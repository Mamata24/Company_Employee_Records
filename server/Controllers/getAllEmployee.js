const Employee = require("../Models/employee"); 
function Paginator(items, page, per_page) {
  var page = page || 1,
    per_page = per_page || 5,
    offset = (page - 1) * per_page,
    paginatedItems = items.slice(offset).slice(0, per_page),
    total_pages = Math.ceil(items.length / per_page);
  return {
    page: page,
    per_page: per_page,
    pre_page: page - 1 ? page - 1 : null,
    next_page: total_pages > page ? page + 1 : null,
    total: items.length,
    total_pages: total_pages,
    data: paginatedItems,
  };
}

exports.getAllEmployee = async (req, res) => {
  
  try {
    let employee = await Employee.find();
    
    const resp = Paginator(employee,req.query.page, req.query.limit);
    // console.log(resp.length)
    res.send(resp);
  } catch (e) {
    res.status(500).send(e);
  }
};

exports.searchEmployee = async (req, res) => {
    try {
        const employee = await Employee.findOne({ employee_name: req.body.name });
        if (!employee) {
            return res.status(400).send('employee not found')
        }
        res.send(employee)
    } catch (e) {
        res.status(400).send(e)
    }
}

exports.getAllEmployee;
