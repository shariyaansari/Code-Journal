import express from "express";
import Note from "../models/Note.js";

const router = express.Router();
router.use(express.json());

// Get all notes
router.get("/", async (req, res) => {
	try {
		const notes = await Note.find().sort({ createdAt: -1 });
		res.json(notes);
	} catch (err) {
		res.status(500).json({ error: "failed to fetch notes" });
	}
});

// Post create note
router.post("/", async (req, res) => {
	try {
		const { title, content } = req.body;
		if (!title || !content) {
			return res.status(400).json({ error: "Title and content required" });
		}
		const newNote = await Note.create({ title, content });
		res.status(200).json(newNote);
	} catch (err) {
		res.status(500).json({ error: "failed to create note" });
	}
});

// PUT request
router.put("/:id", async (req, res) => {
	try {
    const { id } = req.params;
    const { title, content } = req.body;

    const updatedNote = await Note.findByIdAndUpdate(
      id,
      { title, content },
      { new: true }
    );

    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.json(updatedNote);
  } catch (error) {
    console.error("Error updating note:", error);
    res.status(500).json({ message: "Server error" });
  }
});
// Delete Note 
router.delete("/:id", async (req, res) => {
    try{
        const deleted = await Note.findByIdAndDelete(req.params.id);
        if(!deleted) return res.status(400).json({error: "Title and content required"}) 
        res.json({success : true});
    }catch(err){
        res.status(500).json({error:"failed to delete note"});
    }    
})

export default router;
