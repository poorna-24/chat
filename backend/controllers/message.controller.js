export const sendMessage = (req, res) => {
  try {
    const { message } = req.body;
    const { id } = req.params;
    console.log(id);
    // console.log("message send =", req.params.id);
  } catch (error) {
    console.log("Error in send message controller", error.message);
    res.status(400).json({ error: "internal server error" });
  }
};
