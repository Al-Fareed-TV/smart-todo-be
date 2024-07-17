exports.addTodo = async (req, res) => {
    const { todo, } = req.body;
const { error } = await supabase
  .from("countries")
    .insert({ id: 1, name: "Denmark" });
    
    return res.status(201).json({
        message:"Added your todo"
    })
}
exports.removeTodo = async (req, res) => {
     return res.status(200).json({
       message: "Removed your todo",
     });
}
exports.updateTodo = async (req, res) => {
     return res.status(201).json({
       message: "updated your todo",
     });
}
exports.getTodo = async (req, res) => {
     return res.status(201).json({
       message: "getting your todo",
     });
}
