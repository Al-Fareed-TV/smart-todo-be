const supabase = require("../shared/config/db.cjs");

exports.signup = async (req, res) => {
  const { email, password } = req.body;
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });
  if (!error) {
    return res.status(201).json({
      message: data,
    });
  } else {
    return res.status(400).json({ error: error });
  }
};
exports.login = async (req, res) => {
  const { email, password } = req.body;
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  if (!error) {
    return res.status(200).json({
      message: "User logged in successfully",
      data: data,
    });
  }
  return res.status(400).json({
    error: "Sorry bro this didn;t work..!",
  });
};



exports.signout = async (req, res) => {
  const { error } = await supabase.auth.signOut();
  if (!error)
    res.status(200);
  res.status(400).json({error:"Couldn't sing out"})
};
