use Company
db.employees.drop();
db.employees.insertMany([
  { employee_id: 101, name: "Sonia Rao", department: "Engineering", salary: 95000, hire_date: new Date("2023-01-15"), performance_score: 4.5, status: "Active" },
  { employee_id: 102, name: "Rajesh Kumar", department: "HR", salary: 68000, hire_date: new Date("2024-03-22"), performance_score: 4.1, status: "Active" },
  { employee_id: 103, name: "Arjun Singh", department: "Engineering", salary: 120000, hire_date: new Date("2022-06-01"), performance_score: 4.8, status: "Active" },
  { employee_id: 104, name: "Priya Mehta", department: "Sales", salary: 85000, hire_date: new Date("2023-11-10"), performance_score: 4.2, status: "Active" },
  { employee_id: 105, name: "Vikram Reddy", department: "Sales", salary: 85000, hire_date: new Date("2024-08-01"), status: "On Leave" }
]);
const depts = ["Engineering", "HR", "Sales", "Marketing", "Finance"];
const statuses = ["Active", "Active", "Active", "On Leave"];
const extra = [];
for (let i = 6; i <= 150; i++) {
  extra.push({ employee_id: 100 + i, name: "Employee_" + i, department: depts[i % depts.length], salary: 60000 + ((i * 2500) % 70000), hire_date: new Date(2022 + (i % 3), i % 12, (i % 28) + 1), performance_score: Number((3.5 + ((i * 0.1) % 1.5)).toFixed(1)), status: statuses[i % statuses.length] });
}
db.employees.insertMany(extra);
db.employees.find({ salary: { $gt: 90000, $lte: 120000 } });
db.employees.find({ department: { $in: ["HR", "Sales"] } });
db.employees.find({ status: { $ne: "On Leave" } });
db.employees.find({ department: "Engineering", performance_score: { $gte: 4.5 } });
db.employees.find({ $or: [ { department: "HR" }, { salary: { $gt: 100000 } } ] });
db.employees.find({ status: "Active", department: { $in: ["Engineering", "Sales"] }, hire_date: { $lt: new Date("2024-01-01") } });
